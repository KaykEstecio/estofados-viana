type BrandLogoProps = { inverted?: boolean };

export function BrandLogo({ inverted = false }: BrandLogoProps) {
  return (
    <a href="#inicio" aria-label="Aconche Decor — início" className="inline-flex shrink-0 items-center">
      <img
        src="/images/logo/aconche-logo-horizontal.png"
        alt=""
        aria-hidden="true"
        className={inverted ? "h-12 w-auto brightness-0 invert" : "h-10 w-auto dark:brightness-0 dark:invert sm:h-11"}
      />
    </a>
  );
}
