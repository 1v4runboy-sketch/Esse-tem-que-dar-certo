"use client";

import Image from "next/image";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import RotatingLogo from "@/components/RotatingLogo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
        <div className="container-padded h-14 grid grid-cols-3 items-center">
          {/* Botão da sidebar (logo loader) à esquerda */}
          <div className="flex items-center">
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menu"
              className="rounded-md p-1.5 hover:bg-accent"
              title="Menu"
            >
              <Image
                src="/loading-logo.png"
                alt="Menu"
                width={28}
                height={28}
                className="h-7 w-7"
                priority
              />
            </button>
          </div>

          {/* Logo rotatória central */}
          <div className="flex items-center justify-center">
            <RotatingLogo src="/polus-logo.svg" size={56} hoverSpeedUp={3} axis="z" />
          </div>

          {/* Espaço à direita para ações (Tema, etc.) */}
          <div className="flex items-center justify-end gap-2">
            {/* Coloque aqui o ModeToggle se quiser visível no header */}
            {/* <ModeToggle /> */}
          </div>
        </div>
      </header>

      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}
