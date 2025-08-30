import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { SITE } from "@/lib/site";
import { waLink } from "@/lib/utils";
import ProductCard from "@/components/ProductCard";

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find(p => p.slug === params.slug);
  if (!product) return <div className="py-24 text-center">Produto não encontrado.</div>;

  // relacionados por marca/categoria (exclui o próprio)
  const related = PRODUCTS.filter(p =>
    (p.brand === product.brand || p.category === product.category) && p.id !== product.id
  ).slice(0, 4);

  const wa = waLink(SITE.whatsapp, SITE.whatsappMessage(product.title));

  return (
    <div className="space-y-8">
      {/* topo */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* galeria simples com snap */}
        <div className="lg:w-1/2">
          <div className="flex gap-4 overflow-x-auto snap-x-mandatory">
            {product.images.map((img, i) => (
              <div key={i} className="min-w-[75%] sm:min-w-[60%] lg:min-w-[60%] snap-center">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border">
                  <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 50vw, 90vw" className="object-cover" />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">Deslize para ver mais fotos.</p>
        </div>

        {/* infos */}
        <div className="lg:w-1/2 space-y-4">
          <span className="inline-block text-xs font-semibold rounded-full bg-weg/10 text-weg px-3 py-1">{product.brand}</span>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-700 dark:text-gray-300">{product.shortDescription}</p>

          <div className="flex gap-2">
            <Link href={`/produtos?marca=${encodeURIComponent(product.brand)}`} className="text-sm underline underline-offset-4">#{product.brand}</Link>
            <Link href={`/produtos?cat=${encodeURIComponent(product.category)}`} className="text-sm underline underline-offset-4">#{product.category}</Link>
            {product.subcategory && (
              <Link href={`/produtos?cat=${encodeURIComponent(product.category)}&sub=${encodeURIComponent(product.subcategory)}`} className="text-sm underline underline-offset-4">#{product.subcategory}</Link>
            )}
          </div>

          <div className="pt-2">
            <a href={wa} target="_blank" className="inline-flex items-center gap-2 rounded-md bg-green-500 text-white px-4 py-2 font-semibold shadow hover:brightness-110">
              <WhatsIcon className="h-5 w-5" />
              Consultar no WhatsApp
            </a>
          </div>

          {/* Tabela técnica, só se houver */}
          {product.techSpecs && product.techSpecs.length > 0 && (
            <div className="pt-4">
              <h2 className="text-lg font-semibold">Especificações técnicas</h2>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-sm border-separate border-spacing-y-1">
                  <tbody>
                    {product.techSpecs.map(([k, v], i) => (
                      <tr key={i} className="bg-gray-50 dark:bg-white/5">
                        <td className="px-3 py-2 font-medium">{k}</td>
                        <td className="px-3 py-2">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* relacionados */}
      {related.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}

function WhatsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.4 0 .05 5.35.05 12c0 2.1.55 4.12 1.6 5.92L0 24l6.23-1.62A11.87 11.87 0 0 0 12.06 24c6.66 0 12.01-5.35 12.01-12 0-3.21-1.25-6.24-3.55-8.52zM12.06 22a9.9 9.9 0 0 1-5.04-1.39l-.36-.21-3.69.96.99-3.6-.24-.37A9.94 9.94 0 1 1 22 12c0 5.48-4.46 10-9.94 10zm5.82-7.45c-.32-.16-1.87-.92-2.15-1.02-.28-.1-.49-.16-.7.16-.21.32-.8 1.02-.98 1.24-.18.21-.36.24-.68.08-.32-.16-1.35-.5-2.57-1.6-.95-.84-1.59-1.87-1.78-2.18-.19-.32-.02-.49.14-.65.15-.15.32-.4.48-.6.16-.2.21-.34.32-.56.1-.21.05-.4-.03-.56-.08-.16-.7-1.69-.96-2.32-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.52.08-.79.4-.27.32-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.16.2 2.1 3.21 5.1 4.5.71.31 1.27.49 1.71.62.72.23 1.38.2 1.9.12.58-.09 1.87-.76 2.14-1.49.26-.73.26-1.36.18-1.49-.07-.12-.28-.2-.59-.36z"></path>
    </svg>
  );
}
