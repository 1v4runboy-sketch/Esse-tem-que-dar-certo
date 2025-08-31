// components/SidebarProvider.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Ctx = {
  open: boolean;
  toggle: () => void;
};

const SidebarCtx = createContext<Ctx | null>(null);

export function useSidebar() {
  const ctx = useContext(SidebarCtx);
  if (!ctx) throw new Error("SidebarProvider ausente");
  return ctx;
}

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <SidebarCtx.Provider value={{ open, toggle: () => setOpen((v) => !v) }}>
      {children}
    </SidebarCtx.Provider>
  );
}
