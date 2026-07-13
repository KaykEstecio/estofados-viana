import { About } from "./components/About";
import { Categories } from "./components/Categories";
import { Contact } from "./components/Contact";
import { CustomProjects } from "./components/CustomProjects";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Process />
        <Categories />
        <CustomProjects />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
