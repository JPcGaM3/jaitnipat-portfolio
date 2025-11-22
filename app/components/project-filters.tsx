'use client';

import clsx from 'clsx';

type FilterOption = {
  value: string;
  label: string;
};

interface ProjectFiltersProps {
  value: string;
  filters: FilterOption[];
  onChange: (value: string) => void;
}

export default function ProjectFilters({ value, filters, onChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          onClick={() => onChange(filter.value)}
          className={clsx(
            'rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition-colors',
            value === filter.value
              ? 'border-indigo-400 bg-indigo-500/20 text-indigo-200'
              : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
          )}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
