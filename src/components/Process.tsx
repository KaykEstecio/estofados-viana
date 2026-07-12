import { getWhatsAppLink } from "../utils/whatsapp";

const processSteps = [
  "Você envia uma referência ou ideia pelo WhatsApp",
  "A equipe entende o modelo desejado",
  "São avaliados medidas, acabamento e detalhes do projeto",
  "O orçamento é enviado com as informações combinadas",
  "Após aprovação, a peça é produzida sob medida",
  "Entrega ou instalação são combinadas conforme o atendimento",
];

const quoteItems = [
  "Referência do modelo desejado",
  "Medidas aproximadas do espaço",
  "Ideia de tecido, cor ou acabamento",
];

export function Process() {
  return (
    <section id="orcamento" className="bg-porcelain py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
            Orçamento
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Como funciona o orçamento
          </h2>
          <p className="mt-4 leading-7 text-coffee">
            Para começar, envie uma referência e algumas informações iniciais.
            A partir disso, o atendimento segue pelo WhatsApp com os detalhes do
            projeto.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {quoteItems.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-line bg-cream px-4 py-3 text-sm font-semibold text-coffee shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

        <ol className="mt-8 grid gap-4 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 rounded-lg border border-line bg-cream p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coffee text-sm font-semibold text-porcelain">
                {index + 1}
              </span>
              <p className="pt-1 leading-7 text-coffee">{step}</p>
            </li>
          ))}
        </ol>

        <a
          href={getWhatsAppLink("Olá, gostaria de solicitar um orçamento para um projeto sob medida. Posso enviar uma referência, medidas aproximadas e detalhes do acabamento?")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded-md bg-coffee px-5 py-3 font-semibold text-porcelain transition hover:bg-ink"
        >
          Começar orçamento no WhatsApp
        </a>
      </div>
    </section>
  );
}
