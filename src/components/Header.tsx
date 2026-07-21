import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";
import { FaWhatsapp } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getWhatsAppLink } from "../utils/whatsapp";

const links = [
  ["Início", "/"], ["Camas", "/camas"], ["Cabeceiras", "/cabeceiras"],
  ["Puffs & Banquetas", "/puffs-e-banquetas"], ["Projetos", "/projetos"],
  ["Qualidade", "/qualidade"], ["Contato", "/contato"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:h-[76px] sm:px-8 lg:px-12">
        <BrandLogo />
        <nav aria-label="Navegação principal" className="hidden items-center gap-4 xl:flex xl:gap-5">
          {links.map(([label, href]) => <NavLink key={href} to={href} end={href === "/"} className={({ isActive }) => `border-b pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] transition-colors hover:text-caramel ${isActive ? "border-caramel text-caramel" : "border-transparent text-coffee"}`}>{label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="hidden min-h-10 items-center gap-2 bg-caramel px-4 text-xs font-semibold text-white xl:inline-flex">
            <FaWhatsapp aria-hidden="true" /> Solicitar orçamento
          </a>
          <button type="button" onClick={() => setMenuOpen(true)} aria-expanded={menuOpen} aria-controls="menu-mobile" aria-label="Abrir menu" className="grid size-10 place-items-center border border-line text-xl text-ink xl:hidden">
            <FiMenu aria-hidden="true" />
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div id="menu-mobile" className="fixed inset-0 z-50 flex min-h-dvh flex-col bg-cream px-5 py-4 xl:hidden">
          <div className="flex items-center justify-between">
            <BrandLogo />
            <button type="button" onClick={() => setMenuOpen(false)} aria-label="Fechar menu" className="grid size-11 place-items-center text-3xl text-ink"><FiX aria-hidden="true" /></button>
          </div>
          <nav aria-label="Navegação principal em telas pequenas" className="flex flex-1 flex-col items-center justify-center gap-7 py-8">
            {links.map(([label, href]) => <NavLink key={href} to={href} end={href === "/"} onClick={() => setMenuOpen(false)} className={({ isActive }) => `font-display text-center text-3xl tracking-[0.04em] transition-colors ${isActive ? "text-caramel" : "text-ink"}`}>{label}</NavLink>)}
          </nav>
          <a href={getWhatsAppLink()} target="_blank" rel="noreferrer" className="inline-flex min-h-14 items-center justify-center gap-2 bg-caramel px-5 text-sm font-semibold uppercase tracking-[0.08em] text-white"><FaWhatsapp aria-hidden="true" /> Solicitar orçamento</a>
        </div>
      ) : null}
    </header>
  );
}
