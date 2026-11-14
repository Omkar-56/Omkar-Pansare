/* Social Icons in minimalist dark ink style */
function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 1 0-1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

function LeetCodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.621 5.98 5.98 0 0 0 1.625 1.625 5.874 5.874 0 0 0 1.621.749 5.527 5.527 0 0 0 2.362.062c.171-.035.342-.077.513-.125a5.266 5.266 0 0 0 2.104-1.209l8.604-8.604a1.375 1.375 0 1 0-1.945-1.945L8.604 15.523a2.52 2.52 0 0 1-1.008.579 2.766 2.766 0 0 1-1.13.03 2.87 2.87 0 0 1-.791-.366 2.923 2.923 0 0 1-.796-.796 2.87 2.87 0 0 1-.366-.791 2.766 2.766 0 0 1 .03-1.13 2.52 2.52 0 0 1 .579-1.008L9.07 8.016l5.374-5.788A1.374 1.374 0 0 0 13.483 0zm-2.88 7.218a1.375 1.375 0 0 0-.968.404L3.84 13.417a1.375 1.375 0 1 0 1.945 1.945l5.795-5.795a1.375 1.375 0 0 0-.977-2.349z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function MailIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

/* Play triangle icon for Button 2 */
// function PlayTriangleIcon({ className = "w-2.5 h-2.5" }) {
//   return (
//     <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//       <polygon points="5 3 19 12 5 21 5 3" />
//     </svg>
//   );
// }

export default function Hero() {
  const socials = [
    { name: "GitHub", href: "https://github.com/Omkar-56", icon: <GithubIcon /> },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/omkar-pansare-3b8a91292", icon: <LinkedInIcon /> },
    { name: "LeetCode", href: "https://leetcode.com/u/Omkar55666/", icon: <LeetCodeIcon /> },
    { name: "Instagram", href: "https://www.instagram.com/_omkarrrr____/", icon: <InstagramIcon /> },
    { name: "Email", href: "mailto:omkarpansare5566@gmail.com", icon: <MailIcon /> },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-28 pb-16 max-w-7xl mx-auto bg-[#fef5da]"
    >
      <div className="w-full max-w-6xl 2xl:max-w-7xl flex flex-col items-start z-10">
        {/* High-Contrast Bold Editorial Serif Headline */}
        <h1 className="reveal font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.6rem] 2xl:text-[6.4rem] font-bold text-[#2c2e35] leading-[1.04] tracking-tight mb-7">
          Hi I'm Omkar<br />
          <span className="inline lg:whitespace-nowrap">A Full Stack Developer</span>
        </h1>

        {/* Clean Editorial Subtitle */}
        <p className="reveal font-body text-base sm:text-lg md:text-xl text-[#2c2e35]/80 leading-relaxed max-w-md mb-9">
          I build the parts you see, and the parts that keep them running.
        </p>

        {/* Action Buttons: Solid Coral CTA + Deep Dark Outlined Button */}
        <div className="reveal flex flex-wrap items-center gap-4 mb-10">
          {/* Button 1: Solid Coral (#fa575e) Button */}
          <a
            href="#projects"
            className="bg-[#fa575e] hover:bg-[#e4464d] text-white font-body font-bold text-xs sm:text-sm uppercase tracking-wider px-7 sm:px-8 py-3.5 rounded-sm shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Explore My Work
          </a>

          {/* Button 2: Deep Dark (#2c2e35) Outlined Button */}
          <a
            href="/Omkar_Pansare.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-[1.8px] border-[#2c2e35] bg-transparent hover:bg-[#2c2e35] hover:text-[#fef5da] text-[#2c2e35] font-body font-bold text-xs sm:text-sm uppercase tracking-wider px-6 sm:px-7 py-3.5 rounded-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2.5"
          >
            <span>View Resume</span>
          </a>
        </div>

        {/* Social Icons with hairline border extending only till the last logo */}
        <div className="reveal inline-flex items-center gap-5 pt-4 border-t border-[#2c2e35]/15 text-[#2c2e35]/75">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="hover:text-[#fa575e] hover:scale-115 transition-all duration-200 p-1"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
