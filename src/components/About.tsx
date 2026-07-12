import { siteConfig } from "../data/siteConfig";

export function About() {
  return (
    <section id="sobre" className="bg-cream py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
            Sobre
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Sobre a {siteConfig.businessName}
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-coffee">
          <p>
            A {siteConfig.businessName} é uma fábrica de camas, cabeceiras e estofados personalizados para
            quartos que precisam de peças sob medida, proporcionais ao espaço e
            alinhadas ao estilo do ambiente.
          </p>
          <p>
            O atendimento considera a ideia do cliente, as medidas disponíveis e
            os detalhes desejados para orientar uma solução clara antes da
            produção.
          </p>
          <p className="border-l-2 border-caramel bg-porcelain p-5 text-base leading-7">
            Atendimento na {siteConfig.serviceRegion}, {siteConfig.openingHours.toLowerCase()}. O prazo é
            {" "}{siteConfig.deliveryTime.toLowerCase()}. {siteConfig.deliveryInfo}.
          </p>
        </div>
      </div>
    </section>
  );
}
