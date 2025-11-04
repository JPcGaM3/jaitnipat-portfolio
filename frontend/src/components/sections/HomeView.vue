<template>
  <LayoutShell>
    <HeroSection />
    <section id="projects" class="py-16">
      <div class="mx-auto max-w-5xl space-y-8">
        <header>
          <p class="text-sm uppercase tracking-[0.3em] text-indigo-300">Featured work</p>
          <h2 class="mt-2 text-3xl font-semibold">Recent projects</h2>
          <p class="mt-2 text-slate-300">
            Filter by the product vertical to see engagements across SaaS, nonprofit, and consumer spaces.
          </p>
        </header>
        <ProjectFilters :filters="filters" v-model="selectedFilter" />
        <div class="grid gap-6 md:grid-cols-2" role="list">
          <article
            v-for="project in filteredProjects"
            :key="project.id"
            class="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-lg"
            role="listitem"
          >
            <p class="text-sm font-semibold uppercase tracking-widest text-indigo-300">{{ project.year }}</p>
            <h3 class="mt-2 text-2xl font-semibold text-white">{{ project.name }}</h3>
            <p class="mt-4 text-sm text-slate-300">{{ project.description }}</p>
            <ul class="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-wide text-slate-400">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-slate-700 px-3 py-1"
              >
                {{ tag }}
              </li>
            </ul>
            <RouterLink
              :to="{ name: 'home' }"
              class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-300"
            >
              View case study
              <span aria-hidden="true">→</span>
            </RouterLink>
          </article>
        </div>
      </div>
    </section>
    <section id="experience" class="border-t border-slate-800 bg-slate-950 py-16">
      <div class="mx-auto max-w-4xl space-y-8 px-6 text-slate-200">
        <header class="space-y-3">
          <p class="text-sm uppercase tracking-[0.3em] text-indigo-300">Experience</p>
          <h2 class="text-3xl font-semibold text-white">A trajectory built on cross-functional partnerships.</h2>
        </header>
        <ol class="space-y-6">
          <li class="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <p class="text-xs uppercase tracking-[0.3em] text-indigo-300">2022 — Present</p>
            <h3 class="mt-2 text-xl font-semibold text-white">Principal Product Designer · Alloy</h3>
            <p class="mt-3 text-sm text-slate-300">
              Leading design system strategy across product squads, aligning designers and engineers on inclusive, scalable
              foundations.
            </p>
          </li>
          <li class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <p class="text-xs uppercase tracking-[0.3em] text-indigo-300">2019 — 2022</p>
            <h3 class="mt-2 text-xl font-semibold text-white">Senior Product Designer · Brightside</h3>
            <p class="mt-3 text-sm text-slate-300">
              Shaped financial wellness journeys that lifted engagement by 50% through behavioral insight and iterative delivery.
            </p>
          </li>
        </ol>
      </div>
    </section>
    <section id="contact" class="border-t border-slate-800 bg-slate-900/40 py-16">
      <div class="mx-auto flex max-w-4xl flex-col gap-8 px-6 text-slate-200 md:flex-row md:items-center">
        <div class="md:w-2/3 space-y-4">
          <p class="text-sm uppercase tracking-[0.3em] text-indigo-300">Contact</p>
          <h2 class="text-3xl font-semibold text-white">Let's build the next chapter together.</h2>
          <p>
            Share a bit about your product, team, and timeline. I'll respond within two business days with next steps.
          </p>
        </div>
        <div class="flex-1 space-y-3 text-sm">
          <a href="mailto:hello@example.com" class="block font-semibold text-indigo-300">hello@example.com</a>
          <a href="https://example.com" class="block text-slate-300" target="_blank" rel="noopener">example.com</a>
          <p class="text-slate-400">Based in Remote · Available for fractional or project engagements.</p>
        </div>
      </div>
    </section>
  </LayoutShell>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { usePortfolioStore } from '../../store/portfolio';
import LayoutShell from '../layout/LayoutShell.vue';
import HeroSection from './HeroSection.vue';
import ProjectFilters from './ProjectFilters.vue';

const store = usePortfolioStore();
const selectedFilter = ref('all');

const filters = computed(() => [
  { value: 'all', label: 'All' },
  ...store.projectsVerticals
]);

const filteredProjects = computed(() => {
  if (selectedFilter.value === 'all') return store.projects;
  return store.projects.filter((project) => project.vertical === selectedFilter.value);
});
</script>
