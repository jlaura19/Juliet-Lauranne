const education = [
  {
    school: "United States International University – Africa (USIU-Africa)",
    credential: "Bachelor of Science in Software Engineering",
    period: "Expected Graduation: 2027",
    icon: "school",
    current: true,
  },
];

const credentials = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy · Python Institute",
    completed: "Feb 19, 2026",
  },
  {
    title: "Digital Awareness",
    issuer: "African Advanced Level Telecommunications Institute (AFRALTI)",
    completed: "Jan 8, 2025",
  },
  {
    title: "Cybersecurity and Emerging Technologies Awareness Training",
    issuer: "ICT Authority, Kenya",
    completed: "Dec 14, 2024",
    id: "ICTA-1734202986-2344-19305",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    completed: "Jun 27, 2024",
  },
  {
    title: "Social Media Marketing Certificate",
    issuer: "Brightermonday Kenya / Arifu",
    completed: "Nov 18, 2025",
    id: "CERT-000000000351",
  },
];

export default function EducationSection() {
  return (
    <section className="section-shell section-spacing" id="education">
      <div className="section-heading">
        <p className="eyebrow">02 / EDUCATION</p>
        <h2>Where I&apos;m learning my craft.</h2>
        <p>
          My coursework at USIU-Africa, paired with self-driven certifications,
          shapes how I think about software, security, and clear communication.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-3">
          {education.map((item) => (
            <article
              className={`glass-panel rounded-2xl p-6 ${item.current ? "border-cyan/30" : ""}`}
              key={item.school}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-xl text-cyan">
                <span aria-hidden="true" className="material-symbols-outlined">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-semibold leading-6 text-slate-100">
                {item.school}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.credential}</p>
              <p className="mt-3 border-t border-line/70 pt-3 font-mono text-[11px] text-cyan/90">
                {item.period}
              </p>
            </article>
          ))}
          <article className="glass-panel rounded-2xl p-6">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-xl text-cyan">
              <span aria-hidden="true" className="material-symbols-outlined">
                auto_stories
              </span>
            </div>
            <h3 className="font-semibold leading-6 text-slate-100">
              What my coursework covers
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted">
              Software design, relational databases, and systems thinking,
              balanced with technical writing and research skills that sharpen
              how I document and communicate my work.
            </p>
          </article>
        </div>
        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">LEARNING MILESTONES</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-100">
                Certifications
              </h3>
            </div>
            <span className="font-mono text-xs text-muted">
              {String(credentials.length).padStart(2, "0")} records
            </span>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {credentials.map((credential) => (
              <article className="credential-card glass-panel" key={credential.title}>
                <div className="mb-3 flex items-start justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined text-xl text-cyan"
                  >
                    verified
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {credential.completed}
                  </span>
                </div>
                <h4 className="font-semibold leading-6 text-slate-100">
                  {credential.title}
                </h4>
                <p className="mt-2 text-sm text-muted">{credential.issuer}</p>
                {credential.id && (
                  <p className="mt-3 break-all border-t border-line/70 pt-3 font-mono text-[11px] text-cyan/90">
                    ID: {credential.id}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
