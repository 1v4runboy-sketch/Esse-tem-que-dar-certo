// components/ProductCard.tsx
import Link from "next/link";
import ImageSafe from "./ImageSafe";
import { Product } from "@/lib/products";
import SITE from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const cover = product.images?.[0]?.src ?? null;
  const whats = `https://wa.me/${SITE.whatsappNumberIntl}?text=${SITE.whatsappMessage(product.title)}`;

  return (
    <div className="rounded-lg border bg-white text-black overflow-hidden flex flex-col">
      <Link href={`/produtos/${product.slug}`} className="block">
        <div className="relative w-full aspect-square bg-gray-100">
          <ImageSafe
            src={cover}
            alt={product.title}
            fill
            className="object-contain"
            fallbackClassName="w-full h-full bg-gray-100"
          />
        </div>
      </Link>

      <div className="p-3 flex-1 flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide opacity-70">{product.brand}</div>
        <Link href={`/produtos/${product.slug}`} className="font-medium leading-tight hover:underline">
          {product.title}
        </Link>
        {product.shortDescription && (
          <p className="text-sm text-black/70 line-clamp-2">{product.shortDescription}</p>
        )}

        <div className="mt-auto pt-2 flex items-center gap-2">
          <a
            href={whats}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center h-9 px-3 rounded bg-green-500 text-white text-sm font-medium hover:bg-green-600"
          >
            Consultar no WhatsApp
          </a>
          <span className="ml-auto text-[11px] px-2 py-0.5 rounded bg-black/5">
            {product.category ?? "—"}
          </span>
        </div>
      </div>
    </div>
  );
}
