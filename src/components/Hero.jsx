const highlights = [
  ["04", "Credentials"],
  ["GitHub", "Live projects"],
  ["Nairobi", "Kenya · UTC+3"],
];

export default function Hero({ onHireClick }) {
  return (
    <section
      className="section-shell grid min-h-[calc(100svh-65px)] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]"
      id="home"
    >
      <div className="relative z-10">
        <div className="eyebrow mb-6">
          <span className="status-dot" />
          SOFTWARE ENGINEERING · OPEN TO OPPORTUNITIES
        </div>
        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">
          I build thoughtful
          <span className="block gradient-text">digital experiences.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          I&apos;m Juliet, a software engineering student in Nairobi, Kenya.
          I&apos;m interested in building useful web and mobile products, learning
          how systems scale, and making technology safer and easier to use.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="button" href="#projects">
            Explore my projects <span aria-hidden="true">↓</span>
          </a>
          <button
            className="button button-secondary"
            onClick={onHireClick}
            type="button"
          >
            Start a conversation <span aria-hidden="true">↗</span>
          </button>
        </div>
        <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
          {highlights.map(([value, label]) => (
            <div className="glass-panel rounded-xl p-4" key={label}>
              <p className="font-mono text-lg font-semibold text-cyan sm:text-xl">
                {value}
              </p>
              <p className="mt-1 text-xs text-muted sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:justify-self-end">
        <div className="absolute -inset-4 rounded-[2rem] bg-cyan/5 blur-2xl" />
        <div className="glass-panel relative overflow-hidden rounded-2xl shadow-glow">
          <div className="flex items-center justify-between border-b border-line/80 px-5 py-4">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="window-dot bg-rose-400" />
              <span className="window-dot bg-amber-300" />
              <span className="window-dot bg-emerald-400" />
            </div>
            <span className="font-mono text-xs text-muted">juliet@portfolio:~</span>
          </div>
          <div className="space-y-4 p-5 font-mono text-xs leading-6 sm:p-7 sm:text-sm">
            <p className="text-muted">
              <span className="text-cyan">$</span> cat profile.json
            </p>
            <p className="pl-3 text-slate-300">
              <span className="text-violet">&quot;focus&quot;</span>: [&quot;web&quot;,
              &quot;mobile&quot;, &quot;security&quot;],
            </p>
            <p className="pl-3 text-slate-300">
              <span className="text-violet">&quot;based_in&quot;</span>: &quot;Nairobi,
              Kenya&quot;,
            </p>
            <p className="pl-3 text-slate-300">
              <span className="text-violet">&quot;learning&quot;</span>: &quot;every day&quot;,
            </p>
            <p className="pl-3 text-slate-300">
              <span className="text-violet">&quot;status&quot;</span>:{" "}
              <span className="text-emerald-300">&quot;ready to build&quot;</span>
            </p>
            <p className="pt-3 text-muted">
              <span className="text-cyan">$</span> _
              <span className="terminal-caret" />
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-line/80 px-5 py-3 text-xs text-muted">
            <span>curiosity.exe</span>
            <span className="text-cyan">running smoothly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
