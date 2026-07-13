export type PortfolioItem = { id: string; title: string; category: string; description: string; highlight: string; image: string; imageAlt: string };

export const portfolioItems: PortfolioItem[] = [
  { id: "cabeceira-vertical", title: "Linhas verticais", category: "Cabeceira estofada", description: "Uma referência de composição vertical para criar ritmo, altura e aconchego na parede da cama.", highlight: "Desenho adaptável às proporções do ambiente.", image: "/images/portfolio/projeto-cabeceira-vertical.png", imageAlt: "Referência ilustrativa de cabeceira estofada com linhas verticais" },
  { id: "cabeceira-modular", title: "Geometria modular", category: "Projeto sob medida", description: "Módulos estofados que organizam a parede e ajudam a integrar cama, iluminação e decoração.", highlight: "Composição pensada conforme o espaço disponível.", image: "/images/portfolio/projeto-cabeceira-modular.png", imageAlt: "Referência ilustrativa de cabeceira estofada modular" },
  { id: "cabeceira-curva", title: "Contorno suave", category: "Cama personalizada", description: "Curvas e volumes sutis para um quarto acolhedor, com uma presença visual leve e contemporânea.", highlight: "Referência para definir desenho e acabamento.", image: "/images/portfolio/projeto-cabeceira-curva.png", imageAlt: "Referência ilustrativa de cama estofada com cabeceira curva" },
];
