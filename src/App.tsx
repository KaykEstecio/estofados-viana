import { Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RouteEffects } from "./components/RouteEffects";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { AboutPage, BedsPage, ContactPage, CustomPage, HeadboardsPage, HomePage, ModelsPage, NotFoundPage, OttomansPage, ProjectsPage, QualityPage, WhatWeDoPage } from "./pages/SitePages";

function App() {
  const location = useLocation();

  return (
    <>
      <RouteEffects />
      <Header />
      <main>
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-que-fazemos" element={<WhatWeDoPage />} />
            <Route path="/modelos" element={<ModelsPage />} />
            <Route path="/camas" element={<BedsPage />} />
            <Route path="/cabeceiras" element={<HeadboardsPage />} />
            <Route path="/puffs-e-banquetas" element={<OttomansPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/qualidade" element={<QualityPage />} />
            <Route path="/sob-medida" element={<CustomPage />} />
            <Route path="/sobre" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
