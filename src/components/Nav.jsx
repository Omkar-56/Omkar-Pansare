import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrolledRef = useRef(false);

  useEffect(() => {
    const scroller = document.getElementById("scroll-container");
    let ticking = false;

    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = scroller ? scroller.scrollTop : window.scrollY;
          const isScrolled = scrollPos > 20;
          if (scrolledRef.current !== isScrolled) {
            scrolledRef.current = isScrolled;
            setScrolled(isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const target = scroller || window;
    target.addEventListener("scroll", handler, { passive: true });

    return () => {
      target.removeEventListener("scroll", handler);
    };
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fef5da] border-b border-[#2c2e35]/10 shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Editorial Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero")}
          className="group flex items-center gap-2.5 text-[#2c2e35]"
        >
          <span className="w-8 h-8 rounded-sm bg-[#2c2e35] text-[#fef5da] flex items-center justify-center font-serif text-sm font-bold tracking-wider group-hover:bg-[#fa575e] transition-colors">
            OP
          </span>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#2c2e35]">
            Omkar
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 lg:gap-8 text-xs font-body font-semibold uppercase tracking-wider text-[#2c2e35]/75">
            <li>
              <a
                href="#what-i-do"
                onClick={(e) => handleNavClick(e, "what-i-do")}
                className="hover:text-[#fa575e] transition-colors"
              >
                What I Do
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="hover:text-[#fa575e] transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#other-things"
                onClick={(e) => handleNavClick(e, "other-things")}
                className="hover:text-[#fa575e] transition-colors"
              >
                Other Things
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="hover:text-[#fa575e] transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Minimalist Action CTA */}
          <a
            href="/Omkar_Pansare.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fa575e] hover:bg-[#e4464d] text-white font-body font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-sm shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-1.5"
          >
            <span>Resume</span>
            <span className="text-white text-xs">&rarr;</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2c2e35] hover:text-[#fa575e] transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fef5da] border-b border-[#2c2e35]/15 px-6 py-6 shadow-sm animate-fade-down">
          <ul className="flex flex-col gap-4 text-sm font-body font-semibold uppercase tracking-wider text-[#2c2e35]/85">
            <li>
              <a
                href="#what-i-do"
                onClick={(e) => handleNavClick(e, "what-i-do")}
                className="hover:text-[#fa575e] transition-colors block py-1"
              >
                What I Do
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="hover:text-[#fa575e] transition-colors block py-1"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#other-things"
                onClick={(e) => handleNavClick(e, "other-things")}
                className="hover:text-[#fa575e] transition-colors block py-1"
              >
                Other Things
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className="hover:text-[#fa575e] transition-colors block py-1"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="pt-4 mt-4 border-t border-[#2c2e35]/10">
            <a
              href="/Omkar_Pansare.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fa575e] hover:bg-[#e4464d] text-white font-body font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-sm shadow-xs block text-center"
            >
              Resume &rarr;
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
