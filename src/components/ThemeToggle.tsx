import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'portfolio-theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const nextTheme = stored ?? (prefersDark() ? 'dark' : 'light');
    applyTheme(nextTheme, false);
  }, []);

  const applyTheme = (value: Theme, persist = true) => {
    document.documentElement.classList.toggle('dark', value === 'dark');
    if (persist) {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setTheme(value);
  };

  const handleToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 transition-colors hover:text-indigo-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-400"
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
