// lib/reviews.ts
export type Review = {
  id: string;
  name: string;
  text: string;
  rating: number;            // 1..5
  avatar?: string | null;    // caminho em /public (ex.: "/reviews/dos-anjos.jpg")
};

// Ordem fixa igual você pediu.
// Se quiser usar fotos reais, coloque-as em /public/reviews/ com esses nomes.
// Se a imagem não existir, o componente faz fallback (não quebra).
export const REVIEWS: Review[] = [
  {
    id: "dos-anjos",
    name: "Dos Anjos",
    text:
      "Atendimento maravilhoso e ágil, preços justos e com diversidades de produtos. Sou cliente a muitos anos, e super recomendo",
    rating: 5,
    avatar: "/reviews/dos-anjos.jpg",
  },
  {
    id: "rafael-r-dos-santos",
    name: "Rafael R. dos Santos",
    text:
      "Ótima Empresa. Atendimento rápido, boa organização dos produtos. Nota 10 para atendente Fernanda. Recomendo a Todos.",
    rating: 5,
    avatar: "/reviews/rafael-r-dos-santos.jpg",
  },
  {
    id: "sandro-backschat",
    name: "Sandro Backschat",
    text:
      "Ótimo atendimento, empresa cumpre o que promete! Fernanda me explicou certinho sobre as peças, muito gente boa! Recomendo!!!!",
    rating: 5,
    avatar: "/reviews/sandro-backschat.jpg",
  },
  {
    id: "meire-polezi",
    name: "Meire Polezi",
    text:
      "Preço muito bom e atendimento nota 10. A atendente Fernanda me atendeu e esclareceu todas as minhas dúvidas. Parabéns",
    rating: 5,
    avatar: "/reviews/meire-polezi.jpg",
  },
  {
    id: "thalia-ariadna",
    name: "Thalia Ariadna",
    text:
      "Atendente Heitor super prestativo! Me explicou muito bem sobre as peças, ótimo comércio!",
    rating: 5,
    avatar: "/reviews/thalia-ariadna.jpg",
  },
  {
    id: "renata",
    name: "Renata _",
    text:
      "Avaliando principalmente pelo atendimento da Fernanda, sempre muito simpática e atenciosa com os clientes.",
    rating: 5,
    avatar: "/reviews/renata.jpg",
  },
  {
    id: "james-lourenco-goncalves",
    name: "James Lourenço Gonçalves",
    text:
      "Ótimo atendimento e bons preços, super indico!!",
    rating: 5,
    avatar: "/reviews/james-lourenco-goncalves.jpg",
  },
  {
    id: "darah-mendes",
    name: "Darah Mendes",
    text:
      "Gostei muito das peças e o atendimento impecável da Fernanda 👏🏽",
    rating: 5,
    avatar: "/reviews/darah-mendes.jpg",
  },
  {
    id: "rodrigoyasmin-almeida",
    name: "Rodrigoyasmin Almeida",
    text:
      "Ótimo atendimento da Fernanda, super prestativa 👍",
    rating: 5,
    avatar: "/reviews/rodrigoyasmin-almeida.jpg",
  },
  {
    id: "jorge-dos-santos",
    name: "Jorge dos Santos",
    text:
      "Excelente, empresa familiar, sabem o que estão fazendo",
    rating: 5,
    avatar: "/reviews/jorge-dos-santos.jpg",
  },
];

export default REVIEWS;
