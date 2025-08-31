import './globals.css';
import type { Metadata } from 'next';
import { UIThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: 'Polus Catálogo',
  description: 'Catálogo de produtos Polus',
    generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-black dark:bg-black dark:text-white antialiased">
        <UIThemeProvider>
          {children}
        </UIThemeProvider>
      </body>
    </html>
  );
}
