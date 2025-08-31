// components/Sidebar.tsx
"use client";

import { useSidebar } from "./SidebarProvider";
import Link from "next/link";

export default function Sidebar() {
  const { open } = useSidebar();

  return (
    <aside
      aria-hidden={!open}
      className={[
        "fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-72 md:w-80",
        "bg-black text-white border-r transition-transform duration-300",
        open ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}
    >
      <nav className="p-4 space-y-2 text-sm">
        <Link className="block hover:underline" href="/">Início</Link>
        <Link className="block hover:underline" href="/avaliacoes">Avaliações</Link>
        <Link className="block hover:underline" href="/contato">Contato</Link>
        {/* adicione outras seções conforme crescer o catálogo */}
      </nav>
      <div className="p-4 text-xs text-white/60">
        Clique na logo para fechar o menu.
      </div>
    </aside>
  );
}
