import type { Metadata } from "next";
import "./globals.css";
import SITE from "@/lib/site";
import ThemeProvider from "@/components/ThemeProvider";
import RotatingLogo from "@/components/RotatingLogo";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: SITE.name,
  description: SITE.description,
  icons: {
    icon: "/polus-logo.svg", // usar /motor-favicon.svg quando tiver
  },
    generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Sidebar />
          <header className="pt-4">
            <div className="max-w-5xl mx-auto">
              {/* Logo giratória central */}
              <div className="flex justify-center">
                <RotatingLogo />
              </div>
            </div>
          </header>
          <main className="max-w-5xl mx-auto px-4 py-6">{children}</main>
          <footer className="mt-12 border-t">
            <div className="max-w-5xl mx-auto px-4 py-6 text-sm text-muted-foreground">
              <p>{SITE.address}</p>
              <p>
                Instagram:{" "}
                <a className="underline" href={SITE.instagram} target="_blank" rel="noreferrer">
                  @_poluseletrotecnica
                </a>
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
