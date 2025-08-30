import { SITE } from "@/lib/site";
import { isOpenNow } from "@/lib/utils";

export default function ContatoPage() {
  const { index } = isOpenNow();

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <section className="space-y-3">
        <h1 className="text-2xl font-semibold">Contato</h1>
        <p><span className="font-medium">{SITE.name}</span> — CNPJ {SITE.cnpj}</p>
        <p><span className="font-medium">Endereço:</span> {SITE.address}</p>
        <p><span className="font-medium">E‑mail:</span> <a className="underline underline-offset-4" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
        <p><span className="font-medium">WhatsApp:</span> <a className="underline underline-offset-4 text-green-600" href={`https://wa.me/${SITE.whatsapp}`} target="_blank">+{SITE.whatsapp}</a></p>
        <p><span className="font-medium">Instagram:</span> <a className="underline underline-offset-4" href={SITE.instagram} target="_blank" rel="noreferrer">_poluseletrotecnica</a></p>

        <div className="pt-4">
          <h2 className="text-lg font-semibold">Atendimento</h2>
          <ul className="mt-2 space-y-1 text-sm">
            {SITE.businessHours.map((d, i) => (
              <li key={i} className={i === index ? "font-semibold text-weg" : ""}>
                {d.day}: {d.open ? `${d.open}–${d.close}` : "Fechado"}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-xl overflow-hidden border">
        <iframe
          title="Localização no Google Maps"
          src={SITE.mapsEmbedSrc}
          className="w-full h-[420px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}
