import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { portfolioItems } from "../data/portfolio";
import { getWhatsAppLink } from "../utils/whatsapp";

export function Portfolio() {
  return (
    <section id="modelos" className="bg-porcelain py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-7 border-b border-line pb-8 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div><p className="editorial-label text-caramel">Modelos e referências</p><h2 className="font-display mt-3 max-w-2xl text-4xl font-medium leading-[0.94] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Encontre o estilo que combina com o seu ambiente.</h2></div>
          <p className="max-w-lg text-sm leading-7 text-coffee lg:justify-self-end">Use estas referências como ponto de partida. Medidas, tecido, cor e acabamento são definidos com você no momento do orçamento.</p>
        </div>
        <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article key={item.id} className="group flex h-full flex-col bg-porcelain px-0 py-8 md:px-6 md:first:pl-0 xl:[&:nth-child(3n+1)]:pl-0 xl:[&:nth-child(3n)]:pr-0">
              <div className="image-wash aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" /></div>
              <div className="mt-5 flex items-start justify-between gap-5"><div><p className="editorial-label text-caramel">{String(index + 1).padStart(2, "0")} / {item.category}</p><h3 className="font-display mt-2 text-3xl font-medium">{item.title}</h3></div><FiArrowUpRight className="mt-1 shrink-0 text-xl text-coffee" aria-hidden="true" /></div>
              <p className="mt-4 text-sm leading-6 text-coffee">{item.description}</p>
              <p className="mt-3 text-[0.62rem] uppercase tracking-[0.12em] text-coffee">{item.highlight}</p>
              <a href={getWhatsAppLink(`Olá, gostei do modelo “${item.title}” e gostaria de solicitar um orçamento.`)} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 border border-caramel px-4 text-xs font-semibold uppercase tracking-[0.08em] text-caramel transition-colors hover:bg-caramel hover:text-white">
                <FaWhatsapp aria-hidden="true" /> Orçar este modelo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
