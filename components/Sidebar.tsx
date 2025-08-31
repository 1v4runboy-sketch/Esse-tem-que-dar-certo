// components/Sidebar.tsx
'use client';

import { useEffect } from 'react';

type Props = {
  open: boolean;
  onOpenChange?: (v: boolean) => void;
  onClose?: () => void;
  children?: React.ReactNode;
};

export default function Sidebar({ open, onOpenChange, onClose, children }: Props) {
  const close = () => {
    onOpenChange?.(false);
    onClose?.();
  };

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    if (open) document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, [open]);

  return (
    <>
      {/* overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      {/* sheet */}
      <aside
        aria-hidden={!open}
        className={`fixed inset-y-0 left-0 z-50 w-72 max-w-[85vw] bg-white dark:bg-neutral-900 border-r border-black/10 dark:border-white/10 shadow-lg transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="h-14 flex items-center justify-between px-4 border-b border-black/10 dark:border-white/10">
          <span className="font-semibold">Menu</span>
          <button onClick={close} aria-label="Fechar" className="p-2 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800">✕</button>
        </div>
        <div className="p-3 space-y-2">
          {children ?? (
            <nav className="grid gap-1 text-sm">
              <a className="px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800" href="/">Início</a>
              <a className="px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800" href="/produtos">Produtos</a>
              <a className="px-2 py-1 rounded hover:bg-neutral-100 dark:hover:bg-neutral-800" href="/contato">Contato</a>
            </nav>
          )}
        </div>
      </aside>
    </>
  );
}
