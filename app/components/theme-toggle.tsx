'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  const applyTheme = (value: Theme, persist = true) => {
    document.documentElement.classList.toggle('dark', value === 'dark');
    if (persist) {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setTheme(value);
  };

  useEffect(() => {
    const prefersDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const nextTheme = stored ?? (prefersDark() ? 'dark' : 'light');
    applyTheme(nextTheme, false);
  }, []);

  const handleToggle = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300 hover:text-indigo-200"
    >
      {theme === 'dark' ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
