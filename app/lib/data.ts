export type Project = {
  id: string;
  name: string;
  description: string;
  vertical: 'saas' | 'consumer' | 'nonprofit';
  year: number;
  tags: string[];
  caseStudyUrl?: string;
};

export const projects: Project[] = [
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
];

export type Experience = {
  id: string;
  dates: string;
  role: string;
  organization: string;
  summary: string;
};

export const experiences: Experience[] = [
  {
    id: 'alloy',
    dates: '2022 — Present',
    role: 'Principal Product Designer',
    organization: 'Alloy',
    summary:
      'Leading design system strategy across squads, aligning designers and engineers on inclusive, scalable foundations.'
  },
  {
    id: 'brightside',
    dates: '2019 — 2022',
    role: 'Senior Product Designer',
    organization: 'Brightside',
    summary:
      'Shaped financial wellness journeys that lifted engagement by 50% through behavioral insight and iterative delivery.'
  }
];
