"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/types";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/utils";

export default function ProductCard({ product }: { product: Product }) {
  const href = `/produto/${product.slug}`;
  const wa = waLink(SITE.whatsapp, SITE.whatsappMessage(product.title));
  const img = product.images[0];

  return (
    <div className="group rounded-xl border bg-white/80 dark:bg-white/[0.02] dark:border-white/10 overflow-hidden hover:shadow-card transition">
      <Link href={href} className="block">
        <div className="relative aspect-[4/3]">
          {img && (
            <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform group-hover:scale-[1.02]" />
          )}
        </div>
      </Link>
      <div className="p-4 space-y-3">
        <span className="inline-block text-xs font-semibold rounded-full bg-weg/10 text-weg px-3 py-1">{product.brand}</span>
        <Link href={href} className="block text-base font-semibold leading-tight hover:underline underline-offset-4">
          {product.title}
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center gap-2">
          <a href={wa} target="_blank" className="inline-flex items-center gap-2 rounded-md bg-green-500 text-white px-3 py-1.5 text-sm font-semibold hover:brightness-110">
            Consultar no WhatsApp
          </a>
          <Link href={href} className="text-sm hover:underline underline-offset-4">Detalhes</Link>
        </div>
      </div>
    </div>
  );
}
