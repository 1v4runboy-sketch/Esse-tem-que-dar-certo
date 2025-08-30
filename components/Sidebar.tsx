"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (open && !panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Abrir/fechar menu"
        className="inline-flex items-center justify-center rounded-md border p-1.5 hover:bg-gray-50 dark:hover:bg-white/10"
      >
        <Image src={SITE.sidebarButton} alt="Menu" width={28} height={28} />
      </button>

      {/* Overlay */}
      <div className={`fixed inset-0 z-[60] bg-black/40 transition ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} />

      {/* Painel */}
      <aside
        ref={panelRef}
        className={`fixed z-[61] top-0 left-0 h-full w-80 max-w-[90%] bg-white dark:bg-neutral-900 border-r border-black/10 dark:border-white/10 shadow-xl transition-transform ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b dark:border-white/10 flex items-center gap-3">
          <Image src={SITE.headerLogo} alt="Polus" width={32} height={32} />
          <strong>{SITE.name}</strong>
        </div>
        <nav className="p-4 space-y-2">
          <Link className="block rounded px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/5" href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link className="block rounded px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/5" href="/produtos" onClick={() => setOpen(false)}>Produtos</Link>
          <Link className="block rounded px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/5" href="/marcas" onClick={() => setOpen(false)}>Marcas</Link>
          <Link className="block rounded px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/5" href="/contato" onClick={() => setOpen(false)}>Contato</Link>
        </nav>
      </aside>
    </>
  );
}
