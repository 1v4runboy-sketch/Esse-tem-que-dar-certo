// lib/site.ts
// Centraliza configurações do site e utilitários para WhatsApp / Maps etc.

export const SITE = {
  name: "Polus Eletrotécnica",
  title: "Polus Eletrotécnica — Catálogo Técnico",
  description:
    "Catálogo técnico da Polus Eletrotécnica. Peças para motores elétricos e bombas d’água. Consulte disponibilidade e prazos pelo WhatsApp.",
  instagram: "https://www.instagram.com/_poluseletrotecnica/",
  // WhatsApp (número no formato internacional, sem '+')
  whatsappNumberIntl: "551135992935",
  // Mensagem padrão (SEM categoria, conforme solicitado)
  whatsappMessage(productTitle?: string) {
    return `Olá, tenho interesse em ${productTitle ?? "um produto"}. Pode informar disponibilidade e prazo, por favor?`;
  },
  // Endereço
  address: "R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130",
  // Google Maps EMBED (pode substituir pelo iframe gerado no Maps)
  mapsEmbed:
    "https://www.google.com/maps?q=R.%20Jos%C3%A9%20Maria%20Castelo%20Prado%2C%2013%20-%20Ayrosa%2C%20Osasco%20-%20SP%2C%2006290-130&output=embed",
};

// named exports convenientes
export const whatsappNumberIntl = SITE.whatsappNumberIntl;
export const whatsappMessage = (productTitle?: string) =>
  encodeURIComponent(SITE.whatsappMessage(productTitle));

// whatsappHref: retorna URL completa pronta para abrir no browser
export const whatsappHref = (productTitle?: string) =>
  `https://wa.me/${whatsappNumberIntl}?text=${whatsappMessage(productTitle)}`;

// exporta mapsEmbed separado também
export const mapsEmbed = SITE.mapsEmbed;

// default export (mantém compatibilidade com imports anteriores)
export default SITE;
