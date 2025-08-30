"use client";

import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Sidebar from "./Sidebar";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-black/30 backdrop-blur border-b border-black/[0.06] dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Sidebar />
          <Link href="/" className="flex items-center gap-2">
            <Image src={SITE.headerLogo} alt="Polus" width={36} height={36} className="h-9 w-9" />
            <span className="font-semibold hidden sm:inline">{SITE.name}</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/produtos" className="hover:underline underline-offset-4">Produtos</Link>
          <Link href="/marcas" className="hover:underline underline-offset-4">Marcas</Link>
          <Link href="/contato" className="hover:underline underline-offset-4">Contato</Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
