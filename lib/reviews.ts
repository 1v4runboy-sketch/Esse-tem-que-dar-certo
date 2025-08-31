// lib/reviews.ts
export type Review = {
  name: string;
  text: string;
  rating: number; // manter 5
  photo?: string; // caminho em /public/avaliacoes
};

export const REVIEWS: Review[] = [
  {
    name: "Dos Anjos",
    text:
      "Atendimento maravilhoso e ágil, preços justos e com diversidades de produtos. Sou cliente a muitos anos, e super recomendo",
    rating: 5,
    photo: "/avaliacoes/dos-anjos.jpg",
  },
  {
    name: "Rafael R. dos Santos",
    text:
      "Ótima Empresa\nAtendimento rápido, boa organização dos produtos.\nNota 10 para atendente Fernanda.\nRecomendo a Todos.",
    rating: 5,
    photo: "/avaliacoes/rafael-r-dos-santos.jpg",
  },
  {
    name: "Sandro Backschat",
    text:
      "Ótimo atendimento, empresa cumpre o que promete !\nFernanda me explicou certinho sobre as peças, muito gente boa !\nRecomendo !!!!",
    rating: 5,
    photo: "/avaliacoes/sandro-backschat.jpg",
  },
  {
    name: "Meire Polezi",
    text:
      "Preço muito bom e atendimento nota 10  .\nA atendente Fernanda me atendeu e esclareceu todas as minhas dúvidas. Parabéns",
    rating: 5,
    photo: "/avaliacoes/meire-polezi.jpg",
  },
  {
    name: "Thalia Ariadna",
    text:
      "Atendente Heitor super prestativo! Me explicou muito bem sobre as peças, ótimo comércio!",
    rating: 5,
    photo: "/avaliacoes/thalia-ariadna.jpg",
  },
  {
    name: "Renata _",
    text:
      "Avaliando principalmente pelo atendimento da Fernanda, sempre muito simpática e atenciosa com os clientes.",
    rating: 5,
    photo: "/avaliacoes/renata.jpg",
  },
  {
    name: "James Lourenço Gonçalves",
    text:
      "Ótimo atendimento e bons preços, super indico!!",
    rating: 5,
    photo: "/avaliacoes/james-lourenco-goncalves.jpg",
  },
  {
    name: "Darah Mendes",
    text:
      "gostei muito das peças e o atendimento impecavel da Fernanda 👏🏽 …",
    rating: 5,
    photo: "/avaliacoes/darah-mendes.jpg",
  },
  {
    name: "Rodrigoyasmin Almeida",
    text:
      "Ótimo atendimento da Fernanda super prestativa 👍 …",
    rating: 5,
    photo: "/avaliacoes/rodrigoyasmin-almeida.jpg",
  },
  {
    name: "Jorge dos Santos",
    text:
      "Excelente, empresa familiar, sabem o que estão fazendo",
    rating: 5,
    photo: "/avaliacoes/jorge-dos-santos.jpg",
  },
];

export default REVIEWS;
