import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";
import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../utils/whatsapp";

const links = [
  ["Início", "#inicio"], ["Projetos", "#projetos"], ["Camas", "#categorias"],
  ["Sob Medida", "#sob-medida"], ["Sobre", "#sobre"], ["Contato", "#contato"],
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:h-[76px] sm:px-8 lg:px-12">
        <BrandLogo />
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-coffee transition-colors hover:text-caramel">{label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="hidden min-h-10 items-center gap-2 bg-caramel px-4 text-xs font-semibold text-white xl:inline-flex">
            <FaWhatsapp aria-hidden="true" /> Solicitar orçamento
          </a>
        </div>
      </div>
      <nav aria-label="Navegação principal em telas pequenas" className="mobile-nav flex gap-6 overflow-x-auto border-t border-line px-5 py-2.5 lg:hidden">
        {links.map(([label, href]) => <a key={href} href={href} className="whitespace-nowrap text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-coffee">{label}</a>)}
      </nav>
    </header>
  );
}
