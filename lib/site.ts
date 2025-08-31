// lib/site.ts
export const SITE = {
  name: "Polus Eletrotécnica",
  title: "Polus Eletrotécnica — Catálogo Técnico",
  description:
    "Catálogo técnico da Polus Eletrotécnica. Peças para motores elétricos e bombas d’água. Consulte disponibilidade e prazos pelo WhatsApp.",
  instagram: "https://www.instagram.com/_poluseletrotecnica/",
  // WhatsApp (internacional, sem +)
  whatsappNumberIntl: "551135992935",
  // Mensagem padrão (SEM categoria, conforme você pediu)
  whatsappMessage(productTitle?: string) {
    const texto = `Olá, tenho interesse em ${productTitle ?? "um produto"}.\nPode informar disponibilidade e prazo, por favor?`;
    return encodeURIComponent(texto);
  },
  // Endereço
  address: "R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130",
  // Google Maps EMBED (oficial). Você pode usar este ou substituir por um embed gerado no Maps (menu ➜ Compartilhar ➜ Incorporar):
  mapsEmbed:
    "https://www.google.com/maps?q=R.%20Jos%C3%A9%20Maria%20Castelo%20Prado%2C%2013%20-%20Ayrosa%2C%20Osasco%20-%20SP%2C%2006290-130&output=embed",
};

export default SITE;
