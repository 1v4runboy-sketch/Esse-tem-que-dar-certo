// app/produtos/page.tsx
import { Suspense } from 'react';
import Header from '@/components/Header';
import { PRODUCTS } from '@/lib/data';
import ProductFilters from '@/components/ProductFilters';
import ProductGrid from '@/components/ProductGrid';

export const dynamic = 'force-static';

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-4">
        <h1 className="text-xl font-semibold">Catálogo</h1>
        <Suspense fallback={<div>Carregando produtos…</div>}>
          <ProductFilters products={PRODUCTS} />
          <ProductGrid products={PRODUCTS} />
        </Suspense>
      </main>
    </>
  );
}
