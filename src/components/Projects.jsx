import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="reveal mb-16">
        <span className="text-xs font-body tracking-widest text-terracotta uppercase mb-4 block">
          Work
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-light text-espresso">
          Things I've built
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} delay={i * 0.08} />
        ))}
      </div>
    </section>
  );
}
