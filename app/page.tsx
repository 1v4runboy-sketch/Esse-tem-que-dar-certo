import PRODUCTS from "../lib/products";
import ProductCard from "../components/ProductCard";
import ReviewsCarousel from "../components/ReviewsCarousel";

export default function Page() {
  const featured = [
    "verniz-weg-1314-5l",
    "corpo-prefiltro-jacuzzi-a",
    "capacitor-permanente-250v",
    "filme-poliester",
    "resina-95b",
  ];

  const items = featured
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean) as typeof PRODUCTS;

  return (
    <>
      <section className="py-8">
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
          Polus Eletrotécnica — Catálogo Técnico
        </h1>
        <p className="mt-2 text-muted-foreground">
          Peças para motores elétricos e bombas d’água. Consulte disponibilidade e prazo pelo WhatsApp.
        </p>
      </section>

      <section id="produtos" className="py-6">
        <h2 className="mb-4 text-xl font-semibold">Vitrine</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="py-8">
        <ReviewsCarousel />
      </section>
    </>
  );
}
