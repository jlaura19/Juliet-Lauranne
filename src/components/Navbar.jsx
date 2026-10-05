import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export default function Navbar({ onHireClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-ink/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          aria-label="Juliet portfolio home"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wide text-cyan"
          href="#home"
          onClick={closeMenu}
        >
          <span aria-hidden="true" className="material-symbols-outlined">
            terminal
          </span>
          dev::portfolio
        </a>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {links.map(([label, href]) => (
            <a
              className="text-sm text-muted transition hover:text-cyan"
              href={href}
              key={label}
            >
              {label}
            </a>
          ))}
          <button className="button button-small" onClick={onHireClick} type="button">
            Let&apos;s connect <span aria-hidden="true">↗</span>
          </button>
        </nav>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="rounded-lg border border-line p-2 text-slate-200 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span aria-hidden="true" className="material-symbols-outlined">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>
      {menuOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-line/70 bg-ink px-5 py-4 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                className="rounded-lg px-3 py-2.5 text-sm text-muted hover:bg-panel hover:text-cyan"
                href={href}
                key={label}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <button
              className="button mt-2"
              onClick={() => {
                closeMenu();
                onHireClick();
              }}
              type="button"
            >
              Let&apos;s connect <span aria-hidden="true">↗</span>
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
