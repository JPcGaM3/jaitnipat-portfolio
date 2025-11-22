import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Casey Parker · Product Designer & Frontend Engineer',
  description:
    'Portfolio for Casey Parker highlighting inclusive product design, resilient systems, and engineering fluency.',
  metadataBase: new URL('https://example.com')
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  );
}
