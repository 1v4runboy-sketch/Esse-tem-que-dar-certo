// lib/products.ts
// Estrutura minimal para produtos. Ajuste techSpecs conforme for necessário.
export type ProductImage = { src: string; alt?: string };
export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category?: string;
  subcategory?: string;
  shortDescription?: string;
  images: ProductImage[];
  techSpecs?: [string, string][];
};

export const PRODUCTS: Product[] = [
  {
    id: "verniz-weg-1314-5l",
    slug: "verniz-weg-1314-5l",
    title: "Verniz WEG 1314 — 5 L",
    brand: "WEG",
    category: "Tintas/Vernizes",
    subcategory: "Vernizes WEG",
    shortDescription: "Verniz isolante WEG 1314, embalagem 5 litros.",
    images: [{ src: "/produtos/verniz-weg-1314-5l.png", alt: "Verniz WEG 1314 5L" }],
    techSpecs: [
      ["Tipo", "Verniz isolante"],
      ["Embalagem", "5 L"]
    ]
  },
  {
    id: "corpo-prefiltro-jacuzzi-a",
    slug: "corpo-prefiltro-jacuzzi-a",
    title: "Corpo Pré-filtro — Jacuzzi A",
    brand: "Jacuzzi",
    category: "Peças para Bombas Jacuzzi",
    subcategory: "Corpos Pré-filtro",
    shortDescription: "Corpo do pré-filtro compatível com Jacuzzi série A.",
    images: [{ src: "/produtos/corpo-prefiltro-jacuzzi-a.webp", alt: "Corpo pré-filtro Jacuzzi A" }]
  },
  {
    id: "capacitor-permanente-250v",
    slug: "capacitor-permanente-250v",
    title: "Capacitor Permanente — 250V",
    brand: "JL Capacitores",
    category: "Capacitores",
    subcategory: "250V",
    shortDescription: "Capacitor permanente para uso em motores — 250V.",
    images: [{ src: "/produtos/capacitor-permanente-250v.png", alt: "Capacitor permanente 250V" }]
  },
  {
    id: "filme-poliester",
    slug: "filme-poliester",
    title: "Filme Poliéster",
    brand: "LANC Comercial",
    category: "Isolantes",
    subcategory: "Filmes",
    shortDescription: "Filme poliéster isolante — várias medidas disponíveis.",
    images: [{ src: "/produtos/filme-poliester.webp", alt: "Filme poliéster" }]
  },
  {
    id: "resina-95b",
    slug: "resina-95b",
    title: "Resina Isolante 95B",
    brand: "CIFA",
    category: "Resinas",
    subcategory: "Resinas Isolantes",
    shortDescription: "Resina isolante 95B para aplicações técnicas.",
    images: [{ src: "/produtos/resina-95b.webp", alt: "Resina 95B" }]
  }
];

export default PRODUCTS;
