import { categories } from "../data/categories";
import { getWhatsAppLink } from "../utils/whatsapp";

export function Categories() {
  return (
    <section id="categorias" className="bg-porcelain py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
              Opções de projeto
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Camas, cabeceiras e estofados para o seu quarto
            </h2>
          </div>
          <p className="max-w-md leading-7 text-coffee">
            Conheça possibilidades iniciais e consulte a disponibilidade de cada
            peça durante o atendimento pelo WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-lg border border-[#eadfce] bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(43,33,24,0.10)]"
            >
              <div className="relative h-44 overflow-hidden bg-[#e8ded2]">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 left-3 rounded-md bg-porcelain/90 px-3 py-2 text-xs font-semibold uppercase text-coffee">
                  Imagem ilustrativa
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-ink">
                  {category.title}
                </h3>
                <p className="mt-3 min-h-24 leading-7 text-coffee">
                  {category.description}
                </p>
                <a
                  href={getWhatsAppLink(`Olá, gostaria de solicitar um orçamento para ${category.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex font-semibold text-coffee transition group-hover:text-ink"
                >
                  Pedir orçamento dessa peça
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
