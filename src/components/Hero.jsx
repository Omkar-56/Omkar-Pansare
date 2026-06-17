/* ─── Word-by-word animated reveal ─── */
function HeroName({ text }) {
  const words = text.split(" ");
  return (
    <span>
      {words.map((word, i) => (
        <span
          key={i}
          className="word-reveal"
          style={{ animationDelay: `${0.2 + i * 0.13}s`, marginRight: "0.3em" }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 pt-24 pb-16 max-w-5xl mx-auto"
    >
      {/* Left: text */}
      <div className="flex-1">
        <div className="animate-fade-up" style={{ animationDelay: "0.05s" }}>
          <span className="inline-flex items-center gap-2 text-sm font-body text-espresso/50 mb-8 tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-sage animate-breathe inline-block" />
            Available for work
          </span>
        </div>

        <h1 className="font-display text-6xl md:text-7xl font-light text-espresso leading-[1.05] mb-8">
          <HeroName text="Hi, I'm" />
          <br />
          <span className="italic text-terracotta">
            <HeroName text="Omkar Pansare" />
          </span>
        </h1>

        <p
          className="font-body text-xl text-espresso/60 font-light max-w-md leading-relaxed word-reveal"
          style={{ animationDelay: "0.75s" }}
        >
          I build thoughtful digital experiences — clean code, warm interfaces, real craft.
        </p>

        <div
          className="mt-12 flex items-center gap-6 word-reveal"
          style={{ animationDelay: "0.95s" }}
        >
          <a
            href="#projects"
            className="bg-espresso text-cream font-body text-sm font-medium px-7 py-3.5 rounded-full hover:bg-terracotta transition-colors duration-300"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="text-espresso font-body text-sm font-medium underline underline-offset-4 decoration-sand-dark hover:decoration-terracotta transition-colors duration-300"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Right: photo */}
      <div
        className="hidden md:flex flex-shrink-0 ml-16 word-reveal"
        style={{ animationDelay: "0.4s" }}
      >
        <div className="relative">
          {/* Decorative ring */}
          <div className="absolute inset-0 rounded-full border-2 border-terracotta/20 scale-110" />
          {/* Warm blob behind photo */}
          <div className="absolute -inset-3 rounded-full bg-sand -z-10" />

          {/* 
            ── TO REPLACE YOUR PHOTO ──
            1. Add your photo to public/images/ (e.g. photo.jpg)
            2. Change src below to "/images/photo.jpg"
          */}
          <img
            src="/images/pfp.jpeg"
            alt="Omkar Pansare"
            className="w-64 h-64 rounded-full object-cover object-center ring-4 ring-sand"
          />

          {/* Floating badge */}
          <div className="absolute -bottom-2 -right-2 bg-espresso text-cream text-xs font-body rounded-full px-4 py-2 shadow-md">
            Open to work ✦
          </div>
        </div>
      </div>
    </section>
  );
}
