import { Navigate, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RouteEffects } from "./components/RouteEffects";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { AboutPage, BedsPage, ContactPage, HeadboardsPage, HomePage, ModelsPage, NotFoundPage, OttomansPage, ProjectsPage, QualityPage } from "./pages/SitePages";

function App() {
  return (
    <>
      <RouteEffects />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modelos" element={<ModelsPage />} />
          <Route path="/camas" element={<BedsPage />} />
          <Route path="/cabeceiras" element={<HeadboardsPage />} />
          <Route path="/puffs-e-banquetas" element={<OttomansPage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
          <Route path="/qualidade" element={<QualityPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/o-que-fazemos" element={<Navigate to="/modelos" replace />} />
          <Route path="/sob-medida" element={<Navigate to="/qualidade" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
