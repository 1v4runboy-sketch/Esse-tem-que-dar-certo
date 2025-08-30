import { clsx } from "clsx";

export const cn = (...args: any[]) => clsx(args);

export function isOpenNow() {
  const now = new Date();
  const day = now.getDay(); // 0=Dom,1=Seg...
  const hr = now.getHours();
  const min = now.getMinutes();
  const minutesNow = hr * 60 + min;
  // Seg=1..Sáb=6, Dom=0
  const mapIdx = [6,0,1,2,3,4,5] as const; // converte getDay -> índice 0..6 em site.businessHours
  const i = mapIdx[day];
  // Será lido na UI via SITE.businessHours[i]
  return { index: i, minutesNow };
}

export function seededShuffle<T>(arr: T[], seed = 1): T[] {
  const a = arr.slice();
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function highlight(text: string, query: string) {
  if (!query) return text;
  const q = query.trim();
  if (!q) return text;
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === q.toLowerCase()
      ? `<mark>${part}</mark>`
      : part
  ).join("");
}
function escapeRegExp(s: string) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

export function waLink(phone: string, message: string) {
  const base = `https://wa.me/${phone}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
