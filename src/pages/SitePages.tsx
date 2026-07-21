import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { About } from "../components/About";
import { Categories } from "../components/Categories";
import { Contact } from "../components/Contact";
import { CustomProjects } from "../components/CustomProjects";
import { Hero } from "../components/Hero";
import { Portfolio } from "../components/Portfolio";
import { Process } from "../components/Process";
import { Services } from "../components/Services";

export function HomePage() {
  return <><Hero /><Categories /><Portfolio /><Process /><CustomProjects /><Services /><About /><Contact /></>;
}

export function WhatWeDoPage() {
  return <><Categories asPage /><Services /></>;
}

export function ModelsPage() {
  return <Portfolio asPage />;
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
