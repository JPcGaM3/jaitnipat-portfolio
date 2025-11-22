import { ReactNode } from 'react';
import SiteHeader from './SiteHeader';

interface LayoutShellProps {
  children: ReactNode;
}

export default function LayoutShell({ children }: LayoutShellProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SiteHeader />
      <main>{children}</main>
      <footer className="border-t border-slate-800 bg-slate-900/50 py-6 text-center text-sm text-slate-400">
        © {currentYear} Portfolio. Built with React and Vite.
      </footer>
    </div>
  );
}
