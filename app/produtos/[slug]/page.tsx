import { notFound } from "next/navigation";
import PRODUCTS, { Product } from "@/lib/products";
import ImageSafe from "@/components/ImageSafe";
import { whatsappHref } from "@/lib/site";
import Link from "next/link";

function relatedProducts(p: Product, all: Product[]) {
  // relacionados por marca ou categoria
  const pool = all.filter((x) => x.id !== p.id);
  const byBrand = pool.filter((x) => x.brand === p.brand);
  const byCat = pool.filter((x) => x.category === p.category);
  const list = (byBrand.length ? byBrand : byCat).slice(0, 4);
  return list.length ? list : pool.slice(0, 4);
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const rel = relatedProducts(product, PRODUCTS);

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Galeria */}
        <div className="space-y-3">
          <div className="relative w-full aspect-square img-wrap">
            <ImageSafe
              src={product.images?.[0]?.src || "/polus-logo.svg"}
              alt={product.images?.[0]?.alt || product.title}
              fill
              className="object-contain"
              priority
            />
          </div>
          {/* Thumbs */}
          {product.images?.length > 1 && (
            <div className="flex gap-3">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="relative w-20 h-20 img-wrap">
                  <ImageSafe
                    src={img.src}
                    alt={img.alt || product.title}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Infos */}
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-weg/10 text-weg border border-weg/20">
              {product.brand}
            </span>
            {product.category && (
              <span className="text-xs px-2 py-0.5 rounded-full border">
                {product.category}
              </span>
            )}
            {product.subcategory && (
              <span className="text-xs px-2 py-0.5 rounded-full border">
                {product.subcategory}
              </span>
            )}
          </div>
          <h1 className="mt-2 text-xl font-semibold">{product.title}</h1>
          {product.shortDescription && (
            <p className="mt-2 text-sm text-muted-foreground">{product.shortDescription}</p>
          )}

          <div className="mt-4">
            <a
              href={whatsappHref(product.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-sm font-medium rounded-md border bg-weg text-white hover:brightness-110 h-9 px-4"
            >
              Consultar no WhatsApp
            </a>
          </div>

          {product.techSpecs?.length ? (
            <table className="mt-6 w-full text-sm border rounded-md overflow-hidden">
              <tbody>
                {product.techSpecs.map(([k, v], i) => (
                  <tr key={i} className="border-b last:border-0">
                    <td className="bg-muted/50 w-40 p-2 font-medium">{k}</td>
                    <td className="p-2">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>
      </div>

      {/* Relacionados */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Relacionados</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rel.map((p) => (
            <Link key={p.id} href={`/produtos/${p.slug}`} className="group rounded-lg border p-3 hover:shadow">
              <div className="relative w-full aspect-square img-wrap">
                <ImageSafe
                  src={p.images?.[0]?.src || "/polus-logo.svg"}
                  alt={p.images?.[0]?.alt || p.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-2 text-xs text-muted-foreground">{p.brand}</div>
              <div className="text-sm font-medium">{p.title}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
