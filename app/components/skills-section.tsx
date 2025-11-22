import { skills } from '../lib/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-800 bg-slate-900/30 py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-slate-200">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Skills</p>
          <h2 className="text-3xl font-semibold text-white">Technologies I work with</h2>
          {/*<p className="text-slate-300">A mix of frontend, backend, and tooling that I use to ship full-stack products.</p>*/}
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.category} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 shadow-inner">
              <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
