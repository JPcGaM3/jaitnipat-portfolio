import { experiences } from '../data';

export default function ExperienceSection() {
    return (
        <section id="experience" className="border-t border-slate-800 bg-slate-950 py-16">
            <div className="mx-auto max-w-4xl space-y-8 px-6 text-slate-200">
                <header className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Experiences</p>
                    {/* Refined Headline from our previous discussion */}
                    <h2 className="text-3xl font-semibold text-white">
                        A trajectory built on cross-functional partnerships.
                    </h2>
                </header>

                <ol className="space-y-6">
                    {experiences.map((experience, index) => (
                        <li
                            key={experience.id}
                            className={
                                index === 0
                                    ? 'rounded-2xl border border-slate-800 bg-slate-900/60 p-6' // First item highlight
                                    : 'rounded-2xl border border-slate-800 bg-slate-900/40 p-6'
                            }
                        >
                            <p className="text-xs uppercase tracking-[0.3em] text-indigo-300">
                                {experience.dates}
                            </p>
                            <h3 className="mt-2 text-xl font-semibold text-white">
                                {experience.role} · {experience.organization}
                            </h3>

                            {/* ✅ RESTORED: List rendering logic for bullet points */}
                            <ul className="mt-3 space-y-1 text-sm text-slate-300">
                                {Array.isArray(experience.summary) ? (
                                    experience.summary.map((item: string, idx: number) => (
                                        <li key={idx} className="flex gap-2">
                                            {/* Custom Bullet Point */}
                                            <span className="mt-0.5 select-none text-indigo-400">‣</span>
                                            <span>{item}</span>
                                        </li>
                                    ))
                                ) : (
                                    // Fallback if summary is a single string in your data
                                    <li className="flex gap-2">
                                        <span className="mt-0.5 select-none text-indigo-400">‣</span>
                                        <span>{experience.summary}</span>
                                    </li>
                                )}
                            </ul>

                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}