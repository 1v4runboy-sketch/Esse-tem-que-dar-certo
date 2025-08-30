"use client";

import { useEffect, useRef } from "react";
import SITE from "@/lib/site";

export default function WhatsFloating() {
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let t: number | null = null;
    const tick = () => {
      el.classList.add("animate-pulseSoft");
      setTimeout(() => el.classList.remove("animate-pulseSoft"), 1100);
      t = window.setTimeout(tick, 15000);
    };
    t = window.setTimeout(tick, 15000);
    return () => { if (t) window.clearTimeout(t); };
  }, []);

  const href = `${SITE.whatsappLink}?text=${SITE.whatsappMessage()}`;

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-lg focus:outline-none focus:ring-2 focus:ring-ring motion-reduce:animate-none"
      aria-label="Conversar no WhatsApp"
      title="Conversar no WhatsApp"
    >
      {/* Ícone Whats oficial (simples) */}
      <svg viewBox="0 0 32 32" width="24" height="24" aria-hidden="true" className="fill-white">
        <path d="M19.11 17.02c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.9 1.21 3.1.15.2 2.09 3.2 5.06 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM27 15C27 9.48 22.52 5 17 5S7 9.48 7 15c0 2.02.66 3.89 1.78 5.4L8 27l6.73-1.77A9.94 9.94 0 0 0 17 25c5.52 0 10-4.48 10-10z"/>
      </svg>
    </a>
  );
}
