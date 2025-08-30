// lib/site.ts
export const SITE = {
  name: "Polus Eletrotécnica",
  title: "Polus Eletrotécnica — Catálogo Técnico",
  description:
    "Catálogo técnico de peças para motores elétricos e bombas d’água. Consulte disponibilidade e prazo pelo WhatsApp.",
  cnpj: "05.886.392/0001-51",
  email: "poluseletrotecnica@hotmail.com",
  instagram: "https://www.instagram.com/_poluseletrotecnica/",
  address: "R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130",
  whatsappNumber: "551135992935",
  whatsappLink: "https://wa.me/551135992935",
  // Você pediu sem categoria na mensagem:
  whatsappMessage(productTitle?: string) {
    const msg = `Olá, tenho interesse em ${productTitle ?? "um produto do catálogo"}. Pode informar disponibilidade e prazo, por favor?`;
    return encodeURIComponent(msg);
  },
  // Se quiser usar embed oficial depois, cole o src do <iframe> no campo abaixo:
  mapsEmbedSrc: "", // ex.: "https://www.google.com/maps/embed?pb=..."
} as const;

export type Site = typeof SITE;
export default SITE;
