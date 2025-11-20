'use client';

import Link from 'next/link';
import type { Project } from '../lib/data';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg" role="listitem">
      <p className="text-sm font-semibold uppercase tracking-widest text-indigo-300">{project.year}</p>
      <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
      <p className="mt-4 text-sm text-slate-300">{project.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-400">
        {project.tags.map((tag) => (
          <li key={tag} className="rounded-full border border-slate-700 px-3 py-1">
            {tag}
          </li>
        ))}
      </ul>
      {project.caseStudyUrl && (
        <Link href={project.caseStudyUrl} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300">
          More detail <span aria-hidden="true">→</span>
        </Link>
      )}
    </article>
  );
}
