import "./globals.css";
import type { Metadata } from "next";
import SITE from "@/lib/site";
import Header from "@/components/Header";
import ModeToggle from "@/components/ModeToggle";
import WhatsFloating from "@/components/WhatsFloating";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  icons: {
    icon: "/polus-logo.svg", // pode trocar depois pelo favicon
  },
  metadataBase: new URL("https://polus.example.com"), // ajuste quando tiver domínio
    generator: 'v0.app'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        {/* Header com logo rotatória e botão da sidebar */}
        <Header />

        {/* Botão global do tema (se não quiser aqui, remova) */}
        <div className="container-padded mt-3 flex justify-end">
          <ModeToggle />
        </div>

        {/* Se quiser o video/loop no topo da home como “hero” de fundo global: */}
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-20">
          <img
            src="/Loop-ezgif.com-video-to-webp-converter.webp"
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>

        {/* Conteúdo */}
        <main className="container-padded py-6">{children}</main>

        {/* Whats flutuante */}
        <WhatsFloating />
      </body>
    </html>
  );
}
