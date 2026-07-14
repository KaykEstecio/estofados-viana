export type PortfolioItem = { id: string; title: string; category: string; description: string; highlight: string; image: string; imageAlt: string };

export const portfolioItems: PortfolioItem[] = [
  { id: "cabeceira-modular", title: "Geometria modular", category: "Cabeceira estofada", description: "Módulos retangulares formam uma composição ampla e simétrica, integrada à iluminação do quarto.", highlight: "Composição adaptada à largura da parede.", image: "/images/real/projeto-cabeceira-modular.jpeg", imageAlt: "Cabeceira estofada modular com arandelas nas laterais" },
  { id: "painel-horizontal", title: "Ritmo horizontal", category: "Cabeceira integrada", description: "Módulos estofados acompanham a largura da parede e contrastam com o revestimento em madeira.", highlight: "Encontro preciso entre estofado e marcenaria.", image: "/images/real/detalhe-painel-estofado.jpeg", imageAlt: "Cabeceira estofada escura integrada a painel de madeira" },
  { id: "painel-espelhos", title: "Painel do piso ao teto", category: "Projeto sob medida", description: "Painéis estofados verticais criam um ponto focal entre espelhos e mobiliário em madeira.", highlight: "Proporção desenhada para ocupar toda a altura.", image: "/images/real/projeto-painel-espelhos.jpeg", imageAlt: "Painel estofado alto entre espelhos e mesas laterais" },
];
