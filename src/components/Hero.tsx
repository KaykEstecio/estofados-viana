import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../utils/whatsapp";

export function Hero() {
  return (
    <section id="inicio" className="border-b border-line">
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[450px] lg:grid-cols-[60px_480px_1fr] xl:grid-cols-[72px_620px_1fr]">
        <div className="hidden border-r border-line lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-10">
          <span className="editorial-label [writing-mode:vertical-rl] rotate-180 text-coffee">Grande São Paulo</span>
          <FiArrowDownRight className="text-xl text-caramel" aria-hidden="true" />
        </div>
        <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-12 lg:py-8">
          <p className="editorial-label mb-8 text-caramel lg:mb-5">Feito para o seu espaço</p>
          <h1 className="font-display max-w-[620px] text-[3.35rem] font-medium leading-[0.89] tracking-[-0.045em] text-ink sm:text-[4.6rem] lg:text-[4.15rem]">
            Especialistas em camas e cabeceiras personalizadas
          </h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-coffee lg:mt-5">
            Projetos sob medida para transformar o quarto em um ambiente mais confortável, elegante e alinhado ao seu estilo.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-7">
            <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 bg-caramel px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90">
              <FaWhatsapp aria-hidden="true" /> Solicitar orçamento
            </a>
            <a href="#projetos" className="inline-flex min-h-12 items-center justify-center gap-2 border-b border-ink px-1 text-sm font-semibold text-ink hover:text-caramel">
              Ver projetos <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="image-wash relative min-h-[430px] border-t border-line lg:min-h-full lg:border-l lg:border-t-0">
          <img src="/images/real/hero-cama-couro.jpeg" alt="Quarto decorado com cama estofada em tom caramelo" className="absolute inset-0 h-full w-full object-cover object-center" />
          <figcaption className="absolute bottom-5 right-5 z-10 bg-[#f5f0e9]/90 px-3 py-2 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#302720]">Imagem ilustrativa</figcaption>
        </figure>
      </div>
    </section>
  );
}
