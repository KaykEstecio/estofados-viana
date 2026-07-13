import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer className="bg-coffee pb-24 pt-8 text-porcelain sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <BrandLogo textClassName="text-porcelain" />
        <p>Camas, cabeceiras e estofados sob medida.</p>
      </div>
    </footer>
  );
}
