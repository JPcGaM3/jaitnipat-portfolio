import Link from 'next/link';
import { certificates } from '../lib/data';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-slate-200">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Certificates</p>
          <h2 className="text-3xl font-semibold text-white">Credentials that strengthen my toolkit</h2>
          <p className="text-slate-300">
            Verified learning across cloud fundamentals, responsive web, and AI that keeps me ready for internship challenges.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-2">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="flex flex-col gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-inner"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">{certificate.year}</p>
                  <h3 className="text-lg font-semibold text-white">{certificate.title}</h3>
                  <p className="text-sm text-slate-300">{certificate.issuer}</p>
                </div>
                {certificate.credentialUrl && (
                  <Link
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-indigo-500/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-indigo-200"
                  >
                    Verify
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
