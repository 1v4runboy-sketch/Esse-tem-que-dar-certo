// lib/reviews.ts
export type Review = {
  name: string;
  text: string;
  avatar?: string; // caminho em /public/reviews/...
  rating?: number; // 1..5
};

const REVIEWS: Review[] = [
  {
    name: "Dos Anjos",
    text: "Atendimento maravilhoso e ágil, preços justos e com diversidades de produtos. Sou cliente a muitos anos, e super recomendo",
    avatar: "/reviews/dos-anjos.jpg",
    rating: 5,
  },
  {
    name: "Rafael R. dos Santos",
    text: "Ótima Empresa\nAtendimento rápido, boa organização dos produtos.\nNota 10 para atendente Fernanda.\nRecomendo a Todos.",
    avatar: "/reviews/rafael-r-dos-santos.jpg",
    rating: 5,
  },
  {
    name: "Sandro Backschat",
    text: "Ótimo atendimento, empresa cumpre o que promete !\nFernanda me explicou certinho sobre as peças, muito gente boa !\nRecomendo !!!!",
    avatar: "/reviews/sandro-backschat.jpg",
    rating: 5,
  },
  {
    name: "Meire Polezi",
    text: "Preço muito bom e atendimento nota 10.\nA atendente Fernanda me atendeu e esclareceu todas as minhas dúvidas. Parabéns",
    avatar: "/reviews/meire-polezi.jpg",
    rating: 5,
  },
  {
    name: "Thalia Ariadna",
    text: "Atendente Heitor super prestativo! Me explicou muito bem sobre as peças, ótimo comércio!",
    avatar: "/reviews/thalia-ariadna.jpg",
    rating: 5,
  },
  {
    name: "Renata _",
    text: "Avaliando principalmente pelo atendimento da Fernanda, sempre muito simpática e atenciosa com os clientes.",
    avatar: "/reviews/renata.jpg",
    rating: 5,
  },
  {
    name: "James Lourenço Gonçalves",
    text: "Ótimo atendimento e bons preços, super indico!!",
    avatar: "/reviews/james-lourenco-goncalves.jpg",
    rating: 5,
  },
  {
    name: "Darah Mendes",
    text: "gostei muito das peças e o atendimento impecavel da Fernanda 👏🏽 …",
    avatar: "/reviews/darah-mendes.jpg",
    rating: 5,
  },
  {
    name: "Rodrigoyasmin Almeida",
    text: "Ótimo atendimento da Fernanda super prestativa 👍 …",
    avatar: "/reviews/rodrigoyasmin-almeida.jpg",
    rating: 5,
  },
  {
    name: "Jorge dos Santos",
    text: "Excelente, empresa familiar, sabem o que estão fazendo",
    avatar: "/reviews/jorge-dos-santos.jpg",
    rating: 5,
  },
];

export default REVIEWS;
