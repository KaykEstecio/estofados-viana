export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "cabeceira-estofada-personalizada",
    title: "Cabeceira estofada personalizada",
    category: "Cabeceiras Personalizadas",
    description:
      "Cabeceira sob medida com acabamento estofado, tecido em tom neutro e visual elegante para compor o ambiente.",
    highlight:
      "Projeto desenvolvido com atenção às medidas, tecido e acabamento final.",
    image: "/images/portfolio/cabeceira-estofada-personalizada.webp",
  },
  {
    id: "cama-estofada-sob-medida",
    title: "Cama estofada sob medida",
    category: "Camas Personalizadas",
    description:
      "Cama personalizada desenvolvida conforme o espaço, estilo e necessidade do cliente.",
    highlight:
      "Peça sob medida para entregar conforto, sofisticação e melhor aproveitamento do quarto.",
    image: "/images/portfolio/cama-estofada-sob-medida.webp",
  },
];
