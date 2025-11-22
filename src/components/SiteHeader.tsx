import ThemeToggle from "./ThemeToggle";

const navigation = [
  { href: "#about", label: "About" },
  { href: "#experiences", label: "Experiences" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <a
          href="#about"
          className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300"
        >
          Portfolio
        </a>
        <nav className="flex flex-1 flex-wrap items-center justify-center gap-4 text-sm text-slate-300 md:justify-end">
          {navigation.map((item) => (
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
    </header>
  );
}
