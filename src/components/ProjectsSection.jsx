import { useEffect, useMemo, useState } from "react";

const GITHUB_USERNAME = "jlaura19";

function formatDate(date) {
  return new Intl.DateTimeFormat("en", { dateStyle: "medium" }).format(
    new Date(date),
  );
}

export default function ProjectsSection() {
  const [repositories, setRepositories] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("All");
  const [sort, setSort] = useState("updated");
  const [selectedRepository, setSelectedRepository] = useState(null);

  async function loadRepositories(signal) {
    setStatus("loading");
    setError("");
    try {
      const response = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        { headers: { Accept: "application/vnd.github+json" }, signal },
      );
      if (!response.ok) {
        throw new Error(
          response.status === 403 || response.status === 429
            ? "GitHub is temporarily limiting requests. Please try again shortly."
            : `GitHub could not load the repository list (HTTP ${response.status}).`,
        );
      }
      const data = await response.json();
      if (!Array.isArray(data)) {
        throw new Error("GitHub returned an unexpected repository response.");
      }
      setRepositories(data.filter((repo) => !repo.archived));
      setStatus("ready");
    } catch (loadError) {
      if (loadError.name === "AbortError") return;
      setError(loadError.message || "An unexpected error prevented GitHub from loading.");
      setStatus("error");
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    loadRepositories(controller.signal);
    return () => controller.abort();
  }, []);

  const languages = useMemo(
    () => ["All", ...new Set(repositories.map((repo) => repo.language).filter(Boolean).sort())],
    [repositories],
  );

  const visibleRepositories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return repositories
      .filter((repo) => language === "All" || repo.language === language)
      .filter((repo) => {
        if (!normalizedQuery) return true;
        return [repo.name, repo.description, repo.language, ...(repo.topics ?? [])]
          .filter(Boolean)
          .some((value) => value.toLowerCase().includes(normalizedQuery));
      })
      .sort((first, second) =>
        sort === "stars"
          ? second.stargazers_count - first.stargazers_count
          : new Date(second.pushed_at) - new Date(first.pushed_at),
      );
  }, [language, query, repositories, sort]);

  return (
    <section className="section-shell section-spacing" id="projects">
      <div className="section-heading">
        <p className="eyebrow">02 / PROJECTS</p>
        <h2>Built, shipped, and still evolving.</h2>
        <p>
          A live window into my public GitHub work. Search by project or
          technology, filter by language, or open a repository for details.
        </p>
      </div>
      <div className="glass-panel mb-6 grid gap-4 rounded-2xl p-4 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-center">
        <label className="relative block">
          <span className="sr-only">Search repositories</span>
          <span
            aria-hidden="true"
            className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          >
            search
          </span>
          <input
            className="field pl-10"
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search repositories, topics, or languages..."
            type="search"
            value={query}
          />
        </label>
        <label className="flex items-center gap-2 text-xs text-muted">
          Language
          <select
            className="field min-w-28"
            onChange={(event) => setLanguage(event.target.value)}
            value={language}
          >
            {languages.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 text-xs text-muted">
          Sort
          <select
            className="field min-w-36"
            onChange={(event) => setSort(event.target.value)}
            value={sort}
          >
            <option value="updated">Recently updated</option>
            <option value="stars">Most stars</option>
          </select>
        </label>
      </div>
      {status === "loading" && (
        <div aria-live="polite" className="glass-panel rounded-2xl p-8 text-center text-muted">
          <span className="loading-spinner" />
          <p className="mt-3">Connecting to GitHub...</p>
        </div>
      )}
      {status === "error" && (
        <div className="glass-panel rounded-2xl p-7 text-center" role="alert">
          <p className="font-semibold text-slate-100">Repositories are unavailable</p>
          <p className="mt-2 text-sm text-muted">{error}</p>
          <button
            className="button button-secondary mt-5"
            onClick={() => loadRepositories(undefined)}
            type="button"
          >
            Try again
          </button>
        </div>
      )}
      {status === "ready" && visibleRepositories.length === 0 && (
        <div className="glass-panel rounded-2xl p-8 text-center text-muted">
          No repositories match those filters.
        </div>
      )}
      {status === "ready" && visibleRepositories.length > 0 && (
        <div aria-live="polite" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {visibleRepositories.map((repo) => (
            <article
              className="project-card glass-panel"
              key={repo.id}
            >
              <button
                aria-label={`View details for ${repo.name}`}
                className="flex h-full w-full flex-col text-left"
                onClick={() => setSelectedRepository(repo)}
                type="button"
              >
                <div className="flex w-full items-start justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="material-symbols-outlined rounded-lg border border-cyan/20 bg-cyan/10 p-2 text-cyan"
                  >
                    deployed_code
                  </span>
                  <span className="font-mono text-xs text-muted">
                    <span className="text-amber-300">★</span> {repo.stargazers_count}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-slate-100 transition group-hover:text-cyan">
                  {repo.name}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted">
                  {repo.description || "A public repository from my GitHub profile."}
                </p>
                <div className="mt-5 flex w-full items-center justify-between border-t border-line/70 pt-4 text-xs">
                  <span className="flex items-center gap-2 text-muted">
                    <span className="language-dot" />
                    {repo.language || "Other"}
                  </span>
                  <span className="font-mono text-cyan">Inspect project ↗</span>
                </div>
              </button>
            </article>
          ))}
        </div>
      )}
      {selectedRepository && (
        <RepositoryDialog
          onClose={() => setSelectedRepository(null)}
          repository={selectedRepository}
        />
      )}
      <div className="mt-7 text-center">
        <a
          className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-white"
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          rel="noreferrer"
          target="_blank"
        >
          See all repositories on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

function RepositoryDialog({ repository, onClose }) {
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.classList.add("dialog-open");
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("dialog-open");
    };
  }, [onClose]);

  return (
    <div
      className="dialog-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="repository-dialog-title"
        aria-modal="true"
        className="glass-panel dialog-card"
        role="dialog"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">GITHUB REPOSITORY</p>
            <h3 className="mt-2 break-words text-2xl font-bold text-slate-100" id="repository-dialog-title">
              {repository.name}
            </h3>
          </div>
          <button
            aria-label="Close repository details"
            className="icon-button"
            onClick={onClose}
            type="button"
          >
            <span aria-hidden="true" className="material-symbols-outlined">close</span>
          </button>
        </div>
        <p className="mt-5 leading-7 text-muted">
          {repository.description || "A public repository from my GitHub profile."}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="detail-tile">
            <span className="detail-label">Primary language</span>
            <span className="text-slate-100">{repository.language || "Not specified"}</span>
          </div>
          <div className="detail-tile">
            <span className="detail-label">Stars</span>
            <span className="text-slate-100">{repository.stargazers_count}</span>
          </div>
          <div className="detail-tile">
            <span className="detail-label">Last updated</span>
            <span className="text-slate-100">{formatDate(repository.pushed_at)}</span>
          </div>
          <div className="detail-tile">
            <span className="detail-label">Default branch</span>
            <span className="text-slate-100">{repository.default_branch}</span>
          </div>
        </div>
        {repository.topics?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {repository.topics.map((topic) => <span className="tag" key={topic}>{topic}</span>)}
          </div>
        )}
        <a
          className="button mt-7 w-full"
          href={repository.html_url}
          rel="noreferrer"
          target="_blank"
        >
          Open repository <span aria-hidden="true">↗</span>
        </a>
      </section>
    </div>
  );
}
