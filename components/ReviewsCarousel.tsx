"use client";

import REVIEWS from "@/lib/reviews";
import ImageSafe from "@/components/ImageSafe";
import { useRef } from "react";

export default function ReviewsCarousel() {
  const scroller = useRef<HTMLDivElement>(null);

  return (
    <section className="mt-10">
      <h2 className="text-lg font-semibold mb-4">O que dizem nossos clientes</h2>
      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
      >
        {REVIEWS.map((r, i) => (
          <article
            key={i}
            className="min-w-[260px] max-w-xs snap-start rounded-lg border bg-card p-4"
          >
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <ImageSafe
                  src={r.avatar || "/polus-logo.svg"}
                  alt={r.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{r.name}</p>
                <div className="text-weg text-xs">★★★★★</div>
              </div>
            </div>
            <p className="mt-3 text-sm whitespace-pre-line">{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
