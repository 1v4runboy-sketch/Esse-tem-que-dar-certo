// components/ThemeProvider.tsx
'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useEffect } from 'react';

export function UIThemeProvider({ children }: { children: React.ReactNode }) {
  // garante transição suave quando o tema muda
  useEffect(() => {
    const handler = () => {
      const root = document.documentElement;
      root.classList.add('theme-change');
      window.setTimeout(() => root.classList.remove('theme-change'), 250);
    };
    window.addEventListener('themechange', handler);
    return () => window.removeEventListener('themechange', handler);
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
