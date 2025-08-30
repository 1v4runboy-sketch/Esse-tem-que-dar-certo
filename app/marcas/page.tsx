import Image from "next/image";
import { BRANDS } from "@/lib/brands";

export default function MarcasPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Marcas</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {BRANDS.map((b) => (
          <div key={b.name} className="rounded-xl border p-6 bg-white/60 dark:bg-white/[0.02] dark:border-white/10 hover:shadow-card transition flex items-center justify-center">
            <Image src={b.logo} alt={b.name} width={320} height={160} className="h-12 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
