"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  src: string;        // ex.: "/polus-logo.svg"
  size?: number;      // px
  hoverSpeedUp?: number; // multiplicador no hover (ex.: 3)
  axis?: "y" | "z";   // "y" faria flip espelhado; "z" evita espelhamento
};

// Para evitar texto espelhado, recomendo axis="z"
export default function RotatingLogo({
  src,
  size = 72,
  hoverSpeedUp = 3,
  axis = "z",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const angleRef = useRef<number>(0);
  const speedRef = useRef<number>(360 / 6); // 360° / 6s = 60°/s (base)
  const [hover, setHover] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);

  useEffect(() => {
    const loop = (t: number) => {
      const last = lastRef.current ?? t;
      lastRef.current = t;
      const dt = (t - last) / 1000;
      const base = 360 / 6;
      speedRef.current = hover ? base * hoverSpeedUp : base;
      angleRef.current = (angleRef.current + speedRef.current * dt) % 360;

      const el = ref.current;
      if (el) {
        const deg = angleRef.current;
        el.style.transform =
          axis === "y" ? `rotateY(${deg}deg)` : `rotate(${deg}deg)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hover, hoverSpeedUp, axis]);

  return (
    <div
      className="inline-flex select-none will-change-transform"
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ transformOrigin: "50% 50%" }}
      aria-hidden
    >
      <Image
        src={src}
        alt="Polus Eletrotécnica"
        width={size}
        height={size}
        priority
      />
    </div>
  );
}
