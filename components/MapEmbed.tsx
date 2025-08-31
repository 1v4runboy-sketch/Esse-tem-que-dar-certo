// components/MapEmbed.tsx
import SITE from "@/lib/site";

export default function MapEmbed() {
  return (
    <div className="rounded-lg overflow-hidden border">
      <iframe
        src={SITE.mapsEmbed}
        className="w-full h-[320px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        aria-label={`Localização da ${SITE.name}`}
      />
    </div>
  );
}
