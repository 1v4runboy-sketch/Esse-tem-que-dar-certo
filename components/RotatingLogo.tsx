"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function RotatingLogo() {
  const ref = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // cria animação contínua
    const anim = el.animate(
      [{ transform: "rotateY(0deg)" }, { transform: "rotateY(360deg)" }],
      { duration: 6000, iterations: Infinity }
    );
    animRef.current = anim;

    const enter = () => { if (animRef.current) animRef.current.playbackRate = 3; };
    const leave = () => { if (animRef.current) animRef.current.playbackRate = 1; };

    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);

    // respeita prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => {
      if (mq.matches && animRef.current) animRef.current.pause();
      else if (animRef.current) animRef.current.play();
    };
    mq.addEventListener?.("change", onChange);
    onChange();

    return () => {
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      mq.removeEventListener?.("change", onChange);
      anim.cancel();
    };
  }, []);

  return (
    <div className="w-16 h-16 mx-auto" ref={ref} aria-label="Polus Eletrotécnica">
      <Image
        src="/polus-logo.svg"
        alt="Polus Eletrotécnica"
        width={64}
        height={64}
        className="w-16 h-16 object-contain backface-hidden"
        priority
      />
    </div>
  );
}
