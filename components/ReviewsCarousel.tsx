"use client";

import Image from "next/image";
import REVIEWS, { Review } from "@/lib/reviews";
import { useRef } from "react";

function Stars({ value = 5 }: { value?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < value;
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={filled ? "h-4 w-4 fill-weg" : "h-4 w-4 fill-muted"}
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.802-2.036a1 1 0 00-1.176 0l-2.802 2.036c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      })}
    </div>
  );
}

// Fallback seguro se a foto não existir
function Avatar({ name, src }: { name: string; src?: string | null }) {
  const initial = name?.trim()?.charAt(0)?.toUpperCase() || "P";
  if (!src) {
    return (
      <div className="h-10 w-10 shrink-0 rounded-full bg-weg/15 text-weg grid place-items-center font-semibold">
        {initial}
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={name}
      width={40}
      height={40}
      className="h-10 w-10 shrink-0 rounded-full object-cover"
      onError={(e) => {
        // Se a imagem falhar, troca por null (o caller não re-renderiza aqui, mas evita carregamentos repetidos)
        (e.currentTarget as HTMLImageElement).src =
          "data:image/svg+xml;charset=UTF-8," +
          encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><rect width='100%' height='100%' fill='rgba(0,87,184,0.15)'/></svg>`
          );
      }}
    />
  );
}

export default function ReviewsCarousel({ items = REVIEWS }: { items?: Review[] }) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  return (
    <section
      aria-labelledby="reviews-title"
      className="py-10 md:py-14"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 id="reviews-title" className="text-2xl md:text-3xl font-semibold tracking-tight">
            O que nossos clientes dizem
          </h2>
          <div className="hidden gap-2 md:flex">
            <button
              type="button"
              className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
              onClick={() => {
                const el = trackRef.current;
                if (el) el.scrollBy({ left: -320, behavior: "smooth" });
              }}
            >
              ←
            </button>
            <button
              type="button"
              className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
              onClick={() => {
                const el = trackRef.current;
                if (el) el.scrollBy({ left: 320, behavior: "smooth" });
              }}
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2"
        >
          {items.map((r) => (
            <article
              key={r.id}
              className="snap-start shrink-0 w-[320px] rounded-xl border bg-card text-card-foreground shadow-card p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <Avatar name={r.name} src={r.avatar} />
                <div>
                  <div className="font-medium leading-tight">{r.name}</div>
                  <Stars value={r.rating} />
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {r.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
