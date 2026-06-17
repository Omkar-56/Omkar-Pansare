import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useReveal();

  return (
    <div className="relative">
      <Nav />
      <Hero />
      <div className="border-t border-sand mx-6" />
      <About />
      <div className="border-t border-sand mx-6" />
      <Projects />
      <div className="border-t border-sand mx-6" />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
