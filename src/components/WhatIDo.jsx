/* Custom SVG Tech Stack Icons styled in the website's ink palette */
function ReactIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23 23 20.46" fill="currentColor">
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="currentColor" strokeWidth="1.2" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

function JsIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M9 15c0 .6-.4 1-1 1s-1-.4-1-1v-2" />
      <path d="M14 11v4c0 .6.4 1 1 1s1-.4 1-1v-1c0-.6-.4-1-1-1h-2" />
    </svg>
  );
}

function NodeIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l8.5 4.9v9.8L12 21.6 3.5 16.7V6.9L12 2zm0 2.4L5.5 8.1v7.8L12 19.2l6.5-3.3V8.1L12 4.4z"/>
    </svg>
  );
}

function ExpressIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 9l5 7m0-7l-5 7" />
      <path d="M13 16h4a2 2 0 0 0 0-4h-4v4zm0-2h3" />
    </svg>
  );
}

function PostgresIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="7.5" ry="3" />
      <path d="M4.5 5v14c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V5" />
      <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" />
    </svg>
  );
}

function MysqlIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" />
      <line x1="7" y1="17" x2="7.01" y2="17" strokeWidth="2.5" />
    </svg>
  );
}

function PythonIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.9 2c-4.4 0-4.1 1.9-4.1 1.9l.006 2h4.2v.6H4.8S2 6.2 2 10.7c0 4.5 2.5 4.3 2.5 4.3h1.5v-2.1s-.1-2.4 2.4-2.4h4.2s2.3 0 2.3-2.3V4.3S15.2 2 11.9 2zm-2.3 1.3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12.1 22c4.4 0 4.1-1.9 4.1-1.9l-.006-2H12v-.6h7.1s2.8.3 2.8-4.2c0-4.5-2.5-4.3-2.5-4.3h-1.5v2.1s.1 2.4-2.4 2.4H11.3s-2.3 0-2.3 2.3v3.9s-.3 2.3 3.1 2.3zm2.3-1.3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/>
    </svg>
  );
}

function FastApiIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9.5" />
      <path d="M13 6l-3.5 6h3.5L11 18l4.5-7h-3.5L13 6z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PytorchIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.2 2.2a.8.8 0 0 0-1.1.2l-2.4 3.7a8.5 8.5 0 1 0 6.1 12.3.8.8 0 1 0-1.4-.8 6.9 6.9 0 1 1-5-10l1.6-2.5a.8.8 0 0 0-.8-1.2zm4.3 3.4a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4z"/>
    </svg>
  );
}

function TensorflowIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5l8.5 4.9v9.8L12 22.1l-8.5-4.9V7.4L12 2.5z" />
      <path d="M12 12.3l8.5-4.9" />
      <path d="M12 12.3v9.8" />
      <path d="M12 12.3L3.5 7.4" />
    </svg>
  );
}

function TailwindIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

function DockerIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 11h-2v2h2v-2zm-2.5 0h-2v2h2v-2zm-2.5 0h-2v2h2v-2zm7.5 0h-2v2h2v-2zm-5-2.5h-2v2h2v-2zm2.5 0h-2v2h2v-2zm2.5 0h-2v2h2v-2zm-5-2.5h-2v2h2V6zm8.3 6.1c-.3-.2-1.6-.8-2.5-.2-.6.4-.9 1-1.1 1.7H2.2c-.3 1.2.1 3.5 1.5 5.2C5.4 21 8.5 21.3 12 21.3c7.2 0 10.3-4.5 10.3-8.8 0-.3 0-.7-.1-1-.8.2-1.6.4-2.4-.2z"/>
    </svg>
  );
}

function GitIcon({ className = "w-8 h-8 sm:w-9 sm:h-9" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.2 10.7a2.8 2.8 0 0 0-2.1 1l-3-3a2.8 2.8 0 0 0 .5-1.5 2.8 2.8 0 1 0-3.3 2.8l2.9 2.9a2.7 2.7 0 0 0 0 .6l-2.9 2.9a2.8 2.8 0 1 0 1.4 1.4l3-3a2.8 2.8 0 0 0 1.5.5 2.8 2.8 0 1 0 2-3.7zm-7.9-5.9a1.4 1.4 0 1 1-1.4-1.4 1.4 1.4 0 0 1 1.4 1.4zm-1.4 14.8a1.4 1.4 0 1 1 1.4-1.4 1.4 1.4 0 0 1-1.4 1.4zm9.3-7.5a1.4 1.4 0 1 1-1.4 1.4 1.4 1.4 0 0 1 1.4-1.4z"/>
    </svg>
  );
}

const techStack = [
  { name: "React", icon: <ReactIcon /> },
  { name: "JavaScript", icon: <JsIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "Express.js", icon: <ExpressIcon /> },
  { name: "PostgreSQL", icon: <PostgresIcon /> },
  { name: "MySQL", icon: <MysqlIcon /> },
  { name: "Python", icon: <PythonIcon /> },
  { name: "FastAPI", icon: <FastApiIcon /> },
  { name: "PyTorch", icon: <PytorchIcon /> },
  { name: "TensorFlow", icon: <TensorflowIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "Docker", icon: <DockerIcon /> },
  { name: "Git", icon: <GitIcon /> },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20 sm:py-28 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto bg-[#fef5da]">
      {/* ── Single 2-Column Grid: Image on Left vertically centered to the ENTIRE Right Column (including Header) ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ── Left Side: Coding Illustration Centered Heightwise with the Entire Right Content (including Header) ── */}
        <div className="order-2 lg:order-1 lg:col-span-5 reveal flex flex-col items-center lg:items-start justify-center">
          <div className="relative w-full max-w-[420px] flex justify-center lg:justify-start group">
            <img
              src="/images/what-i-do-coding2.webp"
              alt="Omkar coding at his desk illustration"
              loading="lazy"
              decoding="async"
              className="w-full h-auto max-h-[460px] sm:max-h-[500px] object-contain select-none group-hover:scale-102 transition-transform duration-500 ease-out drop-shadow-sm"
              draggable={false}
            />
          </div>
        </div>

        {/* ── Right Side: Header + Pillars + Tech Stack ── */}
        <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col gap-5 reveal">
          {/* Header on Right Side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-bold tracking-widest text-[#2c2e35]/75 uppercase">
                {"// 01 · WHAT I DO"}
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] font-bold text-[#2c2e35] tracking-tight leading-[1.08]">
              About Me
            </h2>
          </div>

          {/* 1. Core Focus Narrative */}
          <div className="space-y-4 border-[#2c2e35]/15">
            <p className="font-body text-sm sm:text-base text-[#2c2e35]/75 leading-relaxed hyphenate">
              I’m a full stack developer with a backend focus, graduating in Computer Engineering from Wadia College of Engineering, Pune. I build web applications with Node.js, Express, Python, React and PostgreSQL, and I care about clean APIs, readable code and interfaces that are easy to use. I’m currently looking for a full-time role where I can keep learning while shipping features that matter.
            </p>
            <div>
              <span className="font-mono text-xs font-bold tracking-wider text-[#2c2e35] uppercase block mb-1">
                BACKEND
              </span>
              <p className="font-body text-sm sm:text-base text-[#2c2e35]/75 leading-relaxed hyphenate">
                Building REST APIs and server-side logic with Node.js, Express and Python.
              </p>
            </div>
            <div>
              <span className="font-mono text-xs font-bold tracking-wider text-[#2c2e35] uppercase block mb-1">
                FRONTEND
              </span>
              <p className="font-body text-sm sm:text-base text-[#2c2e35]/75 leading-relaxed hyphenate">
                I build React interfaces that feel smooth, load quickly and don’t make users think.
              </p>
            </div>
          </div>

          {/* 2. Tech Stack Flowing Ticker (Only Logos in Bigger Size) */}
          <div className="space-y-3 border-[#2c2e35]/15 pb-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-wider text-[#2c2e35] uppercase">
                Technologies &amp; Tools
              </span>
            </div>

            {/* Continuous Marquee on Canvas - Only Logos with lightweight edge gradients */}
            <div className="relative w-full overflow-hidden py-2">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-[#fef5da] to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-[#fef5da] to-transparent z-10" />
              <div className="animate-marquee flex items-center gap-8 sm:gap-10 py-1">
                {[...techStack, ...techStack].map((tech, index) => (
                  <div
                    key={`${tech.name}-${index}`}
                    title={tech.name}
                    aria-label={tech.name}
                    className="flex items-center justify-center text-[#2c2e35] hover:text-[#fa575e] hover:scale-115 transition-all duration-200 flex-shrink-0 cursor-pointer"
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
