import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { BRANDS } from "@/lib/brands";

const LogoSpinner = dynamic(() => import("@/components/LogoSpinner"), { ssr: false });

export default function HomePage() {
  // vitrine = 5 primeiros
  const showcase = PRODUCTS.slice(0, 5);

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/5">
        <Image
          src={SITE.heroLoop}
          width={1920} height={1080}
          alt="Loop cinematográfico Polus"
          className="absolute inset-0 h-full w-full object-cover opacity-40 dark:opacity-30"
          priority
        />
        <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-20 flex flex-col items-center text-center">
          <LogoSpinner />
          <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
            Catálogo técnico — peças para motores e bombas d’água
          </h1>
          <p className="mt-3 max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300">
            A Polus Eletrotécnica é uma loja técnica especializada em peças para motores elétricos e bombas d’água.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/produtos"
              className="rounded-md bg-weg text-white px-4 py-2 text-sm font-semibold shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-weg/50"
            >
              Ver produtos
            </Link>
            <Link
              href="/marcas"
              className="rounded-md border px-4 py-2 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-white/5"
            >
              Marcas
            </Link>
          </div>
        </div>
      </section>

      {/* VITRINE */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Vitrine</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcase.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* MARCAS */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Marcas</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {BRANDS.map(b => (
            <div key={b.name} className="rounded-xl border p-4 bg-white/60 dark:bg-white/[0.02] dark:border-white/10 hover:shadow-card transition">
              <Image src={b.logo} alt={b.name} width={320} height={160} className="mx-auto h-12 w-auto object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">O que dizem nossos clientes</h2>
        <ReviewsCarousel />
      </section>
    </div>
  );
}
