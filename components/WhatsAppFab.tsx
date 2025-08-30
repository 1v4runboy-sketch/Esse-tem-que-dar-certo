"use client";

import { useEffect, useRef } from "react";
import { SITE } from "@/lib/site";

export default function WhatsAppFab() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const id = setInterval(() => {
      if (!ref.current) return;
      ref.current.classList.add("animate-pulseOnce");
      const t = setTimeout(() => ref.current?.classList.remove("animate-pulseOnce"), 1100);
      return () => clearTimeout(t);
    }, 15000);
    return () => clearInterval(id);
  }, []);

  const href = `https://wa.me/${SITE.whatsapp}`;

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 inline-flex items-center justify-center rounded-full bg-green-500 text-white h-12 w-12 shadow-lg hover:brightness-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.4 0 .05 5.35.05 12c0 2.1.55 4.12 1.6 5.92L0 24l6.23-1.62A11.87 11.87 0 0 0 12.06 24c6.66 0 12.01-5.35 12.01-12 0-3.21-1.25-6.24-3.55-8.52zM12.06 22a9.9 9.9 0 0 1-5.04-1.39l-.36-.21-3.69.96.99-3.6-.24-.37A9.94 9.94 0 1 1 22 12c0 5.48-4.46 10-9.94 10zm5.82-7.45c-.32-.16-1.87-.92-2.15-1.02-.28-.1-.49-.16-.7.16-.21.32-.8 1.02-.98 1.24-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.57-1.6-.95-.84-1.59-1.87-1.78-2.18-.19-.32-.02-.49.14-.65.15-.15.32-.4.48-.6.16-.2.21-.34.32-.56.1-.21.05-.4-.03-.56-.08-.16-.7-1.69-.96-2.32-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.4-.27.32-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.16.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.87-.76 2.14-1.49.26-.73.26-1.36.18-1.49-.07-.12-.28-.2-.59-.36z"></path>
      </svg>
    </a>
  );
}
