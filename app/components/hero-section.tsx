import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 md:flex-row md:items-center">
        <div className="space-y-6 md:w-2/3">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Product Designer · Frontend Engineer</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">Designing inclusive, resilient digital products.</h1>
          <p className="text-lg text-slate-300">
            I partner with founders and product teams to translate complex problems into human-centered experiences,
            balancing insight, craft, and technical fluency.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              scroll
              className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-50 shadow-lg shadow-indigo-500/40"
            >
              View selected work
            </Link>
            <Link
              href="#contact"
              scroll
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200"
            >
              Let's collaborate
            </Link>
          </div>
        </div>
        <div className="flex-1 rounded-3xl border border-slate-800 bg-slate-900/60 p-10 text-sm leading-7 text-slate-300 shadow-xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-indigo-300">Highlights</p>
          <ul className="mt-6 space-y-4">
            <li>
              <strong className="text-white">8+ years</strong> supporting high-growth product teams
            </li>
            <li>
              <strong className="text-white">Design systems</strong> that scale with velocity
            </li>
            <li>
              <strong className="text-white">Accessibility</strong> woven into discovery, delivery, and QA
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
