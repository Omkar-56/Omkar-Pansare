export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">

        <div className="reveal">
          <span className="text-xs font-body tracking-widest text-terracotta uppercase mb-4 block">
            About me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-espresso leading-tight mb-6">
            A developer who cares about the <em>details</em>
          </h2>
        </div>

        <div className="reveal space-y-5 font-body text-espresso/65 leading-relaxed text-[1.05rem]">
          <p>
            Hey — I'm Omkar Pansare, a developer based in Pune. I love the
            intersection of engineering and design: the place where good code meets
            something that actually feels good to use.
          </p>
          <p>
            I've been building for the web for 2 years, working across PERN stack. When I'm not coding, you'll find me gaming or playing badminton.
          </p>
          <p>
            I believe software should feel warm and human. Every project is a chance
            to get that a little more right.
          </p>

          <div className="pt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-terracotta hover:gap-3 transition-all duration-200"
            >
              Download résumé
              <span className="text-lg">↗</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
