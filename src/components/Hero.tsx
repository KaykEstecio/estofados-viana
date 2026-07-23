import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getWhatsAppLink } from "../utils/whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="border-b border-line">
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[560px] lg:grid-cols-[60px_500px_1fr] xl:min-h-[620px] xl:grid-cols-[72px_560px_1fr]">
        <div className="hidden border-r border-line lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-10">
          <span className="editorial-label [writing-mode:vertical-rl] rotate-180 text-coffee">Grande São Paulo</span>
          <FiArrowDownRight className="text-xl text-caramel" aria-hidden="true" />
        </div>
        <div className="hero-copy flex flex-col justify-center px-5 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-8">
          <p className="hero-motion editorial-label mb-4 text-caramel lg:mb-3">Especialistas em cabeceiras</p>
          <h1 className="hero-motion font-display max-w-[620px] text-[2.8rem] font-medium leading-[0.88] tracking-[-0.04em] text-ink min-[380px]:text-[3.05rem] sm:text-[4.35rem] lg:text-[4.05rem]">
            <span className="block">Camas e cabeceiras</span>
            <span className="mt-1 block text-[0.88em] font-normal italic tracking-[-0.025em] text-caramel">sob medida</span>
          </h1>
          <p className="hero-motion mt-5 max-w-lg text-[0.94rem] leading-7 text-coffee lg:mt-4">
            Peças personalizadas para transformar o quarto em um ambiente confortável, elegante e alinhado ao seu estilo.
          </p>
          <div className="hero-motion mt-7 flex flex-col gap-3 sm:flex-row sm:items-center lg:mt-6">
            <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="interactive-lift inline-flex min-h-12 items-center justify-center gap-3 bg-caramel px-6 text-sm font-semibold text-white hover:opacity-90">
              <FaWhatsapp aria-hidden="true" /> Solicitar orçamento
            </a>
            <Link to="/modelos" className="arrow-link inline-flex min-h-12 items-center justify-center gap-2 border-b border-ink px-1 text-sm font-semibold text-ink hover:text-caramel">
              Ver modelos <FiArrowUpRight className="link-arrow-motion" aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className="image-wash relative min-h-[400px] border-t border-line sm:min-h-[480px] lg:min-h-full lg:border-l lg:border-t-0">
          <img src="/images/real/hero-cama-couro.jpeg" alt="Quarto decorado com cama estofada em tom caramelo" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
          <figcaption className="absolute bottom-5 right-5 z-10 bg-cream/90 px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-ink">Imagem ilustrativa</figcaption>
        </figure>
      </div>
    </section>
  );
}
