import { siteConfig } from "../data/siteConfig";
import { getWhatsAppLink } from "../utils/whatsapp";

export function Contact() {
  return (
    <section id="contato" className="bg-porcelain py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-caramel">
            Contato
          </p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Solicite seu orçamento
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-coffee">
            Fale pelo WhatsApp para explicar o que deseja produzir. Com uma
            referência e medidas aproximadas, o atendimento consegue entender
            melhor a peça ideal para o seu ambiente.
          </p>
          <ul className="mt-5 space-y-2 text-coffee">
            <li>• Foto ou referência do modelo desejado</li>
            <li>• Medidas aproximadas do ambiente</li>
            <li>• Tipo de peça: cama, cabeceira, recamier, puff ou estofado</li>
          </ul>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex rounded-md bg-coffee px-5 py-3 font-semibold text-porcelain transition hover:bg-ink"
          >
            Solicitar orçamento agora
          </a>
        </div>

        <div className="rounded-lg border border-line bg-cream p-6 shadow-sm sm:p-8">
          <dl className="space-y-5 text-coffee">
            <div>
              <dt className="font-semibold text-ink">Empresa</dt>
              <dd className="mt-1 break-words">{siteConfig.businessName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">WhatsApp</dt>
              <dd className="mt-1 break-words">
                <a className="underline decoration-caramel underline-offset-4" href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  {siteConfig.whatsappDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Telefone comercial</dt>
              <dd className="mt-1 break-words">
                <a className="underline decoration-caramel underline-offset-4" href={`tel:+${siteConfig.commercialPhone}`}>
                  {siteConfig.commercialPhoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Instagram</dt>
              <dd className="mt-1 break-words">
                <a className="underline decoration-caramel underline-offset-4" href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {siteConfig.instagramHandle}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">E-mail</dt>
              <dd className="mt-1 break-words">
                <a className="underline decoration-caramel underline-offset-4" href={`mailto:${siteConfig.email}`}>
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Região</dt>
              <dd className="mt-1 break-words">{siteConfig.serviceRegion}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink">Horário</dt>
              <dd className="mt-1 break-words">{siteConfig.openingHours}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
