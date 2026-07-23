import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import type { PortfolioItem } from "../data/portfolio";
import { getWhatsAppLink } from "../utils/whatsapp";

type ProductCategoryPageProps = {
  label: string;
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  items: PortfolioItem[];
  details: string[];
};

export function ProductCategoryPage({ label, title, description, heroImage, heroAlt, items, details }: ProductCategoryPageProps) {
  return (
    <>
      <section className="border-b border-line bg-porcelain">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.82fr_1.18fr]">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
            <p className="editorial-label text-caramel">{label}</p>
            <h1 className="font-display mt-4 max-w-xl text-5xl font-medium leading-[0.94] tracking-[-0.035em] sm:text-6xl lg:text-7xl">{title}</h1>
            <p className="mt-7 max-w-lg text-sm leading-7 text-coffee">{description}</p>
            <a href={getWhatsAppLink(`Olá, gostaria de solicitar um orçamento para ${label.toLowerCase()}.`)} target="_blank" rel="noreferrer" className="interactive-lift mt-9 inline-flex min-h-12 w-fit items-center gap-3 bg-caramel px-6 text-sm font-semibold text-white">
              <FaWhatsapp aria-hidden="true" /> Solicitar orçamento
            </a>
          </div>
          <figure className="image-wash min-h-[360px] lg:min-h-[650px]">
            <img src={heroImage} alt={heroAlt} className="h-full w-full object-cover" />
            <figcaption className="absolute bottom-4 right-4 z-10 bg-cream/90 px-3 py-2 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-ink">Referência de acabamento</figcaption>
          </figure>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 border-b border-line pb-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="editorial-label text-caramel">Personalização</p>
              <h2 className="font-display mt-3 text-4xl font-medium leading-none sm:text-5xl">Cada detalhe acompanha o ambiente.</h2>
            </div>
            <ul className="grid border-t border-line sm:grid-cols-3 lg:border-t-0">
              {details.map((detail, index) => (
                <li key={detail} className="border-b border-line py-5 text-sm leading-6 text-coffee sm:border-b-0 sm:border-l sm:px-5">
                  <span className="editorial-label mb-4 block text-caramel">0{index + 1}</span>
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {items.length > 0 ? (
            <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
              {items.map((item, index) => (
                <article key={item.id} className="motion-card group flex h-full flex-col bg-cream py-8 md:px-6 md:first:pl-0 xl:[&:nth-child(3n+1)]:pl-0 xl:[&:nth-child(3n)]:pr-0">
                  <div className="image-wash aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.imageAlt} loading="lazy" className="h-full w-full object-cover" /></div>
                  <div className="mt-5 flex items-start justify-between gap-5"><div><p className="editorial-label text-caramel">Modelo {String(index + 1).padStart(2, "0")}</p><h3 className="font-display mt-2 text-3xl font-medium">{item.title}</h3></div><FiArrowUpRight className="motion-card-arrow mt-1 shrink-0 text-xl text-coffee" aria-hidden="true" /></div>
                  <p className="mt-4 text-sm leading-6 text-coffee">{item.description}</p>
                  <a href={getWhatsAppLink(`Olá, gostei do modelo “${item.title}” e gostaria de solicitar um orçamento.`)} target="_blank" rel="noreferrer" className="interactive-lift mt-6 inline-flex min-h-11 items-center justify-center gap-2 border border-caramel px-4 text-xs font-semibold uppercase tracking-[0.08em] text-caramel hover:bg-caramel hover:text-white"><FaWhatsapp aria-hidden="true" /> Orçar este modelo</a>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-8 py-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <h2 className="font-display max-w-xl text-4xl font-medium leading-none sm:text-5xl">Criamos a peça conforme o uso, as medidas e o acabamento desejado.</h2>
              <div className="max-w-lg lg:justify-self-end">
                <p className="text-sm leading-7 text-coffee">As fotos de referência ficam reunidas na página de modelos, facilitando a comparação de estilos, formatos e acabamentos.</p>
                <Link to="/modelos" className="arrow-link mt-6 inline-flex items-center gap-2 border-b border-ink pb-2 text-sm font-semibold">
                  Ver todos os modelos <FiArrowUpRight className="link-arrow-motion" aria-hidden="true" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
