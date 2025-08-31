// app/page.tsx
import PRODUCTS from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import CinematicHero from "@/components/CinematicHero";
import Link from "next/link";

export default function Page() {
  const vitrineSlugs = [
    "verniz-weg-1314-5l",
    "corpo-prefiltro-jacuzzi-a",
    "capacitor-permanente-250v",
    "filme-poliester",
    "resina-95b",
  ];
  const vitrine = PRODUCTS.filter((p) => vitrineSlugs.includes(p.slug));

  return (
    <>
      <CinematicHero />

      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Destaques</h2>
          <Link href="/avaliacoes" className="text-sm underline opacity-80 hover:opacity-100">
            Ver avaliações
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {vitrine.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
