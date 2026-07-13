import { FiArrowUpRight } from "react-icons/fi";
import { portfolioItems } from "../data/portfolio";

export function Portfolio() {
  return (
    <section id="projetos" className="bg-porcelain py-16 sm:py-20 lg:py-6">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-7 border-b border-line pb-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:pb-4">
          <div><p className="editorial-label text-caramel">Referências de projeto</p><h2 className="font-display mt-3 max-w-2xl text-4xl font-medium leading-[0.94] tracking-[-0.035em] sm:text-5xl lg:text-4xl">Um quarto com identidade começa nos detalhes.</h2></div>
          <p className="max-w-lg text-sm leading-7 text-coffee lg:justify-self-end">Explore caminhos de composição para camas e cabeceiras. Cada projeto é avaliado e definido conforme o ambiente e a preferência do cliente.</p>
        </div>
        <div className="grid gap-px bg-line lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <article key={item.id} className="group bg-porcelain py-8 lg:px-6 lg:py-4 first:pl-0 last:pr-0">
              <div className="image-wash aspect-[4/5] overflow-hidden lg:aspect-[2.2/1]"><img src={item.image} alt={item.imageAlt} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" /></div>
              <div className="mt-5 flex items-start justify-between gap-5"><div><p className="editorial-label text-caramel">{String(index + 1).padStart(2, "0")} / {item.category}</p><h3 className="font-display mt-2 text-3xl font-medium">{item.title}</h3></div><FiArrowUpRight className="mt-1 shrink-0 text-xl text-coffee" aria-hidden="true" /></div>
              <p className="mt-4 text-sm leading-6 text-coffee lg:hidden">{item.description}</p>
              <p className="mt-4 text-[0.62rem] uppercase tracking-[0.12em] text-coffee lg:mt-2">Imagem ilustrativa</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
