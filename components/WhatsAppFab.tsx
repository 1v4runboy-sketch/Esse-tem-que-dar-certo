// components/WhatsAppFab.tsx
import React from "react";
import { SITE } from "@/lib/site";

export default function WhatsAppFab() {
  const url = SITE.buildWhatsAppUrl();

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      className="wa-fab fixed right-4 bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg"
      style={{
        background: "linear-gradient(180deg,#25D366,#1DA851)",
        color: "white",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M20.52 3.48A11.95 11.95 0 0 0 12 .5C6  .5 1.5 5 1.5 10.99c0 1.93.49 3.78 1.42 5.45L.5 23l6.83-2.06A11.94 11.94 0 0 0 12 21.5c6 0 10.52-4.5 10.52-10.99 0-2.94-1.15-5.68-3.99-7.03z" fill="white"/>
      </svg>

      <style jsx>{`
        .wa-fab {
          animation: waPulse 15s ease-out infinite;
        }
        @keyframes waPulse {
          0%, 94% { transform: scale(1); }
          96% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }
      `}</style>
    </a>
  );
}
