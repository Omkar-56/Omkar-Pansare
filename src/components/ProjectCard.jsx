import { useState } from "react";

function GithubIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-3 h-3" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function FlipIcon({ className = "w-3 h-3" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12v-3a3 3 0 0 1 3-3h13m-3-3l3 3-3 3" />
      <path d="M20 12v3a3 3 0 0 1-3 3H4m3 3l-3-3 3-3" />
    </svg>
  );
}

function SparkleIcon({ className = "w-3 h-3 text-terracotta flex-shrink-0 mt-0.5" }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProjectCard({ project }) {
  const { name, category, description, highlights, stack, liveUrl, githubUrl, year } = project;
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`flip-card group h-[260px] w-full cursor-pointer select-none ${isFlipped ? "is-flipped" : ""}`}
      onClick={() => setIsFlipped((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsFlipped((prev) => !prev);
        }
      }}
      tabIndex={0}
      role="region"
      aria-label={`${name} project card. Click, press Enter or Space to flip.`}
    >
      <div className="flip-card-inner rounded-2xl shadow-xs hover:shadow-lg transition-all duration-300">
        {/* ──────── FRONT FACE ──────── */}
        <div className="flip-card-front bg-sand rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-sand-dark/60 group-hover:border-terracotta/40 transition-colors">
          {/* Top metadata & Title */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-body font-medium tracking-wide text-terracotta bg-cream/80 border border-sand-dark/50 px-2 py-0.5 rounded-full uppercase">
                {category}
              </span>
              <span className="text-[11px] font-body text-espresso/45 font-medium">{year}</span>
            </div>

            <h3 className="font-display text-lg font-light text-espresso group-hover:text-terracotta transition-colors duration-200 mb-1.5 leading-snug">
              {name}
            </h3>
            <p className="font-body text-xs text-espresso/65 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          {/* Front Bottom */}
          <div className="space-y-2 pt-1">
            {/* Stack preview */}
            <div className="flex flex-wrap gap-1">
              {stack.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-body text-espresso/60 bg-cream/70 border border-sand-dark/50 rounded px-2 py-0.5"
                >
                  {tech}
                </span>
              ))}
              {stack.length > 3 && (
                <span className="text-[10px] font-body text-espresso/45 self-center pl-1">
                  +{stack.length - 3} more
                </span>
              )}
            </div>

            {/* Flip hint prompt */}
            <div className="flex items-center justify-between pt-2 border-t border-sand-dark/60 text-[11px] font-body text-espresso/50">
              <span className="inline-flex items-center gap-1 text-terracotta font-medium group-hover:translate-x-0.5 transition-transform duration-200">
                <span>Hover or tap to explore</span>
                <span aria-hidden="true">&rarr;</span>
              </span>
              <span className="w-5 h-5 rounded-full bg-cream/80 border border-sand-dark/50 flex items-center justify-center text-espresso/40 group-hover:bg-terracotta group-hover:text-cream group-hover:border-terracotta transition-colors duration-300">
                <FlipIcon />
              </span>
            </div>
          </div>
        </div>

        {/* ──────── BACK FACE ──────── */}
        <div className="flip-card-back bg-[#EDE3D3] rounded-2xl p-4 sm:p-5 flex flex-col justify-between border border-sand-dark/80 shadow-md">
          {/* Header & Highlights */}
          <div>
            <div className="flex items-center justify-between gap-2 border-b border-sand-dark/60 pb-1.5 mb-2">
              <h4 className="font-display text-base font-light text-espresso truncate">
                {name}
              </h4>
              <span className="text-[9px] font-body uppercase tracking-wider text-terracotta font-semibold px-2 py-0.5 rounded-full bg-cream/70 border border-sand-dark/40 flex-shrink-0">
                {category}
              </span>
            </div>

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="mb-2">
                <span className="text-[9px] font-body tracking-wider uppercase text-espresso/45 font-semibold block mb-1">
                  Key Highlights
                </span>
                <ul className="space-y-1">
                  {highlights.slice(0, 2).map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-1.5 text-[11px] font-body text-espresso/80 leading-snug line-clamp-1"
                    >
                      <SparkleIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Back Bottom: Tech stack & Links */}
          <div className="space-y-2 pt-1">
            {/* Full Stack tags */}
            <div className="flex flex-wrap gap-1">
              {stack.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-body text-espresso/70 bg-sand border border-sand-dark/60 rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 pt-1.5 border-t border-sand-dark/60">
              {liveUrl ? (
                <>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-1 flex-1 py-1.5 px-2.5 rounded-full bg-terracotta text-cream text-[11px] font-body font-medium hover:bg-espresso transition-all duration-200 shadow-xs"
                  >
                    <ExternalLinkIcon />
                    <span>Live Demo</span>
                  </a>
                  {githubUrl && (
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center gap-1 flex-1 py-1.5 px-2.5 rounded-full bg-espresso text-cream text-[11px] font-body font-medium hover:bg-terracotta transition-all duration-200 shadow-xs"
                    >
                      <GithubIcon />
                      <span>GitHub</span>
                    </a>
                  )}
                </>
              ) : (
                githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded-full bg-espresso text-cream text-[11px] font-body font-medium hover:bg-terracotta transition-all duration-200 shadow-xs"
                  >
                    <GithubIcon />
                    <span>View Repository on GitHub</span>
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
