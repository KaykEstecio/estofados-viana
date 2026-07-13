import { siteConfig } from "../data/siteConfig";
import { getWhatsAppLink } from "../utils/whatsapp";
import { BrandLogo } from "./BrandLogo";
import { ThemeToggle } from "./ThemeToggle";

const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Camas", href: "#categorias" },
  { label: "Sob Medida", href: "#sob-medida" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const mobileNavigationItems = navigationItems.filter((item) =>
  ["Projetos", "Sob Medida", "Sobre", "Contato"].includes(item.label),
);

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-porcelain/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#inicio" aria-label={`${siteConfig.businessName} — início`} className="min-w-0">
          <BrandLogo />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-sm font-medium text-coffee lg:flex"
        >
          {navigationItems.map((item) => (
            <a key={item.label} href={item.href} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-coffee px-3 py-2 text-xs font-semibold text-porcelain shadow-sm transition hover:bg-ink sm:px-4 sm:text-sm"
          >
            <span className="sm:hidden">Orçamento</span>
            <span className="hidden sm:inline">Solicitar orçamento</span>
          </a>
        </div>
      </div>

      <nav
        aria-label="Navegação principal mobile"
        className="grid grid-cols-4 border-t border-line px-3 py-3 text-center text-xs font-medium text-coffee sm:px-5 sm:text-sm lg:hidden"
      >
        {mobileNavigationItems.map((item) => (
          <a key={item.label} href={item.href} className="px-1 py-1">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
