// app/avaliacoes/page.tsx
import REVIEWS from "@/lib/reviews";
import ReviewCard from "@/components/ReviewCard";
import MapEmbed from "@/components/MapEmbed";
import SITE from "@/lib/site";

export const dynamic = "force-static";

export default function Page() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-xl font-semibold mb-2">Avaliações de Clientes</h1>
        <p className="text-white/70 text-sm">
          Selecionamos as avaliações públicas recentes — fiéis ao texto e ao nome.
        </p>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {REVIEWS.map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-2">Onde estamos</h2>
        <p className="text-white/70 text-sm mb-3">{SITE.address}</p>
        <MapEmbed />
        <div className="mt-3 text-sm">
          <a
            className="underline opacity-80 hover:opacity-100"
            href="https://maps.app.goo.gl/QAXYVDF88fYeRAkd9"
            target="_blank"
            rel="noreferrer"
          >
            Ver no Google Maps (fotos da fachada, avaliações, rotas)
          </a>
        </div>
      </section>
    </div>
  );
}
