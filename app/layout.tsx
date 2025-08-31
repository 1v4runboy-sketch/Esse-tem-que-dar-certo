import type { Metadata } from "next";
import "./globals.css";
import SITE from "@/lib/site";
import SidebarProvider from "@/components/SidebarProvider";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
    generator: 'v0.app'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">
        <SidebarProvider>
          <TopBar />
          <Sidebar />
          <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
