"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SITE } from "@/lib/site";

/**
 * Usa Web Animations API (WAAPI) para mudar a velocidade sem reiniciar a animação.
 * Base 6s/volta; hover 2s/volta (3x mais rápido).
 * Duas faces (frente e verso com 180°) para evitar texto espelhado.
 */
export default function LogoSpinner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spinnerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<Animation | null>(null);

  useEffect(() => {
    if (!spinnerRef.current) return;
    const el = spinnerRef.current;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 20000 : 6000;

    animRef.current = el.animate(
      [{ transform: "rotateY(0deg)" }, { transform: "rotateY(360deg)" }],
      { duration, iterations: Infinity, easing: "linear" }
    );

    const onEnter = () => {
      if (!animRef.current) return;
      animRef.current.updatePlaybackRate(3); // 3x mais rápido
    };
    const onLeave = () => {
      if (!animRef.current) return;
      animRef.current.updatePlaybackRate(1);
    };

    const c = containerRef.current!;
    c.addEventListener("mouseenter", onEnter);
    c.addEventListener("mouseleave", onLeave);
    return () => {
      c.removeEventListener("mouseenter", onEnter);
      c.removeEventListener("mouseleave", onLeave);
      animRef.current?.cancel();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative perspective-[1200px]">
      <div ref={spinnerRef} className="relative h-24 w-24 [transform-style:preserve-3d]">
        {/* Frente */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <Image src={SITE.headerLogo} alt="Polus" fill className="object-contain" />
        </div>
        {/* Verso (rotacionado 180° para manter texto legível) */}
        <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <Image src={SITE.headerLogo} alt="Polus" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
