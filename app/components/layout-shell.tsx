import { ReactNode } from 'react';
import SiteHeader from './site-header';

export default function LayoutShell({ children }: { children: ReactNode }) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-slate-950 text-slate-100">
      <SiteHeader />
      <main>{children}</main>
      <footer className="border-t border-slate-800 bg-slate-900/50 py-6 text-center text-sm text-slate-400">
        © {currentYear} Portfolio. Powered by Next.js.
      </footer>
    </div>
  );
}
