import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { RouteEffects } from "./components/RouteEffects";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { AboutPage, ContactPage, CustomPage, HomePage, ModelsPage, NotFoundPage, WhatWeDoPage } from "./pages/SitePages";

function App() {
  return (
    <>
      <RouteEffects />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/o-que-fazemos" element={<WhatWeDoPage />} />
          <Route path="/modelos" element={<ModelsPage />} />
          <Route path="/sob-medida" element={<CustomPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
