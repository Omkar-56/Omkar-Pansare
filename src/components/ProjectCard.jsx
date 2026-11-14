function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const { name, category, description, highlights, stack, liveUrl, githubUrl, image, year } = project;

  return (
    <div className="rounded-sm bg-transparent w-full select-none px-2">
      {/* Grid aligned to the very top (items-start) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Side: Category, Title, Description, Highlights, Tools, Actions */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            {/* Top Category Tag & Year */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className="font-mono text-xs font-bold tracking-widest text-[#fa575e] uppercase">
                {category}
              </span>
              <span className="font-mono text-xs font-semibold text-[#2c2e35]/50">
                {year}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-[#2c2e35] tracking-tight mb-3 leading-snug">
              {name}
            </h3>

            {/* Description fitting until the end with hyphenation */}
            <p className="font-body text-sm sm:text-base text-[#2c2e35]/75 leading-relaxed mb-6 hyphenate">
              {description}
            </p>

            {/* Highlights List with coral accent dots */}
            {highlights && highlights.length > 0 && (
              <ul className="space-y-2 mb-6">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2c2e35]/85 font-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#fa575e] mt-2 flex-shrink-0" />
                    <span className="leading-relaxed hyphenate">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tools list separated by | without card containers */}
            <p className="font-mono text-xs text-[#2c2e35]/75 mb-8 leading-relaxed">
              {stack.map((tech, idx) => (
                <span key={tech} className="inline-block">
                  <span className="hover:text-[#fa575e] transition-colors">{tech}</span>
                  {idx < stack.length - 1 && (
                    <span className="text-[#2c2e35]/35 mx-2 select-none">|</span>
                  )}
                </span>
              ))}
            </p>
          </div>

          {/* Action Buttons matching Hero style */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#2c2e35]/15">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fa575e] hover:bg-[#e4464d] text-white font-body font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2"
              >
                <span>Live Demo</span>
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            )}

            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-[1.8px] border-[#2c2e35] bg-transparent hover:bg-[#2c2e35] hover:text-[#fef5da] text-[#2c2e35] font-body font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
                <span>&rarr;</span>
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Screenshot aligned to the top */}
        <div className="lg:col-span-6">
          <div className="rounded-sm overflow-hidden border border-[#2c2e35]/10 bg-white relative flex items-center justify-center">
            <img
              src={image}
              alt={`${name} project screenshot`}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500 ease-out"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
