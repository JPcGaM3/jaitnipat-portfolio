import Image from 'next/image';
import Link from 'next/link';
import { profile } from '../lib/data';

export default function HeroSection() {
  return (
    <section className="border-b border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 py-20">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 md:flex-row md:items-center">
        <div className="space-y-6 md:w-2/3">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">{profile.title}</p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{profile.name}</h1>
          <p className="text-lg text-slate-300">{profile.summary}</p>
          <div className="flex flex-wrap gap-2 text-sm text-indigo-300">
            <span className="rounded-full border border-indigo-500/40 px-3 py-1">{profile.location}</span>
            <span className="rounded-full border border-indigo-500/40 px-3 py-1">Open to internships</span>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#projects"
              scroll
              className="rounded-full bg-indigo-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-50 shadow-lg shadow-indigo-500/40"
            >
              View projects
            </Link>
            <Link
              href="#contact"
              scroll
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-200"
            >
              Let&rsquo;s collaborate
            </Link>
          </div>
        </div>
        <div className="flex-1 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 text-sm leading-7 text-slate-300 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/80">
              <Image src={profile.photo} alt={profile.name} fill className="object-cover" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">About</p>
              <p className="text-base font-semibold text-white">{profile.name}</p>
              <p className="text-xs text-slate-400">{profile.title}</p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {profile.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-400" aria-hidden />
                <span className="text-sm text-slate-200">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
