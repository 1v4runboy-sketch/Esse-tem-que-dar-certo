"use client";

import { useEffect, useState } from "react";

function getSystemPrefersDark() {
  if (typeof window === "undefined") return false;
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme");
    const initialDark = stored
      ? stored === "dark"
      : getSystemPrefersDark();
    setDark(initialDark);
    if (initialDark) document.documentElement.classList.add("dark");
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="rounded-md border px-3 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {dark ? "Tema Claro" : "Tema Escuro"}
    </button>
  );
}
