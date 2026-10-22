import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    setStatus("Opening your email app with a prepared message. Choose a recipient to send it.");
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  }

  return (
    <section className="section-shell section-spacing pb-24" id="contact">
      <div className="section-heading">
        <p className="eyebrow">06 / CONTACT</p>
        <h2>Have a good idea? Let&apos;s talk.</h2>
        <p>
          Share a little about what you&apos;re working on. This form prepares a
          message in your email app; it does not send anything without your
          confirmation.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside className="glass-panel rounded-2xl p-6 sm:p-8">
          <p className="eyebrow">OPEN CHANNELS</p>
          <h3 className="mt-3 text-2xl font-bold text-slate-100">
            Collaboration starts with a hello.
          </h3>
          <p className="mt-4 leading-7 text-muted">
            I&apos;m open to conversations about internships, collaborative
            projects, and opportunities to learn by building.
          </p>
          <a
            className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-cyan hover:text-white"
            href="https://github.com/jlaura19"
            rel="noreferrer"
            target="_blank"
          >
            github.com/jlaura19 <span aria-hidden="true">↗</span>
          </a>
        </aside>
        <form className="glass-panel grid gap-4 rounded-2xl p-6 sm:p-8" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="form-label">
              Your name
              <input autoComplete="name" className="field mt-2" name="name" required />
            </label>
            <label className="form-label">
              Email address
              <input
                autoComplete="email"
                className="field mt-2"
                name="email"
                required
                type="email"
              />
            </label>
          </div>
          <label className="form-label">
            What would you like to discuss?
            <textarea
              className="field mt-2 min-h-36 resize-y"
              name="message"
              required
              rows="5"
            />
          </label>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p aria-live="polite" className="max-w-md text-xs leading-5 text-muted">
              {status}
            </p>
            <button className="button" type="submit">
              Prepare email <span aria-hidden="true">↗</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
