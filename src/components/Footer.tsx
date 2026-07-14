import { BrandLogo } from "./BrandLogo";
import { siteConfig } from "../data/siteConfig";

export function Footer() {
  return (
    <footer className="bg-coffee text-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12"><div className="grid gap-12 border-b border-cream/20 pb-14 md:grid-cols-3"><div><BrandLogo inverted /><p className="mt-6 max-w-xs text-sm leading-6 text-linen">Camas, cabeceiras e estofados personalizados para ambientes com mais identidade.</p></div><div><p className="editorial-label text-caramel">Navegação</p><div className="mt-5 grid gap-3 text-sm text-linen"><a href="#projetos">Projetos</a><a href="#categorias">Camas e cabeceiras</a><a href="#sob-medida">Sob medida</a><a href="#sobre">Sobre</a></div></div><div><p className="editorial-label text-caramel">Contato</p><div className="mt-5 space-y-3 text-sm text-linen"><p>{siteConfig.whatsappDisplay}</p><p>{siteConfig.email}</p><p>{siteConfig.serviceRegion}</p></div></div></div><div className="flex flex-col gap-3 pt-6 text-[0.62rem] uppercase tracking-[0.13em] text-linen/70 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Aconche Decor</p><p>Peças sob medida · Grande São Paulo</p></div></div>
    </footer>
  );
}
