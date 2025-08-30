// components/LogoSpinner.tsx
"use client";

import Image from "next/image";
import React from "react";

type Props = { logoSrc: string; size?: number; className?: string };

export default function LogoSpinner({ logoSrc, size = 48, className }: Props) {
  return (
    <div
      className={["logo-spin relative inline-block perspective-1000", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div
        className="spin-wrap absolute inset-0"
        style={{
          transformStyle: "preserve-3d",
          animation: "spinY linear infinite",
          // Safari precisa da var definida inline
          // @ts-expect-error CSS var
          ["--spin-duration" as any]: "6s",
        }}
      >
        {/* Frente */}
        <Image
          src={logoSrc}
          alt=""
          width={size}
          height={size}
          className="absolute inset-0 h-full w-full backface-hidden"
          priority
        />
        {/* Verso (mesma arte, mas rotacionada) */}
        <Image
          src={logoSrc}
          alt=""
          width={size}
          height={size}
          className="absolute inset-0 h-full w-full backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
          priority
        />
      </div>

      <style jsx>{`
        .perspective-1000 { perspective: 1000px; }
        .backface-hidden { backface-visibility: hidden; }
        .logo-spin .spin-wrap { animation-duration: var(--spin-duration, 6s); }
        .logo-spin:hover .spin-wrap { --spin-duration: 2s; }
        @keyframes spinY { from { transform: rotateY(0deg) } to { transform: rotateY(360deg) } }
        @media (prefers-reduced-motion: reduce) { .logo-spin .spin-wrap { animation: none } }
      `}</style>
    </div>
  );
}
