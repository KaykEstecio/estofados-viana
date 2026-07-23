import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projectItems } from "../data/projects";

const [mainProject, detailProject] = [projectItems[2], projectItems[0]];

export function FeaturedProjects() {
  return (
    <section aria-labelledby="projetos-inicio" className="border-b border-line bg-porcelain py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-10 grid gap-6 border-b border-line pb-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="editorial-label text-caramel">Projetos reais</p>
            <h2 id="projetos-inicio" className="font-display mt-3 max-w-2xl text-4xl font-medium leading-[0.94] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              O acabamento transforma a leitura do ambiente.
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-coffee lg:justify-self-end">
            Veja de perto proporções, encontros e detalhes já executados pela Aconche Decor. As referências de modelos ficam reunidas no catálogo.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <Link to="/projetos" className="motion-card group relative min-h-[520px] overflow-hidden bg-line sm:min-h-[640px] lg:min-h-[720px]">
            <img
              src={mainProject.image}
              alt={mainProject.imageAlt}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-transparent px-5 pb-6 pt-24 text-white sm:px-8 sm:pb-8">
              <span className="editorial-label block text-white/75">{mainProject.category}</span>
              <span className="font-display mt-2 block text-3xl sm:text-4xl">{mainProject.title}</span>
            </span>
          </Link>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-[auto_1fr]">
            <div className="flex flex-col justify-between bg-coffee p-7 text-cream sm:p-9">
              <div>
                <p className="editorial-label text-caramel">Portfólio Aconche</p>
                <p className="font-display mt-4 text-3xl leading-tight sm:text-4xl">Soluções desenhadas para a parede, a cama e o ambiente.</p>
              </div>
              <Link to="/projetos" className="arrow-link mt-10 inline-flex w-fit items-center gap-2 border-b border-cream pb-2 text-sm font-semibold">
                Ver projetos realizados <FiArrowUpRight className="link-arrow-motion" aria-hidden="true" />
              </Link>
            </div>

            <Link to="/projetos" className="motion-card group relative min-h-[360px] overflow-hidden bg-line sm:min-h-[440px] lg:min-h-0">
              <img
                src={detailProject.image}
                alt={detailProject.imageAlt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-20 text-white">
                <span className="editorial-label block text-white/75">{detailProject.category}</span>
                <span className="font-display mt-1 block text-2xl">{detailProject.title}</span>
              </span>
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-coffee">Quer explorar estilos, formatos e acabamentos antes de decidir?</p>
          <Link to="/modelos" className="arrow-link inline-flex w-fit items-center gap-2 border-b border-ink pb-2 text-sm font-semibold">
            Conhecer todos os modelos <FiArrowUpRight className="link-arrow-motion" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
