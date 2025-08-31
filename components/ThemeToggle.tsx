// components/ThemeToggle.tsx
'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;
  const toggle = () => {
    setTheme(current === 'dark' ? 'light' : 'dark');
    try { window.dispatchEvent(new Event('themechange')); } catch {}
  };

  return (
    <button
      onClick={toggle}
      aria-label="Mudar tema"
      className="px-2 py-1 rounded border border-black/10 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-neutral-800"
    >
      {current === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
