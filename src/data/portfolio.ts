export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  image: string;
  imageAlt: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: "cabeceira-estofada-personalizada",
    title: "Cabeceira estofada sob medida",
    category: "Cabeceiras Personalizadas",
    description:
      "Cabeceira planejada para valorizar a parede da cama com proporção, conforto visual e acabamento estofado.",
    highlight:
      "Ideal para quartos que pedem uma peça personalizada, discreta e bem integrada ao ambiente.",
    image: "/images/categories/cabeceira-estofada-ilustrativa.jpg",
    imageAlt: "Referência ilustrativa de cabeceira estofada feita sob medida",
  },
  {
    id: "cama-estofada-sob-medida",
    title: "Cama estofada sob medida",
    category: "Camas Personalizadas",
    description:
      "Cama personalizada para criar uma base confortável, elegante e alinhada ao estilo do quarto.",
    highlight:
      "Projeto pensado para unir presença visual, conforto e melhor aproveitamento do espaço disponível.",
    image: "/images/categories/cama-personalizada-ilustrativa.jpg",
    imageAlt: "Referência ilustrativa de cama estofada personalizada para o quarto",
  },
];
