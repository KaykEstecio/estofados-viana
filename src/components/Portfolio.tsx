import { FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { portfolioItems } from "../data/portfolio";
import { getWhatsAppLink } from "../utils/whatsapp";

type PortfolioProps = { asPage?: boolean };

export function Portfolio({ asPage = false }: PortfolioProps) {
  const Heading = asPage ? "h1" : "h2";
  const [featuredModel, ...models] = portfolioItems;

  return (
    <section id="modelos" className="bg-porcelain py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-7 border-b border-line pb-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div><p className="editorial-label text-caramel">Modelos e referências</p><Heading className="font-display mt-3 max-w-2xl text-4xl font-medium leading-[0.94] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Encontre o estilo que combina com o seu ambiente.</Heading></div>
          <p className="max-w-lg text-sm leading-7 text-coffee lg:justify-self-end">Todas as fotos de referência estão reunidas aqui para facilitar sua escolha. Medidas, tecido, cor e acabamento são definidos com você no momento do orçamento.</p>
        </div>

        <article className="grid border-b border-line py-10 lg:grid-cols-[1.45fr_0.55fr] lg:gap-10 lg:py-12">
          <div className="image-wash min-h-[380px] overflow-hidden sm:min-h-[520px] lg:min-h-[640px]">
            <img src={featuredModel.image} alt={featuredModel.imageAlt} className="h-full w-full object-cover object-center" />
            <span className="absolute left-4 top-4 z-10 bg-cream/90 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.13em] text-ink">Modelo em destaque</span>
          </div>
          <div className="flex flex-col justify-center pt-7 lg:pt-0">
            <p className="editorial-label text-caramel">01 / {featuredModel.category}</p>
            <h2 className="font-display mt-3 text-4xl font-medium leading-none sm:text-5xl">{featuredModel.title}</h2>
            <p className="mt-6 text-sm leading-7 text-coffee">{featuredModel.description}</p>
            <p className="mt-5 border-t border-line pt-5 text-[0.62rem] uppercase leading-5 tracking-[0.12em] text-coffee">{featuredModel.highlight}</p>
            <a href={getWhatsAppLink(`Olá, gostei do modelo “${featuredModel.title}” e gostaria de solicitar um orçamento.`)} target="_blank" rel="noreferrer" className="interactive-lift mt-8 inline-flex min-h-12 items-center justify-center gap-2 bg-caramel px-5 text-xs font-semibold uppercase tracking-[0.08em] text-white">
              <FaWhatsapp aria-hidden="true" /> Orçar este modelo
            </a>
          </div>
        </article>

        <div className="grid gap-x-6 md:grid-cols-2 lg:gap-x-10">
          {models.map((item, index) => (
            <article key={item.id} className="motion-card group flex h-full flex-col border-b border-line py-10">
              <div className={`image-wash overflow-hidden ${item.image.includes("geometrica") || item.image.includes("classica") || item.image.includes("sofa") ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <img src={item.image} alt={item.imageAlt} loading="lazy" className="h-full w-full object-cover object-center" />
              </div>
              <div className="mt-6 flex items-start justify-between gap-5"><div><p className="editorial-label text-caramel">{String(index + 2).padStart(2, "0")} / {item.category}</p><h3 className="font-display mt-2 text-3xl font-medium sm:text-4xl">{item.title}</h3></div><FiArrowUpRight className="motion-card-arrow mt-1 shrink-0 text-xl text-coffee" aria-hidden="true" /></div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-coffee">{item.description}</p>
              <p className="mt-4 text-[0.62rem] uppercase leading-5 tracking-[0.12em] text-coffee">{item.highlight}</p>
              <a href={getWhatsAppLink(`Olá, gostei do modelo “${item.title}” e gostaria de solicitar um orçamento.`)} target="_blank" rel="noreferrer" className="interactive-lift mt-6 inline-flex min-h-11 items-center justify-center gap-2 border border-caramel px-4 text-xs font-semibold uppercase tracking-[0.08em] text-caramel hover:bg-caramel hover:text-white">
                <FaWhatsapp aria-hidden="true" /> Orçar este modelo
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
