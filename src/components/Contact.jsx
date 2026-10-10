const socialLinks = [
  { label: "GitHub", href: "https://github.com/Omkar-56" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omkar-pansare-3b8a91292" },
  { label: "Instagram", href: "https://www.instagram.com/_omkarrrr____/" },
  { label: "Leetcode", href: "https://leetcode.com/u/Omkar55666/" },
];

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto py-12 md:py-16">
      <div className="w-full">
        <div className="reveal bg-espresso text-cream rounded-3xl px-8 py-12 md:py-16 text-center shadow-xl">
          <span className="text-xs font-body tracking-widest text-terracotta uppercase mb-3 block font-medium">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-light text-cream leading-tight mb-4">
            Let's build something <em className="italic text-terracotta">together</em>
          </h2>
          <p className="font-body text-cream/60 text-base mb-8 max-w-md mx-auto leading-relaxed">
            Whether it's a new full-time role, a project collaboration, or just a hello — I'd love to hear from you.
          </p>

          <a
            href="mailto:omkarpansare5566@gmail.com"
            className="inline-block bg-cream text-espresso font-body text-sm font-medium px-8 py-3.5 rounded-full hover:bg-terracotta hover:text-cream transition-colors duration-300 shadow-sm"
          >
            Say hello &rarr;
          </a>

          <div className="mt-10 flex justify-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-cream/45 hover:text-cream transition-colors duration-200 nav-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Footer anchored within the view */}
        <footer className="pt-8 flex items-center justify-between text-xs font-body text-espresso/40">
          <span>&copy; {new Date().getFullYear()} OmkarPansare</span>
          <span>Built with React &amp; Tailwind CSS</span>
        </footer>
      </div>
    </section>
  );
}
