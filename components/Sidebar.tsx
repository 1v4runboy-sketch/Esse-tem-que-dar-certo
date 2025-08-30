"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        aria-label="Abrir menu"
        onClick={() => setOpen((v) => !v)}
        className="fixed left-4 top-4 z-50 rounded-full border bg-card p-2 shadow hover:shadow-md"
      >
        <Image src="/loading-logo.png" alt="Menu" width={32} height={32} />
      </button>

      <aside
        className={`fixed z-40 top-0 left-0 h-full w-72 border-r bg-background transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex items-center justify-between border-b">
          <span className="font-semibold">Menu</span>
          <button
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="rounded-md border px-2 py-1 text-sm"
          >
            Fechar
          </button>
        </div>
        <nav className="p-4 space-y-2 text-sm">
          <Link href="/" className="block hover:underline">Início</Link>
          <Link href="/produtos" className="block hover:underline">Produtos</Link>
          <Link href="/contato" className="block hover:underline">Contato</Link>
        </nav>
      </aside>
    </>
  );
}
