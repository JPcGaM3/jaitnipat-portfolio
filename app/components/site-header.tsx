import Link from 'next/link';
import ThemeToggle from './theme-toggle';

const navigation = [
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          scroll
          className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300"
        >
          Portfolio
        </Link>
        <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} scroll className="hover:text-indigo-200">
              {item.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
