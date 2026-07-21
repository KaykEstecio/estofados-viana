import { FaWhatsapp } from "react-icons/fa";
import { getWhatsAppLink } from "../utils/whatsapp";
import { projectItems } from "../data/projects";

type ProjectsProps = { asPage?: boolean };

export function Projects({ asPage = false }: ProjectsProps) {
  const Heading = asPage ? "h1" : "h2";

  return (
    <section className="bg-porcelain py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-7 border-b border-line pb-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="editorial-label text-caramel">Projetos realizados</p>
            <Heading className="font-display mt-3 max-w-2xl text-4xl font-medium leading-[0.94] tracking-[-0.035em] sm:text-5xl lg:text-6xl">Trabalhos que já ganharam forma.</Heading>
          </div>
          <p className="max-w-lg text-sm leading-7 text-coffee lg:justify-self-end">Aqui ficam os ambientes e peças já executados pela Aconche Decor. Esta seleção será ampliada conforme novos projetos forem concluídos.</p>
        </div>
        <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-3">
          {projectItems.map((project, index) => (
            <article key={project.id} className="motion-card bg-porcelain py-8 md:px-6 md:first:pl-0 md:last:pr-0">
              <div className="image-wash aspect-[4/5] overflow-hidden"><img src={project.image} alt={project.imageAlt} loading="lazy" className="h-full w-full object-cover" /></div>
              <p className="editorial-label mt-5 text-caramel">{String(index + 1).padStart(2, "0")} / {project.category}</p>
              <h2 className="font-display mt-2 text-3xl font-medium">{project.title}</h2>
              <p className="mt-4 text-sm leading-6 text-coffee">{project.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-4 flex flex-col justify-between gap-5 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-2xl">Gostou de alguma solução?</p>
          <a href={getWhatsAppLink("Olá, vi os projetos realizados e gostaria de conversar sobre uma peça para o meu ambiente.")} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-3 bg-caramel px-6 text-sm font-semibold text-white"><FaWhatsapp aria-hidden="true" /> Solicitar orçamento</a>
        </div>
      </div>
    </section>
  );
}
