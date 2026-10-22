const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    skills: ["JavaScript", "Python", "Java", "HTML", "CSS"],
  },
  {
    title: "Web & mobile",
    icon: "devices",
    skills: ["React", "Vite", "Responsive UI", "Flutter"],
  },
  {
    title: "Tools & systems",
    icon: "settings",
    skills: ["Git & GitHub", "REST APIs", "Linux", "Docker"],
  },
  {
    title: "Focus areas",
    icon: "shield",
    skills: ["Cybersecurity", "Cloud fundamentals", "Accessibility", "Testing"],
  },
  {
    title: "From USIU-Africa coursework",
    icon: "school",
    skills: [
      "Relational database design",
      "Technical & academic writing",
      "Research & analysis",
      "Prompt engineering",
      "Natural language understanding",
      "Time management",
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="section-shell section-spacing" id="skills">
      <div className="section-heading">
        <p className="eyebrow">05 / SKILLS</p>
        <h2>The toolkit I&apos;m growing.</h2>
        <p>
          A practical mix of tools I use today and areas I&apos;m actively
          developing through coursework and hands-on projects.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article className="glass-panel rounded-2xl p-5" key={group.title}>
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="material-symbols-outlined text-xl text-cyan"
              >
                {group.icon}
              </span>
              <h3 className="font-semibold text-slate-100">{group.title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li className="tag" key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
