import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto py-12 md:py-16">
      <div className="w-full">
        <div className="reveal mb-6 md:mb-8">
          <span className="text-xs font-body tracking-widest text-terracotta uppercase mb-1 block font-medium">
            Work
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-light text-espresso mb-1.5">
            Things I've built
          </h2>
          <p className="font-body text-xs md:text-sm text-espresso/55 font-light max-w-lg">
            A showcase of full-stack web, cloud, and machine learning projects. Hover or tap any card to explore key highlights, tech stacks, and links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
      </div>
    </section>
  );
}
