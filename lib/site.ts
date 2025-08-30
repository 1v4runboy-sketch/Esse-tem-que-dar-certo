// lib/site.ts
const WHATS = "551135992935";

// mensagem exigida (sem categoria)
export function whatsappMessage(productTitle?: string) {
  const p = productTitle ? ` ${productTitle}` : "";
  return `Olá, tenho interesse em${p}. Pode informar disponibilidade e prazo, por favor?`;
}

export function whatsappHref(productTitle?: string) {
  const text = encodeURIComponent(whatsappMessage(productTitle));
  return `https://wa.me/${WHATS}?text=${text}`;
}

const SITE = {
  name: "Polus Eletrotécnica — Catálogo Técnico",
  description:
    "Catálogo técnico de peças para motores elétricos e bombas d’água. Consulte no WhatsApp e receba atendimento técnico.",
  address: "R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130",
  whatsappNumber: WHATS,
  instagram: "https://www.instagram.com/_poluseletrotecnica/",
  // Embed oficial simples (pode ajustar depois)
  mapsEmbed:
    "https://www.google.com/maps?q=R.%20Jos%C3%A9%20Maria%20Castelo%20Prado%2C%2013%20-%20Ayrosa%2C%20Osasco%20-%20SP%2C%2006290-130&output=embed",
  whatsappHref,
  whatsappMessage,
};

export default SITE;
