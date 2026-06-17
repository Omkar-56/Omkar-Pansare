/* Icons as simple SVGs — no extra library needed */
function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function ProjectCard({ project, delay = 0 }) {
  const { name, description, stack, liveUrl, githubUrl, year } = project;

  return (
    <div
      className="project-card reveal bg-sand rounded-2xl p-7 flex flex-col"
      style={{ transitionDelay: `${delay}s` }}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-10">
        <span className="text-xs font-body text-espresso/40">{year}</span>
        <div className="flex items-center gap-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="View on GitHub"
              className="text-espresso/40 hover:text-espresso transition-colors duration-200"
            >
              <GithubIcon />
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Live site"
              className="text-espresso/40 hover:text-terracotta transition-colors duration-200"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="font-display text-2xl font-light text-espresso mb-3">
        {name}
      </h3>
      <p className="font-body text-sm text-espresso/55 leading-relaxed mb-6 flex-1">
        {description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {stack.map((t) => (
          <span
            key={t}
            className="text-xs font-body text-espresso/50 border border-sand-dark rounded-full px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Bottom links */}
      {(liveUrl || githubUrl) && (
        <div className="flex gap-4 mt-6 pt-5 border-t border-sand-dark">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-terracotta hover:underline underline-offset-4 transition-all"
            >
              <ExternalLinkIcon />
              Live site
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-espresso/50 hover:text-espresso transition-colors"
            >
              <GithubIcon />
              GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
