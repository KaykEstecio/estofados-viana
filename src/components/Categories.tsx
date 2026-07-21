import { FiArrowRight } from "react-icons/fi";
import { categories } from "../data/categories";

type CategoriesProps = { asPage?: boolean };

export function Categories({ asPage = false }: CategoriesProps) {
  const Heading = asPage ? "h1" : "h2";

  return (
    <section id="o-que-fazemos" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        <div>
          <p className="editorial-label text-caramel">O que fazemos</p>
          <Heading className="font-display mt-4 max-w-xl text-5xl font-medium leading-[0.95] tracking-[-0.03em] sm:text-6xl">Peças pensadas para caber na sua rotina.</Heading>
          <p className="mt-6 max-w-xl text-sm leading-7 text-coffee">Criamos camas, cabeceiras, painéis e outros estofados sob medida. Cada peça é desenvolvida para o espaço, o estilo e a necessidade de cada cliente.</p>
          <div className="mt-12 border-t border-line">
            {categories.map((category, index) => <div key={category.title} className="grid grid-cols-[40px_1fr_auto] items-start gap-3 border-b border-line py-5"><span className="editorial-label pt-1 text-caramel">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-display text-2xl font-medium">{category.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-coffee">{category.description}</p></div><FiArrowRight className="mt-2 text-coffee" aria-hidden="true" /></div>)}
          </div>
        </div>
        <div className="grid min-h-[660px] grid-cols-5 grid-rows-6 gap-3 lg:sticky lg:top-28 lg:h-[720px]">
          <figure className="image-wash col-span-5 row-span-4"><img src={categories[0].image} alt={categories[0].imageAlt} className="h-full w-full object-cover" /><figcaption className="absolute bottom-3 right-3 z-10 bg-cream/90 px-3 py-2 text-[0.56rem] font-semibold uppercase tracking-[0.12em] text-ink">Detalhe do projeto</figcaption></figure>
          <figure className="image-wash col-span-3 row-span-2"><img src={categories[1].image} alt={categories[1].imageAlt} className="h-full w-full object-cover" /><figcaption className="absolute bottom-3 left-3 z-10 bg-cream/90 px-2 py-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.1em] text-ink">Detalhe do projeto</figcaption></figure>
          <figure className="image-wash col-span-2 row-span-2"><img src={categories[4].image} alt={categories[4].imageAlt} className="h-full w-full object-cover" /><figcaption className="absolute bottom-3 right-3 z-10 bg-cream/90 px-2 py-1.5 text-[0.52rem] font-semibold uppercase tracking-[0.1em] text-ink">Detalhe do projeto</figcaption></figure>
        </div>
      </div>
    </section>
  );
}
