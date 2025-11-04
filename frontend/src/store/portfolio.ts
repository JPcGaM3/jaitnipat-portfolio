import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { PortfolioProject } from '@shared/models/portfolio';

export const usePortfolioStore = defineStore('portfolio', () => {
  const projects = ref<PortfolioProject[]>([
    {
      id: 'atlas-analytics',
      name: 'Atlas Analytics Platform',
      description: 'Redesigned analytics platform with activation-focused onboarding.',
      vertical: 'saas',
      year: 2024,
      tags: ['Design systems', 'Onboarding', 'Data visualization'],
      caseStudyUrl: '#'
    },
    {
      id: 'wanderly',
      name: 'Wanderly Travel Companion',
      description: 'Shaped the product vision and prototypes for an award-winning travel companion.',
      vertical: 'consumer',
      year: 2023,
      tags: ['Motion design', 'Prototyping', 'Brand system'],
      caseStudyUrl: '#'
    },
    {
      id: 'neighborly',
      name: 'Neighborly Mutual Aid',
      description: 'Launched a multilingual platform connecting volunteers with urgent community needs.',
      vertical: 'nonprofit',
      year: 2022,
      tags: ['Accessibility', 'Localization', 'Service design'],
      caseStudyUrl: '#'
    }
  ]);

  const projectsVerticals = computed(() => {
    const values = Array.from(new Set(projects.value.map((project) => project.vertical)));
    return values.map((value) => ({
      value,
      label: value.charAt(0).toUpperCase() + value.slice(1)
    }));
  });

  return {
    projects,
    projectsVerticals
  };
});
