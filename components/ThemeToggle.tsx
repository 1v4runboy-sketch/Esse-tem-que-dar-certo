"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const active = theme === "system" ? systemTheme : theme;
  const dark = active === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50 dark:hover:bg-white/10"
      aria-label="Alternar tema"
      title="Alternar tema"
    >
      {dark ? "🌙" : "☀️"} <span className="hidden sm:inline">{dark ? "Escuro" : "Claro"}</span>
    </button>
  );
}
