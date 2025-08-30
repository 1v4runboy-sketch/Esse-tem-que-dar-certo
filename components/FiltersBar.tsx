"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BRANDS } from "@/lib/brands";
import { CATEGORIES } from "@/lib/categories";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export default function FiltersBar() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [q, setQ] = useState(params.get("q") ?? "");
  const marca = params.get("marca") ?? "";
  const cat = params.get("cat") ?? "";
  const sub = params.get("sub") ?? "";

  // subcategorias dinâmicas
  const subs = useMemo(() => (cat && CATEGORIES[cat as keyof typeof CATEGORIES]) || [], [cat]);

  // debounce busca
  useEffect(() => {
    const id = setTimeout(() => {
      const sp = new URLSearchParams(params);
      if (q) sp.set("q", q); else sp.delete("q");
      sp.delete("page");
      router.replace(`${pathname}?${sp.toString()}`);
    }, 300);
    return () => clearTimeout(id);
  }, [q]); // eslint-disable-line

  function setParam(key: string, value: string) {
    const sp = new URLSearchParams(params);
    if (value) sp.set(key, value); else sp.delete(key);
    sp.delete("page");
    router.replace(`${pathname}?${sp.toString()}`);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Buscar produto..."
        className="w-full rounded-md border px-3 py-2 text-sm bg-white/80 dark:bg-white/[0.02]"
      />

      <select
        value={marca}
        onChange={(e) => setParam("marca", e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm bg-white/80 dark:bg-white/[0.02]"
      >
        <option value="">Marca</option>
        {BRANDS.map(b => <option key={b.name} value={b.name}>{b.name}</option>)}
      </select>

      <select
        value={cat}
        onChange={(e) => { setParam("cat", e.target.value); setParam("sub", ""); }}
        className="w-full rounded-md border px-3 py-2 text-sm bg-white/80 dark:bg-white/[0.02]"
      >
        <option value="">Categoria</option>
        {Object.keys(CATEGORIES).map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <select
        value={sub}
        onChange={(e) => setParam("sub", e.target.value)}
        disabled={!cat}
        className={cn(
          "w-full rounded-md border px-3 py-2 text-sm bg-white/80 dark:bg-white/[0.02]",
          !cat && "opacity-60"
        )}
      >
        <option value="">Subcategoria</option>
        {subs.map(s => <option key={s} value={s}>{s}</option>)}
      </select>
    </div>
  );
}
