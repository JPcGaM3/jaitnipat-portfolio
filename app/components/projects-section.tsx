'use client';

import { useMemo, useState } from 'react';
import ProjectFilters from './project-filters';
import ProjectCard from './project-card';
import { projects } from '../lib/data';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const filters = useMemo(
    () => [
      { value: 'all', label: 'All' },
      ...Array.from(new Set(projects.map((project) => project.vertical))).map((value) => ({
        value,
        label: value.charAt(0).toUpperCase() + value.slice(1)
      }))
    ],
    []
  );

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return projects;
    return projects.filter((project) => project.vertical === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-5xl space-y-8 px-6">
        <header>
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-300">Featured work</p>
          <h2 className="mt-2 text-3xl font-semibold">Recent projects</h2>
          <p className="mt-2 text-slate-300">
            Explore web, backend, and IoT work that shows how I connect the full stack from UI to deployment-ready services.
          </p>
        </header>
        <ProjectFilters value={filter} filters={filters} onChange={setFilter} />
        <div className="grid gap-6 md:grid-cols-2" role="list">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
