"use client";

import Image from "next/image";
import { REVIEWS } from "@/lib/reviews";
import { useRef } from "react";

export default function ReviewsCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  function scrollBy(x: number) {
    ref.current?.scrollBy({ left: x, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div ref={ref} className="flex gap-4 overflow-x-auto pb-2 snap-x-mandatory">
        {REVIEWS.map((r, i) => (
          <article key={i} className="snap-center min-w-[280px] max-w-[320px] rounded-xl border bg-white/80 dark:bg-white/[0.02] dark:border-white/10 p-4">
            <div className="flex items-center gap-3">
              <Image src={r.avatar} alt={r.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-yellow-500 text-sm">★★★★★</div>
              </div>
            </div>
            <p className="mt-3 text-sm whitespace-pre-line">{r.text}</p>
          </article>
        ))}
      </div>

      <div className="hidden sm:flex absolute inset-y-0 right-0 items-center pr-1 gap-2">
        <button onClick={() => scrollBy(-320)} className="rounded-full border h-8 w-8 bg-white/80 dark:bg-white/[0.02]">{'‹'}</button>
        <button onClick={() => scrollBy(320)} className="rounded-full border h-8 w-8 bg-white/80 dark:bg-white/[0.02]">{'›'}</button>
      </div>
    </div>
  );
}
