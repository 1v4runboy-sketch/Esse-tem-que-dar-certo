// components/TopBar.tsx
import RotatingLogo from "./RotatingLogo";
import Link from "next/link";

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-black/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto h-16 flex items-center justify-center">
        <Link href="/" aria-label="Ir para a home" className="inline-block">
          <RotatingLogo />
        </Link>
      </div>
    </header>
  );
}
