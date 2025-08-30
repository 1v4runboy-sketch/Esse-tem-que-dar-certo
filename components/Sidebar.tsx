"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Bloqueia scroll de fundo quando aberto
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[320px] transform border-r bg-background text-foreground shadow-xl transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-label="Menu"
      >
        <div className="flex items-center justify-between px-4 h-14 border-b">
          <span className="font-semibold">Menu</span>
          <button
            onClick={onClose}
            className="rounded-md border px-2 py-1 text-sm hover:bg-accent hover:text-accent-foreground"
            aria-label="Fechar menu"
          >
            Fechar
          </button>
        </div>

        <nav className="p-4 space-y-2 text-sm">
          <Link href="/" className="block rounded-md px-2 py-1.5 hover:bg-accent">
            Início
          </Link>
          <Link href="/#produtos" className="block rounded-md px-2 py-1.5 hover:bg-accent">
            Produtos
          </Link>
          <Link href="/#marcas" className="block rounded-md px-2 py-1.5 hover:bg-accent">
            Marcas
          </Link>
          <Link href="/#contato" className="block rounded-md px-2 py-1.5 hover:bg-accent">
            Contato
          </Link>
        </nav>
      </aside>
    </>
  );
}
