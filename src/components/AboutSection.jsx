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
      <div className="grid gap-6 lg:grid-cols-2">
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
        <article className="glass-panel rounded-2xl p-6 sm:p-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/10 text-2xl text-cyan">
            <span aria-hidden="true" className="material-symbols-outlined">
              rocket_launch
            </span>
          </div>
          <h3 className="text-xl font-bold text-slate-100">Career objective</h3>
          <p className="mt-4 leading-7 text-muted">
            Innovative and detail-oriented software engineering student
            passionate about artificial intelligence, prompt engineering, and
            content design. I combine strong technical knowledge in
            cybersecurity and programming with research, writing, and creative
            problem-solving, and I&apos;m looking for opportunities to
            contribute to AI-driven projects through logical thinking and
            effective communication.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Prompt engineering", "AI interaction", "Research & writing"].map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
