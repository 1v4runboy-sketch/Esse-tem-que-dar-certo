import "./globals.css";
import { Metadata } from "next";
import { SITE } from "@/lib/site";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  icons: { icon: "/polus-logo.svg" },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    type: "website"
  },
    generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
          <WhatsAppFab />
        </ThemeProvider>
      </body>
    </html>
  );
}
