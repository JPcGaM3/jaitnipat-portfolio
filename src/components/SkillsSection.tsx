import { skills } from '../data';

export default function SkillsSection() {
  return (
    <section id="skills" className="border-t border-slate-800 bg-slate-950 py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6 text-slate-200">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Skills</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Languages, Frameworks and tools.</h2>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.category}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm shadow-indigo-900/20"
            >
              <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
              <ul className="mt-3 space-y-1 text-sm text-slate-300">
                {skill.items.map((item) => (
                  <li key={item}>◦ {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
