import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="reveal mb-12">
        <span className="text-xs font-body tracking-widest text-terracotta uppercase mb-3 block">
          Work
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-light text-espresso mb-3">
          Things I've built
        </h2>
        <p className="font-body text-sm text-espresso/50 font-light max-w-lg">
          A showcase of full-stack web, cloud, and machine learning projects. Hover or tap any card to explore key highlights, tech stacks, and links.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className="reveal h-full"
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
