import { PRODUCTS } from "@/lib/products";
import { CATEGORIES } from "@/lib/categories";
import ProductCard from "@/components/ProductCard";
import FiltersBar from "@/components/FiltersBar";
import { seededShuffle } from "@/lib/utils";

type SearchParams = { [key: string]: string | string[] | undefined };

export default function ProdutosPage({ searchParams }: { searchParams: SearchParams }) {
  const q = (searchParams.q as string) || "";
  const marca = (searchParams.marca as string) || "";
  const cat = (searchParams.cat as string) || "";
  const sub = (searchParams.sub as string) || "";
  const page = parseInt((searchParams.page as string) || "1", 10);

  // filtro
  let filtered = PRODUCTS.filter(p => {
    const okQ =
      !q ||
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(q.toLowerCase());
    const okMarca = !marca || p.brand === marca;
    const okCat = !cat || p.category === cat;
    const okSub = !sub || p.subcategory === sub;
    return okQ && okMarca && okCat && okSub;
  });

  // ordem aleatória estável: seed baseada nos filtros
  const seed = (q + marca + cat + sub).length || 1;
  filtered = seededShuffle(filtered, seed);

  // paginação
  const perPage = 15;
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const current = Math.min(Math.max(page, 1), totalPages);
  const start = (current - 1) * perPage;
  const items = filtered.slice(start, start + perPage);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Produtos</h1>
      <FiltersBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => <ProductCard key={p.id} product={p} />)}
      </div>

      {/* paginação */}
      <div className="flex items-center justify-center gap-2 pt-4">
        <PageLink page={current - 1} disabled={current <= 1} label="Anterior" />
        <span className="text-sm opacity-80">
          Página {current} de {totalPages}
        </span>
        <PageLink page={current + 1} disabled={current >= totalPages} label="Próxima" />
      </div>
    </div>
  );
}

function PageLink({ page, label, disabled }: { page: number; label: string; disabled?: boolean }) {
  const params = new URLSearchParams(typeof window === "undefined" ? "" : window.location.search);
  params.set("page", String(page));
  const href = `?${params.toString()}`;
  return (
    <a
      href={disabled ? "#" : href}
      aria-disabled={disabled}
      className={`px-3 py-1 rounded border text-sm ${disabled ? "pointer-events-none opacity-40" : "hover:bg-gray-50 dark:hover:bg-white/5"}`}
    >
      {label}
    </a>
  );
}
