import { getWhatsAppLink } from "../utils/whatsapp";
import { siteConfig } from "../data/siteConfig";

export function Hero() {
  return (
    <section id="inicio" className="bg-cream">
      <div className="mx-auto grid min-h-[calc(100vh-112px)] max-w-6xl items-center gap-10 px-5 py-16 lg:min-h-[calc(100vh-73px)] lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
            {siteConfig.specialization}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Especialistas em camas e cabeceiras personalizadas
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-coffee">
            Desenvolvemos camas, cabeceiras e estofados sob medida para quartos
            que precisam de conforto, bom acabamento e uma peça feita para o
            espaço certo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="rounded-md border border-coffee px-5 py-3 text-center font-semibold text-coffee transition hover:bg-porcelain"
            >
              Ver projetos
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-coffee px-5 py-3 text-center font-semibold text-porcelain shadow-sm transition hover:bg-ink"
            >
              Solicitar orçamento pelo WhatsApp
            </a>
          </div>

          <div className="mt-10 grid gap-3 text-sm text-coffee sm:grid-cols-3">
            <span className="border-l-2 border-caramel pl-3">Medidas personalizadas</span>
            <span className="border-l-2 border-caramel pl-3">Acabamento estofado</span>
            <span className="border-l-2 border-caramel pl-3">Orçamento pelo WhatsApp</span>
          </div>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-[#eadfce] bg-porcelain shadow-[0_24px_60px_rgba(43,33,24,0.10)]">
          <img
            src="/images/hero/quarto-cama-cabeceira-ilustrativa.jpg"
            alt="Quarto ilustrativo com cama estofada e cabeceira personalizada"
            width="1536"
            height="1024"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <span className="absolute bottom-4 right-4 rounded-md bg-cream/95 px-3 py-2 text-xs font-semibold uppercase text-coffee shadow-sm">
            Imagem ilustrativa
          </span>
        </div>
      </div>
    </section>
  );
}
