import skillCategories from "../data/skills";

function ServerIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="7" rx="2" />
      <rect x="2" y="14" width="20" height="7" rx="2" />
      <line x1="6" y1="6.5" x2="6.01" y2="6.5" />
      <line x1="6" y1="17.5" x2="6.01" y2="17.5" />
    </svg>
  );
}

function LayoutIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  );
}

function BrainIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 00-4 4v1a4 4 0 00-2 3.46A4 4 0 005 14a4 4 0 002 3.46V18a4 4 0 004 4m2-20a4 4 0 014 4v1a4 4 0 012 3.46A4 4 0 0119 14a4 4 0 01-2 3.46V18a4 4 0 01-4 4m-1-18v18" />
    </svg>
  );
}

function CodeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

function TerminalIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function SparkleDot({ className = "w-2.5 h-2.5 text-terracotta flex-shrink-0 mt-0.5" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

const iconMap = {
  server: ServerIcon,
  layout: LayoutIcon,
  brain: BrainIcon,
  code: CodeIcon,
  terminal: TerminalIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto py-12 md:py-16">
      <div className="w-full">
        {/* Header */}
        <div className="reveal mb-5 md:mb-6">
          <span className="text-xs font-body tracking-widest text-terracotta uppercase mb-1 block font-medium">
            Skills &amp; Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-espresso mb-1.5">
            What I work with
          </h2>
          <p className="font-body text-xs md:text-sm text-espresso/60 font-light max-w-lg mb-3.5">
            A balanced engineering toolkit spanning full-stack development, cloud infrastructure, deep learning, and 100+ algorithmic problem solutions.
          </p>

          {/* Quick competency strip */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-body font-medium text-espresso/70 bg-sand border border-sand-dark/60 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Full-Stack REST &amp; Web Apps
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-body font-medium text-espresso/70 bg-sand border border-sand-dark/60 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Deep Learning &amp; Computer Vision
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-body font-medium text-espresso/70 bg-sand border border-sand-dark/60 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Docker Containerization &amp; Microservices
            </span>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-body font-medium text-espresso/70 bg-sand border border-sand-dark/60 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              100+ LeetCode Solved
            </span>
          </div>
        </div>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || CodeIcon;
            return (
              <div
                key={cat.id}
                className="reveal bg-sand rounded-2xl p-4 md:p-4.5 flex flex-col justify-between border border-sand-dark/60 hover:border-terracotta/40 shadow-xs hover:shadow-md transition-all group h-[200px]"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-start gap-2.5 mb-1.5">
                    <div className="w-8 h-8 rounded-lg bg-cream border border-sand-dark/50 text-terracotta flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta group-hover:text-cream transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-light text-espresso group-hover:text-terracotta transition-colors leading-tight">
                        {cat.label}
                      </h3>
                      <p className="text-[10px] font-body text-espresso/55 leading-tight mt-0.5 line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1 my-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill font-body text-[10px] text-espresso/75 bg-cream/70 border border-sand-dark/60 rounded px-2 py-0.5 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Strengths */}
                {cat.highlight && (
                  <div className="pt-2 border-t border-sand-dark/50">
                    <div className="flex items-start gap-1.5 text-[10px] font-body text-espresso/70 leading-snug">
                      <SparkleDot />
                      <span className="line-clamp-1">{cat.highlight}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
