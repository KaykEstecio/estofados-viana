export type ProjectItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
};

export const projectItems: ProjectItem[] = [
  {
    id: "cabeceira-modular-iluminada",
    title: "Cabeceira modular iluminada",
    category: "Cabeceira sob medida",
    description: "Composição de módulos estofados desenvolvida para ocupar toda a largura da parede e integrar as arandelas.",
    image: "/images/real/projeto-cabeceira-modular.jpeg",
    imageAlt: "Projeto realizado de cabeceira modular estofada com arandelas",
  },
  {
    id: "painel-estofado-madeira",
    title: "Painel estofado com madeira",
    category: "Painel integrado",
    description: "Painel horizontal produzido para acompanhar o revestimento de madeira e os pontos elétricos do quarto.",
    image: "/images/real/detalhe-painel-estofado.jpeg",
    imageAlt: "Projeto realizado de painel estofado escuro com revestimento de madeira",
  },
  {
    id: "painel-vertical-espelhos",
    title: "Painel vertical entre espelhos",
    category: "Projeto de parede",
    description: "Composição vertical do piso ao teto, instalada entre espelhos e mobiliário para criar o ponto focal do ambiente.",
    image: "/images/real/projeto-painel-espelhos.jpeg",
    imageAlt: "Projeto realizado de painel estofado vertical entre espelhos",
  },
  {
    id: "cabeceira-curva-com-led",
    title: "Cabeceira curva com LED",
    category: "Cabeceira instalada",
    description: "Cabeceira ampla de cantos arredondados, iluminação indireta superior e mesas laterais integradas.",
    image: "/images/real/projeto-cabeceira-curva.jpeg",
    imageAlt: "Projeto realizado de cabeceira curva com iluminação e mesas laterais",
  },
  {
    id: "cabeceira-vertical-led",
    title: "Cabeceira vertical com LED",
    category: "Cabeceira instalada",
    description: "Painel de módulos verticais instalado de parede a parede, com iluminação indireta no acabamento superior.",
    image: "/images/real/cabeceira-vertical-led.jpeg",
    imageAlt: "Projeto realizado de cabeceira vertical com iluminação indireta",
  },
];
