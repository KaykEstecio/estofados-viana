import { siteConfig } from "../data/siteConfig";

type BrandLogoProps = {
  textClassName?: string;
};

export function BrandLogo({ textClassName = "text-ink" }: BrandLogoProps) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-linen p-1.5 shadow-sm">
        <img
          src="/images/logo/aconche-decor-mark.png"
          alt=""
          width="40"
          height="40"
          className="size-full object-contain"
        />
      </span>
      <span className={`min-w-0 leading-none ${textClassName}`}>
        <span className="block truncate text-base font-semibold tracking-wide sm:text-lg">
          {siteConfig.businessName}
        </span>
        <span className="mt-1 hidden text-[0.62rem] font-medium uppercase tracking-[0.16em] opacity-75 sm:block">
          Camas e cabeceiras
        </span>
      </span>
    </span>
  );
}
