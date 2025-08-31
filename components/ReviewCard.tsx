// components/ReviewCard.tsx
import { Review } from "@/lib/reviews";
import Image from "next/image";

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400" aria-label={`${count} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={i < count ? "currentColor" : "none"} stroke="currentColor">
          <path d="M10 2.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 15.8 4.8 18.6l1-5.8L1.5 8.7l5.9-.9L10 2.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-lg border bg-white text-black p-4 flex gap-3">
      <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden border">
        {review.photo ? (
          <Image src={review.photo} alt={review.name} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div className="space-y-1">
        <div className="font-medium">{review.name}</div>
        <Stars count={review.rating} />
        <p className="text-sm leading-relaxed whitespace-pre-line">{review.text}</p>
      </div>
    </div>
  );
}
