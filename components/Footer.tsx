import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/[0.06] dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-600 dark:text-gray-300">
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/contato" className="hover:underline">Contato</Link>
            <a href={SITE.instagram} target="_blank" className="hover:underline">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
