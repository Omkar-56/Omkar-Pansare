import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  useReveal();

  return (
    <div className="relative">
bg-cream text-espresso       <Nav />
      <Hero />
      <div className="border-t border-sand-dark/30 max-w-5xl mx-auto px-6" />
      <About />
      <div className="border-t border-sand-dark/30 max-w-5xl mx-auto px-6" />
      <Projects />
      <div className="border-t border-sand-dark/30 max-w-5xl mx-auto px-6" />
      <Skills />
      <div className="border-t border-sand-dark/30 max-w-5xl mx-auto px-6" />
      <Contact />
    </div>
  );
}
