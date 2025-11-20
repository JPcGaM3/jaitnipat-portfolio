export type Profile = {
  name: string;
  title: string;
  location: string;
  about: string;
  photo: string;
};

export const profile: Profile = {
  name: 'Jaitnipat Wichitniti',
  title: 'Computer Engineering Student & Full-stack Developer',
  location: 'Bangkok, Thailand',
  about:
    "Hello, I'm Yok. I am very interested in the work of a developer because this line of work is an important part of the development of technologies. Including helping to develop and solve various problems to make the quality of life and our world more progressive. I am actively seeking opportunities to make an impact in the evolving world of technology. I'm ready to learn new things and develop their skills to become even better in every aspect.",
  photo: '/profile.svg'
};

export type Project = {
  id: string;
  name: string;
  description: string;
  vertical: 'web' | 'backend' | 'iot';
  year: number;
  tags: string[];
  media?: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
  githubUrl?: string;
  youtubeUrl?: string;
};

export const projects: Project[] = [
  {
    id: 'portfolio-refresh',
    name: 'Personal Portfolio v2',
    description: 'Next.js portfolio with dark-theme UI, project filters, and in-page anchors for quick contact.',
    vertical: 'web',
    year: 2025,
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    media: {
      type: 'image',
      src: '/project-portfolio.svg',
      alt: 'Preview of the dark-themed portfolio homepage'
    },
    githubUrl: 'https://github.com/JPcGaM3/portfolio'
  },
  {
    id: 'taskflow-api',
    name: 'TaskFlow API',
    description: 'Node.js and Express backend for a kanban-style task manager with JWT auth.',
    vertical: 'backend',
    year: 2024,
    tags: ['Express', 'PostgreSQL', 'Authentication'],
    media: {
      type: 'image',
      src: '/project-taskflow.svg',
      alt: 'Dashboard diagram showing columns and API routes for TaskFlow'
    },
    githubUrl: 'https://github.com/JPcGaM3/taskflow-api'
  },
  {
    id: 'smart-garden',
    name: 'Smart Garden Monitor',
    description: 'Arduino-powered sensor network with a web dashboard for soil and humidity alerts.',
    vertical: 'iot',
    year: 2023,
    tags: ['IoT', 'Dashboard', 'Real-time data'],
    media: {
      type: 'image',
      src: '/project-smart-garden.svg',
      alt: 'Smart garden sensor node reporting soil and humidity data'
    },
    githubUrl: 'https://github.com/JPcGaM3/smart-garden-monitor',
    youtubeUrl: 'https://youtube.com/watch?v=demo-smart-garden'
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
    id: 'internship',
    dates: '2024 — Present',
    role: 'Full-stack Developer Intern',
    organization: 'Local product team',
    summary:
      'Built internal dashboards with Next.js and connected them to RESTful APIs, improving visibility for operations.'
  },
  {
    id: 'capstone',
    dates: '2023 — 2024',
    role: 'Capstone Lead · Computer Engineering',
    organization: 'Senior Project',
    summary:
      'Led a team to design and ship an IoT monitoring system, including firmware, data pipelines, and the user-facing UI.'
  },
  {
    id: 'club',
    dates: '2022 — 2023',
    role: 'Developer · Programming Club',
    organization: 'University',
    summary:
      'Organized coding workshops, mentored peers on Git workflows, and maintained shared template projects.'
  }
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: 'Languages & Frameworks',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js']
  },
  {
    category: 'Backend & Databases',
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Tools',
    items: ['Git', 'Docker', 'Postman', 'Figma']
  }
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  year: number;
  credentialUrl?: string;
};

export const certificates: Certificate[] = [
  {
    id: 'cloud-essentials',
    title: 'Cloud Practitioner Essentials',
    issuer: 'AWS Academy',
    year: 2024,
    credentialUrl: 'https://www.credly.com/badges/aws-academy-cloud-practitioner-essentials'
  },
  {
    id: 'responsive-web',
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    year: 2023,
    credentialUrl: 'https://www.freecodecamp.org/certification/jaitnipat/responsive-web-design'
  },
  {
    id: 'ai-fundamentals',
    title: 'AI for Everyone',
    issuer: 'Coursera · DeepLearning.AI',
    year: 2022,
    credentialUrl: 'https://coursera.org/verify/ai-for-everyone'
  }
];
