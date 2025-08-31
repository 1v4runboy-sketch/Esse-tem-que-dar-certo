// components/CinematicHero.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import SITE from "@/lib/site";

export default function CinematicHero() {
  const [videoOk, setVideoOk] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Se o browser bloquear autoplay, tentamos play em mute
    const v = videoRef.current;
    if (!v) return;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch {
        // se não tocar, cai no fallback (webp)
        setVideoOk(false);
      }
    };
    tryPlay();
  }, []);

  return (
    <section className="relative overflow-hidden rounded-xl border bg-black">
      {/* Vídeo cinematográfico (se existir) */}
      {videoOk && (
        <video
          ref={videoRef}
          className="w-full h-[300px] md:h-[380px] object-cover"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoOk(false)}
          poster="/Loop-ezgif.com-video-to-webp-converter.webp"
        >
          <source src="/media/polus-hero.webm" type="video/webm" />
          <source src="/media/polus-hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* Fallback: teu .webp animado */}
      {!videoOk && (
        <img
          src="/Loop-ezgif.com-video-to-webp-converter.webp"
          alt="Logo Polus no espaço — loop"
          className="w-full h-[300px] md:h-[380px] object-cover"
          loading="eager"
        />
      )}

      {/* Overlays para “cinematográfico” */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(transparent_60%,black)] opacity-60" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-20"
           style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/></svg>')" }} />

      {/* Título e subtítulo */}
      <div className="absolute bottom-5 left-5 right-5 text-white">
        <h1 className="text-2xl md:text-3xl font-semibold">
          {SITE.title}
        </h1>
        <p className="text-sm md:text-base text-white/80">
          Peças para motores elétricos e bombas d’água. Consulte no WhatsApp.
        </p>
      </div>
    </section>
  );
}
