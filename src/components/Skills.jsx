import skillGroups from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-5xl mx-auto">
      <div className="reveal mb-16">
        <span className="text-xs font-body tracking-widest text-terracotta uppercase mb-4 block">
          Skills
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-light text-espresso">
          What I work with
        </h2>
      </div>

      <div className="space-y-12">
        {skillGroups.map((group, i) => (
          <div
            key={group.label}
            className="reveal"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <span className="text-xs font-body text-espresso/40 tracking-widest uppercase mb-4 block">
              {group.label}
            </span>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((s) => (
                <span
                  key={s}
                  className="skill-pill font-body text-sm text-espresso bg-sand border border-sand-dark rounded-full px-5 py-2.5 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
