import { siteConfig } from "../data/siteConfig";
import { getWhatsAppLink } from "../utils/whatsapp";

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
    <header className="sticky top-0 z-40 border-b border-[#eadfce] bg-[#fffdf9]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <a href="#inicio" className="min-w-0 text-base font-semibold text-ink sm:text-lg">
          {siteConfig.businessName}
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

        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-md bg-coffee px-4 py-2 text-sm font-semibold text-porcelain shadow-sm transition hover:bg-ink"
        >
          Solicitar orçamento
        </a>
      </div>

      <nav
        aria-label="Navegação principal mobile"
        className="grid grid-cols-4 border-t border-[#eadfce] px-3 py-3 text-center text-xs font-medium text-coffee sm:px-5 sm:text-sm lg:hidden"
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
