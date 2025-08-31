import { Product } from "./types";

// IMPORTANTE: coloque as imagens reais nessas rotas dentro de /public/produtos.
// Se os seus arquivos tiverem outros nomes, renomeie para coincidir.

export const PRODUCTS: Product[] = [
  {
    id: "p-verniz-weg-1314-5l",
    slug: "verniz-weg-1314-5l",
    title: "Verniz WEG 1314 (5L)",
    brand: "WEG",
    category: "Tintas/Vernizes WEG",
    subcategory: "Vernizes WEG",
    shortDescription: "Verniz isolante WEG 1314 para motores elétricos (lata 5 litros).",
    images: [
      { src: "/produtos/verniz-weg-1314-foto1.png", alt: "Verniz WEG 1314 5L - foto 1" },
      { src: "/produtos/verniz-weg-1314-foto2.png", alt: "Verniz WEG 1314 5L - foto 2" }
    ]
  },
  {
    id: "p-corpo-prefiltro-jacuzzi-a",
    slug: "corpo-prefiltro-jacuzzi-a",
    title: "Corpo Pré-filtro Jacuzzi A",
    brand: "Jacuzzi",
    category: "Peças para Bombas Jacuzzi",
    subcategory: "Corpos Pré-filtro",
    shortDescription: "Corpo de pré-filtro modelo A para bombas Jacuzzi.",
    images: [
      { src: "/produtos/corpo-prefiltro-jacuzzi-a-1.webp", alt: "Corpo Pré-filtro Jacuzzi A - foto 1" },
      { src: "/produtos/corpo-prefiltro-jacuzzi-a-2.webp", alt: "Corpo Pré-filtro Jacuzzi A - foto 2" }
    ]
  },
  {
    id: "p-capacitor-permanente-250v",
    slug: "capacitor-permanente-250v",
    title: "Capacitor Permanente 250V",
    brand: "JL Capacitores",
    category: "Capacitores Permanentes",
    subcategory: "250V",
    shortDescription: "Capacitor permanente 250V para motores, linha JL Capacitores.",
    images: [
      { src: "/produtos/capacitor-250v-foto1.png", alt: "Capacitor Permanente 250V - foto 1" },
      { src: "/produtos/capacitor-250v-foto2.png", alt: "Capacitor Permanente 250V - foto 2" }
    ]
  },
  {
    id: "p-filme-poliester",
    slug: "filme-poliester",
    title: "Filme Poliéster",
    brand: "Lanç Comercial",
    category: "Resinas Isolantes",
    subcategory: "Resinas Isolantes",
    shortDescription: "Filme poliéster técnico para isolamento (diversas medidas).",
    images: [
      { src: "/produtos/poliester-foto1.webp", alt: "Filme Poliéster - foto 1" },
      { src: "/produtos/poliester-foto2.webp", alt: "Filme Poliéster - foto 2" }
    ]
  },
  {
    id: "p-resina-95b",
    slug: "resina-95b",
    title: "Resina 95B",
    brand: "Lanç Comercial",
    category: "Resinas Isolantes",
    subcategory: "Resinas Isolantes",
    shortDescription: "Resina isolante 95B para aplicações em motores elétricos.",
    images: [
      { src: "/produtos/resina-calas-95b-1.webp", alt: "Resina 95B - foto 1" },
      { src: "/produtos/resina-calas-95b-2.webp", alt: "Resina 95B - foto 2" },
      { src: "/produtos/resina-calas-95b-3.webp", alt: "Resina 95B - foto 3" }
    ]
  }
];
