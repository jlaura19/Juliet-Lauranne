const experience = [
  {
    role: "Student Work-Study Assistant",
    organization: "USIU-Africa · Nairobi, Kenya",
    period: "January 2026 – Present",
    icon: "support_agent",
    highlights: [
      "Provide administrative and operational support across university departments.",
      "Collaborate with faculty and peers on program scheduling, event coordination, and documentation.",
    ],
  },
  {
    role: "Student Leadership & Retreat Committee Organizer",
    organization: "USIU-Africa · Nairobi, Kenya",
    period: "July 2026 – August 2026",
    icon: "groups",
    highlights: [
      "Prepared program schedules, breakout-session guides, and feedback forms for the annual student leadership retreat.",
      "Coordinated logistics and communication across student groups to support a smooth event.",
    ],
  },
  {
    role: "Math Club Chair / Vice Chair",
    organization: "USIU-Africa · Nairobi, Kenya",
    period: "Two consecutive years",
    icon: "calculate",
    highlights: [
      "Co-founded and launched the Math Club as Vice Chair, establishing its foundations and promoting mathematical awareness.",
      "Served as Chair the following year, organizing activities and encouraging analytical thinking across the student body.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="section-shell section-spacing" id="experience">
      <div className="section-heading">
        <p className="eyebrow">03 / EXPERIENCE</p>
        <h2>Learning by contributing.</h2>
        <p>
          Roles in university operations and student leadership have strengthened
          how I collaborate, organize, and turn plans into action.
        </p>
      </div>
      <div className="relative space-y-4 before:absolute before:bottom-8 before:left-[1.15rem] before:top-8 before:w-px before:bg-cyan/20 sm:space-y-5">
        {experience.map((item) => (
          <article
            className="glass-panel relative rounded-2xl p-4 pl-12 sm:p-5 sm:pl-16"
            key={item.role}
          >
            <span className="absolute left-2.5 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-cyan/30 bg-ink text-cyan sm:left-4 sm:top-5">
              <span aria-hidden="true" className="material-symbols-outlined">
                {item.icon}
              </span>
            </span>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-semibold leading-6 text-slate-100">
                  {item.role}
                </h3>
                <p className="mt-1 text-[13px] text-cyan/90">{item.organization}</p>
              </div>
              <span className="shrink-0 font-mono text-[11px] text-muted">
                {item.period}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-[13px] leading-5 text-muted">
              {item.highlights.map((highlight) => (
                <li className="flex gap-2" key={highlight}>
                  <span aria-hidden="true" className="text-cyan">›</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
