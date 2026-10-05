import { useEffect, useRef } from "react";

const scopes = [
  "Internship / Co-op",
  "Full-time opportunity",
  "Contract / freelance",
  "Project collaboration",
];

export default function HireModal({ open, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    closeButtonRef.current?.focus();
    document.body.classList.add("dialog-open");
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("dialog-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry: ${data.get("scope")}`);
    const body = encodeURIComponent(
      `Hello Juliet,\n\nI'd like to discuss: ${data.get("scope")}.\n\n${data.get("details")}`,
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    onClose();
  }

  return (
    <div
      className="dialog-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="hire-dialog-title"
        aria-modal="true"
        className="glass-panel dialog-card"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line/70 pb-5">
          <div>
            <p className="eyebrow">TALENT ACQUISITION / CONNECTION</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-100" id="hire-dialog-title">
              Let&apos;s build something useful.
            </h2>
          </div>
          <button
            aria-label="Close dialog"
            className="icon-button"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <span aria-hidden="true" className="material-symbols-outlined">close</span>
          </button>
        </div>
        <form className="mt-5 grid gap-5" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="form-label mb-3">What would you like to discuss?</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {scopes.map((scope, index) => (
                <label className="scope-option" key={scope}>
                  <input
                    defaultChecked={index === 0}
                    className="accent-cyan"
                    name="scope"
                    type="radio"
                    value={scope}
                  />
                  <span>{scope}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="form-label">
            A few details
            <textarea
              className="field mt-2 min-h-28 resize-y"
              name="details"
              placeholder="Tell me about the role, project, or idea..."
              required
              rows="4"
            />
          </label>
          <p className="text-xs leading-5 text-muted">
            This opens your default email app with a draft. No message is sent
            automatically, and you can review it before sending.
          </p>
          <button className="button w-full" type="submit">
            Prepare email <span aria-hidden="true">↗</span>
          </button>
        </form>
      </section>
    </div>
  );
}
