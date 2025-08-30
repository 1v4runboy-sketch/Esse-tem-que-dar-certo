export const CATEGORIES = {
  "Peças para Bombas Jacuzzi": ["Flanges", "Corpos Pré-filtro", "Braquetes"],
  "Capacitores Eletrolíticos": ["110V", "220V"],
  "Capacitores Permanentes": ["250V", "380V", "440V"],
  "Tintas/Vernizes WEG": ["Vernizes WEG"],
  "Diluentes WEG": ["Diluentes WEG"],
  "Resinas Isolantes": ["Resinas Isolantes"]
} as const;

export type CategoryName = keyof typeof CATEGORIES;
