import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { About } from "../components/About";
import { Categories } from "../components/Categories";
import { Contact } from "../components/Contact";
import { CustomProjects } from "../components/CustomProjects";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Process } from "../components/Process";
import { ProductCategoryPage } from "../components/ProductCategoryPage";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";
import { portfolioItems } from "../data/portfolio";

const bedItems = portfolioItems.filter((item) => item.category === "Camas");
const headboardItems = portfolioItems.filter((item) => item.category === "Cabeceiras");
const upholsteryItems = portfolioItems.filter((item) => item.category === "Outros estofados");

export function HomePage() {
  return <><Hero /><FeaturedProjects /></>;
}

export function WhatWeDoPage() {
  return <><Categories asPage /><Services /></>;
}

export function BedsPage() {
  return <ProductCategoryPage label="Camas sob medida" title="Camas pensadas para o seu espaço." description="Escolha uma referência e personalize medidas, tecido, cor e acabamento para criar uma cama coerente com o seu quarto." heroImage="/images/real/projeto-quarto-cabeceira-curva-sem-icone.jpeg" heroAlt="Projeto realizado de cama com cabeceira curva iluminada" items={bedItems} details={["Medidas adaptadas ao quarto.", "Tecidos e cores escolhidos com você.", "Base e cabeceira podem formar um único conjunto."]} />;
}

export function HeadboardsPage() {
  return <ProductCategoryPage label="Cabeceiras e painéis" title="Cabeceiras que transformam a parede." description="Modelos lineares, modulares ou com desenhos personalizados para acompanhar a proporção e a identidade do ambiente." heroImage="/images/real/projeto-painel-espelhos.jpeg" heroAlt="Painel estofado vertical instalado entre espelhos" items={headboardItems} details={["Altura e largura definidas para a parede.", "Desenhos modulares, verticais ou geométricos.", "Integração possível com iluminação e marcenaria."]} />;
}

export function OttomansPage() {
  return <ProductCategoryPage label="Puffs, banquetas e estofados" title="Apoio, conforto e acabamento sob medida." description="Puffs, banquetas, recamiers e outros estofados desenvolvidos para complementar quartos, closets, salas e diferentes ambientes." heroImage="/images/real/sofa-estofado-cinza.jpeg" heroAlt="Estofado cinza com acabamento macio em ambiente residencial" items={upholsteryItems} details={["Dimensões adequadas ao uso e ao espaço.", "Opções de tecidos, cores e densidades.", "Desenho alinhado aos demais estofados do ambiente."]} />;
}

export function ModelsPage() {
  return <Portfolio asPage />;
}

export function ProjectsPage() {
  return <Projects asPage />;
}

export function CustomPage() {
  return <><CustomProjects asPage /><Process /></>;
}

export function AboutPage() {
  return <About asPage />;
}

export function ContactPage() {
  return <Contact asPage />;
}

export function NotFoundPage() {
  return (
    <section className="flex min-h-[60vh] items-center bg-porcelain py-20">
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <p className="editorial-label text-caramel">Página não encontrada</p>
        <h1 className="font-display mt-4 max-w-2xl text-5xl font-medium leading-[0.94] sm:text-7xl">Este endereço não existe.</h1>
        <Link to="/" className="mt-9 inline-flex items-center gap-2 border-b border-ink pb-2 text-sm font-semibold"><FiArrowLeft aria-hidden="true" /> Voltar ao início</Link>
      </div>
    </section>
  );
}
