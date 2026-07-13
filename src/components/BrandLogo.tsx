type BrandLogoProps = { inverted?: boolean };

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <a href="#inicio" aria-label="Aconche Decor — início" className="group inline-flex items-center gap-3">
      <span className={`grid h-9 w-9 place-items-center border ${inverted ? "border-white/30" : "border-line"}`}>
        <span className="font-display text-2xl leading-none text-caramel">A</span>
      </span>
      <span className="flex flex-col">
        <span className={`font-display text-[1.42rem] font-semibold leading-none tracking-[-0.02em] ${inverted ? "text-[#f7f0e6]" : "text-ink"}`}>
          Aconche Decor
        </span>
        <span className={`mt-1 text-[0.54rem] font-semibold uppercase tracking-[0.24em] ${inverted ? "text-[#d2c3b4]" : "text-coffee"}`}>
          Estofados sob medida
        </span>
      </span>
    </a>
  );
}
