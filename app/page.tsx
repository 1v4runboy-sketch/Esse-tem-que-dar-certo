import PRODUCTS from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ReviewsCarousel from "@/components/ReviewsCarousel";

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
      {/* Hero com vídeo loop */}
      <section className="relative rounded-lg overflow-hidden border">
        <video
          className="w-full h-[220px] object-cover"
          src="/Loop-ezgif.com-video-to-webp-converter.webp"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <h1 className="text-xl font-semibold">Polus Eletrotécnica — Catálogo Técnico</h1>
          <p className="text-sm text-muted-foreground">
            Peças para motores elétricos e bombas d’água. Consulte no WhatsApp.
          </p>
        </div>
      </section>

      {/* Vitrine */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Destaques</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {vitrine.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Reviews */}
      <ReviewsCarousel />
    </>
  );
}
