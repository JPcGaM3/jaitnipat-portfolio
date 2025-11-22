import Image from 'next/image';
import { profile } from '../lib/data';

export default function HeroSection() {
  return (
    <section
      id="about"
      className="border-b border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-950 py-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 md:flex-row md:items-center">
        <div className="space-y-5 md:w-2/3">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">About</p>
          <h1 id="about-heading" className="text-4xl font-semibold leading-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-lg text-slate-200">{profile.title}</p>
          <p className="text-base leading-7 text-slate-300">{profile.about}</p>
          <div className="flex flex-wrap gap-2 text-sm text-indigo-300">
            <span className="rounded-full border border-indigo-500/40 px-3 py-1">{profile.location}</span>
            <span className="rounded-full border border-indigo-500/40 px-3 py-1">Open to internships</span>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="relative h-56 w-56 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-indigo-900/40">
            <Image src={profile.photo} alt={profile.name} fill className="object-cover" priority />
          </div>
        </div>
      </div>
    </section>
  );
}
