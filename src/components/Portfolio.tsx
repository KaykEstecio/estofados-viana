import { portfolioItems } from "../data/portfolio";
import { getWhatsAppLink } from "../utils/whatsapp";

export function Portfolio() {
  return (
    <section id="projetos" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
            Inspirações
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Referências para camas e cabeceiras sob medida
          </h2>
          <p className="mt-4 leading-7 text-coffee">
            Estas imagens são ilustrativas e ajudam a orientar a conversa inicial.
            Os projetos reais serão inseridos após o envio das fotos da empresa.
          </p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-lg border border-[#eadfce] bg-porcelain shadow-sm"
            >
              <div className="relative h-72 overflow-hidden bg-[#e8ded2]">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-md bg-cream/95 px-3 py-2 text-xs font-semibold uppercase text-coffee">
                  Imagem ilustrativa
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-caramel">
                  {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-coffee">{item.description}</p>
                <p className="mt-5 border-l-2 border-caramel bg-cream p-4 text-sm leading-6 text-coffee">
                  {item.highlight}
                </p>
                <a
                  href={getWhatsAppLink(`Olá, gostaria de solicitar um orçamento inspirado no projeto ${item.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-md bg-coffee px-5 py-3 font-semibold text-porcelain transition hover:bg-ink"
                >
                  Quero um orçamento parecido
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-[#eadfce] bg-porcelain p-6 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-xl font-semibold text-ink">
              Gostou de algum estilo?
            </h3>
            <p className="mt-2 leading-7 text-coffee">
              Envie a referência pelo WhatsApp e conte se busca cama,
              cabeceira, recamier, puff ou outro estofado personalizado.
            </p>
          </div>
          <a
            href={getWhatsAppLink("Olá, vi os projetos do portfólio e gostaria de solicitar um orçamento. Posso enviar uma referência e medidas aproximadas?")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex shrink-0 rounded-md bg-coffee px-5 py-3 font-semibold text-porcelain transition hover:bg-ink sm:mt-0"
          >
            Enviar referência
          </a>
        </div>
      </div>
    </section>
  );
}
