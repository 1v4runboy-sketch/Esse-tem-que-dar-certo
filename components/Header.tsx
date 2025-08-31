// components/Header.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import RotatingLogoButton from './RotatingLogoButton';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center gap-3">
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="p-2 rounded border border-black/10 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800"
        >
          ☰
        </button>

        <Link href="/" className="flex items-center gap-2">
          <RotatingLogoButton size={42} />
          <span className="hidden sm:inline font-semibold tracking-tight">Polus</span>
        </Link>

        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>

      <Sidebar open={open} onOpenChange={setOpen} />
    </header>
  );
}
