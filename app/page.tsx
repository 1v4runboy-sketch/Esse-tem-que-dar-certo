// app/page.tsx
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        <section className="space-y-2">
          <h1 className="text-2xl font-bold">Bem-vindo(a) à Polus</h1>
          <p className="text-sm opacity-80">Encontre as melhores peças e acessórios.</p>
        </section>
      </main>
    </>
  );
}
