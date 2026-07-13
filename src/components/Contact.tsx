import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight, FiMail, FiPhone } from "react-icons/fi";
import { siteConfig } from "../data/siteConfig";
import { getWhatsAppLink } from "../utils/whatsapp";

export function Contact() {
  const contacts = [
    { label: "WhatsApp", value: siteConfig.whatsappDisplay, href: getWhatsAppLink(), icon: <FaWhatsapp /> },
    { label: "Comercial", value: siteConfig.commercialPhoneDisplay, href: `tel:+${siteConfig.commercialPhone}`, icon: <FiPhone /> },
    { label: "Instagram", value: siteConfig.instagramHandle, href: siteConfig.instagramUrl, icon: <FaInstagram /> },
    { label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: <FiMail /> },
  ];
  return (
    <section id="contato" className="bg-porcelain py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]"><div><p className="editorial-label text-caramel">Vamos conversar</p><h2 className="font-display mt-4 max-w-lg text-5xl font-medium leading-[0.92] sm:text-7xl">Seu próximo projeto pode começar por uma mensagem.</h2><p className="mt-8 max-w-md text-sm leading-7 text-coffee">Envie uma foto do ambiente ou uma referência do que procura. Retornamos durante o horário de atendimento.</p><a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="mt-10 inline-flex min-h-12 items-center gap-3 bg-caramel px-6 text-sm font-semibold text-white"><FaWhatsapp aria-hidden="true" /> Solicitar orçamento</a></div><div className="border-t border-line">{contacts.map((contact) => <a key={contact.label} href={contact.href} target={contact.href.startsWith("http") ? "_blank" : undefined} rel={contact.href.startsWith("http") ? "noreferrer" : undefined} className="group grid grid-cols-[28px_1fr_auto] items-center gap-4 border-b border-line py-6"><span className="text-caramel" aria-hidden="true">{contact.icon}</span><span><span className="editorial-label block text-coffee">{contact.label}</span><span className="mt-1 block break-all font-display text-xl sm:text-2xl">{contact.value}</span></span><FiArrowUpRight className="text-coffee transition group-hover:text-caramel" aria-hidden="true" /></a>)}<div className="grid grid-cols-2 gap-5 border-b border-line py-6"><div><p className="editorial-label text-coffee">Região</p><p className="mt-2 text-sm">{siteConfig.serviceRegion}</p></div><div><p className="editorial-label text-coffee">Horário</p><p className="mt-2 text-sm">{siteConfig.openingHours}</p></div></div></div></div>
      </div>
    </section>
  );
}
