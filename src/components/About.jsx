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
            Hey — I'm Omkar Pansare, a full-stack developer based in Pune. I design and build complete web applications — REST APIs, database architecture, and server-side logic in Python and Node.js, paired with clean React frontends. PostgreSQL is my go-to for data, and I've kept my fundamentals sharp with 100+ problems solved on LeetCode.
          </p>
          <p>
            Currently open to full-time roles. If you're building something that needs a developer, I'd love to talk.
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
