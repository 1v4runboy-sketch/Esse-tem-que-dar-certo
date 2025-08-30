import { notFound } from "next/navigation";
import PRODUCTS, { Product } from "../../../lib/products";
import ImageSafe from "../../../components/ImageSafe";
import SITE from "../../../lib/site";
import Link from "next/link";

function Related({ current }: { current: Product }) {
  const related = PRODUCTS
    .filter(
      (p) =>
        p.id !== current.id &&
        (p.brand === current.brand || p.category === current.category)
    )
    .slice(0, 8);

  if (!related.length) return null;

  return (
    <section className="mt-10">
      <h3 className="mb-3 text-lg font-semibold">Produtos relacionados</h3>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {related.map((p) => (
          <Link
            key={p.id}
            href={`/produtos/${p.slug}`}
            className="rounded-xl border bg-card text-card-foreground shadow-card p-3 hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted/40">
              <ImageSafe
                src={p.images?.[0]?.src}
                alt={p.images?.[0]?.alt ?? p.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-contain p-3"
              />
            </div>
            <div className="mt-3 text-sm font-medium line-clamp-2">{p.title}</div>
            <div className="text-xs text-muted-foreground">{p.brand}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const whatsHref = `${SITE.whatsappLink}?text=${SITE.whatsappMessage(product.title)}`;

  return (
    <div className="py-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Galeria */}
        <div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-muted/40">
            <ImageSafe
              src={product.images?.[0]?.src}
              alt={product.images?.[0]?.alt ?? product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4"
              priority
            />
          </div>

          {product.images && product.images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto snap-x snap-mandatory">
              {product.images.slice(1).map((img, i) => (
                <div key={i} className="snap-start shrink-0">
                  <div className="relative h-24 w-32 overflow-hidden rounded-lg border bg-muted/40">
                    <ImageSafe
                      src={img?.src}
                      alt={img?.alt ?? product.title}
                      fill
                      sizes="128px"
                      className="object-contain p-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Texto */}
        <div>
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
            {product.subcategory && (
              <span className="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] text-muted-foreground">
                {product.subcategory}
              </span>
            )}
          </div>

          <h1 className="text-xl md:text-2xl font-semibold leading-tight">{product.title}</h1>

          {product.shortDescription && (
            <p className="mt-2 text-sm text-muted-foreground">{product.shortDescription}</p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <a
              href={whatsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-md bg-weg px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              Consultar no WhatsApp
            </a>
            <Link
              href="/#contato"
              className="inline-flex items-center rounded-md border px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
            >
              Contato
            </Link>
          </div>

          {product.techSpecs && product.techSpecs.length > 0 && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <tbody className="[&>tr:nth-child(odd)]:bg-muted/30">
                  {product.techSpecs.map(([k, v], i) => (
                    <tr key={i}>
                      <td className="w-44 whitespace-nowrap px-3 py-2 font-medium">{k}</td>
                      <td className="px-3 py-2 text-muted-foreground">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <Related current={product} />
    </div>
  );
}
