const credentials = [
  {
    title: "Digital Awareness",
    issuer: "Cisco Networking Academy",
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

export default function AboutSection() {
  return (
    <section className="section-shell section-spacing" id="about">
      <div className="section-heading">
        <p className="eyebrow">01 / ABOUT</p>
        <h2>Curious by nature. Practical by design.</h2>
        <p>
          My path into technology is driven by a simple question: how can we
          make software more helpful, reliable, and accessible?
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <article className="glass-panel rounded-2xl p-6 sm:p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-2xl text-cyan">
            <span aria-hidden="true" className="material-symbols-outlined">
              neurology
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-100">A little about me</h3>
          <p className="mt-4 leading-7 text-muted">
            I enjoy taking an idea from a rough sketch to a working product:
            shaping the interface, connecting it to useful data, and polishing
            the details that make it feel intuitive. I&apos;m building my
            experience across software development, cloud concepts, and
            cybersecurity while staying grounded in collaboration and
            continuous learning.
          </p>
          <p className="mt-4 leading-7 text-muted">
            Based in Nairobi and happy to collaborate remotely, I bring
            curiosity, care, and a steady problem-solving mindset to every
            project.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Thoughtful UI", "Reliable systems", "Security-aware"].map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </article>
        <div>
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">LEARNING MILESTONES</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-100">
                Certifications
              </h3>
            </div>
            <span className="font-mono text-xs text-muted">04 records</span>
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
