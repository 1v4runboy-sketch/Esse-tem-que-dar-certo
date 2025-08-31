// components/RotatingLogoButton.tsx
'use client';

type Props = { size?: number };

export default function RotatingLogoButton({ size = 40 }: Props) {
  return (
    <div
      aria-hidden
      style={{ width: size, height: size }}
      className="select-none rounded-full border border-black/10 dark:border-white/10 grid place-items-center animate-spin-slow"
    >
      {/* substitua por sua logo real se preferir */}
      <span className="text-xs">LOGO</span>
    </div>
  );
}
