export const SITE = {
  name: "Polus Eletrotécnica",
  title: "Polus Eletrotécnica Catálogo Técnico",
  description: "Loja técnica especializada em peças para motores elétricos e bombas d’água — catálogo de capacitores, bombas Jacuzzi, tintas/vernizes WEG, resinas isolantes e mais.",
  address: "R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130",
  whatsapp: "551135992935",
  email: "poluseletrotecnica@hotmail.com",
  instagram: "https://www.instagram.com/_poluseletrotecnica/",
  cnpj: "05.886.392/0001-51",
  heroLoop: "/Loop-ezgif.com-video-to-webp-converter.webp",      // loop cinematográfico (fundo)
  headerLogo: "/polus-logo.svg",                                 // logo usada no topo/giro (SVG)
  sidebarButton: "/loading-logo.png",                            // botão da sidebar
  whatsappMessage: (productName: string) =>
    `Olá, tenho interesse em ${productName}. Pode informar disponibilidade e prazo, por favor?`,
  businessHours: [
    { day: "Segunda", open: "08:00", close: "17:30" },
    { day: "Terça",   open: "08:00", close: "17:30" },
    { day: "Quarta",  open: "08:00", close: "17:30" },
    { day: "Quinta",  open: "08:00", close: "17:30" },
    { day: "Sexta",   open: "08:00", close: "17:30" },
    { day: "Sábado",  open: "08:00", close: "12:00" },
    { day: "Domingo", open: null,    close: null }
  ],
  // Google Maps embed simples (oficial - opção A)
  mapsEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent("R. José Maria Castelo Prado, 13 - Ayrosa, Osasco - SP, 06290-130")}&output=embed`
};
