const socialLinks = [
  { label: "GitHub", href: "https://github.com/Omkar-56" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/omkar-pansare-3b8a91292" },
  // { label: "Twitter", href: "https://twitter.com/yourusername" },
  { label: "Instagram", href: "https://www.instagram.com/_omkarrrr____/" },
  { label: "Leetcode", href: "https://leetcode.com/u/Omkar55666/" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="reveal bg-espresso rounded-3xl px-10 py-16 md:py-20 text-center">
        <span className="text-xs font-body tracking-widest text-cream/40 uppercase mb-6 block">
          Contact
        </span>
        <h2 className="font-display text-4xl md:text-6xl font-light text-cream leading-tight mb-6">
          Let's build something{" "}
          <em className="text-terracotta">together</em>
        </h2>
        <p className="font-body text-cream/55 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Whether it's a new project, a collaboration, or just a hello — I'd
          love to hear from you.
        </p>

        <a
          href="mailto:omkarpansare5566@gmail.com"
          className="inline-block bg-cream text-espresso font-body text-sm font-medium px-8 py-4 rounded-full hover:bg-terracotta hover:text-cream transition-colors duration-300"
        >
          Say hello →
        </a>

        <div className="mt-12 flex justify-center gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-cream/40 hover:text-cream transition-colors duration-200 nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
