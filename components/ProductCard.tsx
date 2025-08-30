"use client";

import Link from "next/link";
import ImageSafe from "./ImageSafe";
import type { Product } from "../lib/products";
import SITE from "../lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const cover = product.images?.[0];

  const whatsHref = `${SITE.whatsappLink}?text=${SITE.whatsappMessage(
    product.title
  )}`;

  return (
    <article className="group rounded-xl border bg-card text-card-foreground shadow-card overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/produtos/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <ImageSafe
            src={cover?.src}
            alt={cover?.alt ?? product.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-contain p-3 transition-transform duration-300 group-hover:scale-[1.02]"
            priority={false}
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          {product.brand && (
            <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium text-weg border-weg/30 bg-weg/10">
              {product.brand}
            </span>
          )}
          {product.category && (
            <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] text-muted-foreground">
              {product.category}
            </span>
          )}
        </div>

        <h3 className="text-sm font-semibold leading-tight line-clamp-2">
          <Link href={`/produtos/${product.slug}`}>{product.title}</Link>
        </h3>

        {product.shortDescription && (
          <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        <div className="mt-3 flex items-center gap-2">
          <Link
            href={`/produtos/${product.slug}`}
            className="inline-flex items-center rounded-md border px-3 py-1.5 text-xs hover:bg-accent hover:text-accent-foreground"
          >
            Detalhes
          </Link>

          <a
            href={whatsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-weg px-3 py-1.5 text-xs font-medium text-white hover:opacity-90"
          >
            Consultar no Whats
          </a>
        </div>
      </div>
    </article>
  );
}
