import { services } from "../data/services";

export function Services() {
  return (
    <section id="servicos" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
            Serviços
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Soluções estofadas para quartos personalizados
          </h2>
          <p className="mt-4 leading-7 text-coffee">
            Catálogo inicial sujeito à confirmação. Consulte pelo WhatsApp quais
            peças estão disponíveis para orçamento.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-line bg-porcelain p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 leading-7 text-coffee">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
