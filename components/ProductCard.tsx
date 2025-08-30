import Link from "next/link";
import ImageSafe from "@/components/ImageSafe";
import { Product } from "@/lib/products";
import SITE, { whatsappHref } from "@/lib/site";

export default function ProductCard({ product }: { product: Product }) {
  const cover = product.images?.[0]?.src || "/polus-logo.svg";
  const alt = product.images?.[0]?.alt || product.title;

  return (
    <div className="group rounded-lg border bg-card hover:shadow-lg transition-shadow">
      <Link href={`/produtos/${product.slug}`} className="block p-3">
        <div className="img-wrap aspect-square relative">
          <ImageSafe
            src={cover}
            alt={alt}
            fill
            className="object-contain"
            priority={false}
          />
        </div>
        <div className="mt-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs px-2 py-0.5 rounded-full bg-weg/10 text-weg border border-weg/20">
              {product.brand}
            </span>
          </div>
          <h3 className="text-sm font-medium">{product.title}</h3>
          {product.shortDescription && (
            <p className="text-xs text-muted-foreground line-clamp-2">
              {product.shortDescription}
            </p>
          )}
        </div>
      </Link>
      <div className="p-3 pt-0">
        <a
          href={whatsappHref(product.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-full text-sm font-medium rounded-md border bg-weg text-white hover:brightness-110 h-9"
        >
          Consultar no WhatsApp
        </a>
      </div>
    </div>
  );
}
