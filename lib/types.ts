export type TechSpec = [label: string, value: string];

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;          // ex.: "WEG", "Jacuzzi", "JL Capacitores", etc.
  category: string;       // ex.: "Peças para Bombas Jacuzzi", "Capacitores Permanentes", "Tintas/Vernizes WEG", "Resinas Isolantes", "Diluentes WEG"
  subcategory?: string;   // ex.: "Corpos Pré-filtro", "250V", etc.
  shortDescription: string;
  images: { src: string; alt: string }[];
  techSpecs?: TechSpec[]; // opcional: só quando houver ficha técnica oficial
};

export type Brand = {
  name: string;
  logo: string; // caminho em /public/marcas/...
  href?: string;
};

export type Review = {
  name: string;
  text: string;
  avatar: string; // caminho em /public/reviews/...
};
