// components/RotatingLogo.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useSidebar } from "./SidebarProvider";

export default function RotatingLogo() {
  const { toggle } = useSidebar();
  const ref = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const anim = el.animate(
      [{ transform: "rotateY(0deg)" }, { transform: "rotateY(360deg)" }],
      { duration: 6000, iterations: Infinity }
    );
    animRef.current = anim;

    const onEnter = () => { if (animRef.current) animRef.current.playbackRate = 3; };
    const onLeave = () => { if (animRef.current) animRef.current.playbackRate = 1; };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyPref = () => { mq.matches ? anim.pause() : anim.play(); };
    mq.addEventListener?.("change", applyPref);
    applyPref();

    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      mq.removeEventListener?.("change", applyPref);
      anim.cancel();
    };
  }, []);

  return (
    <button
      aria-label="Abrir/fechar menu"
      onClick={toggle}
      className="relative w-14 h-14 mx-auto block"
      title="Menu"
    >
      <div
        ref={ref}
        className="w-14 h-14 relative [transform-style:preserve-3d] will-change-transform"
      >
        {/* face frontal */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image src="/polus-logo.svg" alt="Polus Eletrotécnica" fill className="object-contain" priority />
        </div>
        {/* face traseira (texto nunca espelha visualmente) */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image src="/polus-logo.svg" alt="Polus Eletrotécnica" fill className="object-contain" priority />
        </div>
      </div>
    </button>
  );
}
