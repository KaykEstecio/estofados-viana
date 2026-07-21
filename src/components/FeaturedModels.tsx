import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { portfolioItems } from "../data/portfolio";

const featuredModels = portfolioItems.slice(0, 5);

function getModelRoute(category: string) {
  return category === "Camas" ? "/camas" : "/cabeceiras";
}

export function FeaturedModels() {
  return (
    <section aria-labelledby="modelos-inicio" className="border-b border-line bg-porcelain py-12 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-7 flex items-end justify-between gap-6">
          <div>
            <p className="editorial-label text-caramel">Escolha uma referência</p>
            <h2 id="modelos-inicio" className="font-display mt-2 text-3xl font-medium sm:text-4xl">Modelos para começar a imaginar.</h2>
          </div>
          <Link to="/modelos" className="hidden shrink-0 items-center gap-2 border-b border-ink pb-2 text-sm font-semibold sm:inline-flex">Ver todos os modelos <FiArrowUpRight aria-hidden="true" /></Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-5">
          {featuredModels.map((model, index) => (
            <Link key={model.id} to={getModelRoute(model.category)} className={`group relative overflow-hidden bg-line ${index === 0 ? "col-span-2 md:col-span-1" : ""}`}>
              <img src={model.image} alt={model.imageAlt} className="aspect-[4/3] h-full min-h-[170px] w-full object-cover transition duration-700 group-hover:scale-[1.03] md:aspect-[3/4] md:min-h-[260px]" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-3 pb-3 pt-12 text-white">
                <span className="block text-[0.56rem] font-semibold uppercase tracking-[0.13em] text-white/75">{model.category}</span>
                <span className="font-display mt-1 block text-lg leading-tight">{model.title}</span>
              </span>
            </Link>
          ))}
        </div>
        <Link to="/modelos" className="mt-7 inline-flex items-center gap-2 border-b border-ink pb-2 text-sm font-semibold sm:hidden">Ver todos os modelos <FiArrowUpRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
