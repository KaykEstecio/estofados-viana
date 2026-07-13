import { FiArrowUpRight } from "react-icons/fi";
import { getWhatsAppLink } from "../utils/whatsapp";

const points = [["Proporção", "Medidas e desenho considerados conforme o espaço."], ["Composição", "Referências alinhadas ao estilo do quarto."], ["Acabamento", "Detalhes definidos durante o atendimento."]];

export function CustomProjects() {
  return (
    <section id="sob-medida" className="border-y border-line bg-porcelain">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><p className="editorial-label text-caramel">Sob medida de verdade</p><h2 className="font-display mt-4 max-w-xl text-5xl font-medium leading-[0.94] sm:text-6xl">A peça parte do ambiente — não de um modelo pronto.</h2><p className="mt-8 max-w-lg text-sm leading-7 text-coffee">Converse com a gente, envie uma referência e conte como imagina o seu quarto. A partir disso, avaliamos juntos o caminho do projeto.</p><a href={getWhatsAppLink("Olá, gostaria de conversar sobre um projeto sob medida para o meu ambiente.")} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 border-b border-ink pb-2 text-sm font-semibold">Começar uma conversa <FiArrowUpRight aria-hidden="true" /></a></div>
        <div className="border-t border-line lg:border-l lg:border-t-0">
          {points.map(([title, text], index) => <div key={title} className="grid min-h-[170px] grid-cols-[50px_1fr] gap-4 border-b border-line px-5 py-8 last:border-b-0 sm:px-8 lg:px-12"><span className="editorial-label text-caramel">0{index + 1}</span><div><h3 className="font-display text-3xl">{title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-coffee">{text}</p></div></div>)}
        </div>
      </div>
    </section>
  );
}
