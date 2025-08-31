// app/contato/page.tsx
import Header from '@/components/Header';

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-8 space-y-6">
        <h1 className="text-xl font-semibold">Contato</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2 text-sm">
            <p><strong>Endereço:</strong> Rua Exemplo, 123 - Centro, Sua Cidade - UF</p>
            <p><strong>Telefone:</strong> (00) 00000-0000</p>
            <p><strong>Email:</strong> contato@polus.com.br</p>
            <p><strong>Horário:</strong> Seg a Sex — 8h às 18h</p>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl border border-black/10 dark:border-white/10">
            <iframe
              title="Mapa"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.166...">
            </iframe>
          </div>
        </div>
      </main>
    </>
  );
}
