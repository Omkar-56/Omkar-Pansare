import { useState } from "react";
import useReveal from "./hooks/useReveal";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WhatIDo from "./components/WhatIDo";
import Projects from "./components/Projects";
import OtherThings from "./components/OtherThings";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  useReveal([isLoading]);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div
        id="scroll-container"
        className="relative bg-paper text-ink w-full h-full overflow-y-auto overflow-x-hidden selection:bg-accent-rust selection:text-white"
      >
        <Nav />
        <Hero />
        <div className="border-t-2 border-ink/10 max-w-6xl mx-auto px-6" />
        <WhatIDo />
        <div className="border-t-2 border-ink/10 max-w-6xl mx-auto px-6" />
        <Projects />
        <div className="border-t-2 border-ink/10 max-w-6xl mx-auto px-6" />
        <OtherThings />
        <div className="border-t-2 border-ink/10 max-w-6xl mx-auto px-6" />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
