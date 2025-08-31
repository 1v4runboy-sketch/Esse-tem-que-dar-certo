// app/produtos/error.tsx
'use client';
export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-2">
      <p>Algo deu errado ao carregar os produtos.</p>
      <button className="px-3 py-1 rounded bg-black text-white" onClick={reset}>
        Tentar novamente
      </button>
    </div>
  );
}
