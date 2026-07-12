import { getWhatsAppLink } from "../utils/whatsapp";

const features = [
  "Medidas personalizadas",
  "Escolha de tecidos",
  "Acabamento profissional",
  "Design para quartos",
  "Conforto e elegância",
  "Atendimento pelo WhatsApp",
];

export function CustomProjects() {
  return (
    <section id="sob-medida" className="bg-porcelain py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
            Sob medida
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Projetos sob medida para o seu quarto
          </h2>
          <p className="mt-5 leading-8 text-coffee">
            Cada peça parte do espaço disponível, das medidas desejadas e da
            proposta do ambiente. Assim, camas, cabeceiras e estofados ganham
            proporção, conforto e acabamento coerentes com o quarto.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-md bg-coffee px-5 py-3 font-semibold text-porcelain transition hover:bg-ink"
          >
            Enviar ideia do projeto
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature}
              className="border border-[#eadfce] bg-cream p-6 font-semibold text-coffee shadow-sm"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
