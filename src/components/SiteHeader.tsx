import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const desktopNavigation = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const mobileNavigation = [
  { href: "#profile", label: "Profile" },
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((open) => !open);
  const handleNavigate = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a
          href="#about"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300"
        >
          Portfolio
        </a>

        <button
          type="button"
          onClick={handleToggle}
          className="inline-flex items-center rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-200 transition-colors hover:border-indigo-400 hover:text-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="pointer-events-none select-none font-semibold">Menu</span>
          <svg
            className="ml-2 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        <nav className="hidden flex-1 flex-wrap items-center justify-center gap-4 text-sm text-slate-300 lg:flex lg:justify-end">
          {desktopNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-2 py-1 hover:text-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
        {/*<ThemeToggle />*/}
      </div>

      <div
        className={`lg:hidden transition-all duration-200 ease-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden border-t border-slate-800 bg-slate-950/90 backdrop-blur`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4 text-sm text-slate-200">
          {mobileNavigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleNavigate}
              className="rounded-lg px-3 py-2 hover:bg-slate-900/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
