export type Profile = {
    name: string;
    title: string;
    location: string;
    summary: string;
    highlights: string[];
    photo: string;
};

export const profile: Profile = {
    name: 'Jaitnipat Wichitniti',
    title: 'Computer Engineering & Digital Technology Student',
    location: 'Bangkok, Thailand',
    summary:
        'I enjoy building fast, intuitive web experiences and pairing them with reliable backend services that can scale.',
    highlights: [
        'Comfortable across the JavaScript/TypeScript stack with React, Next.js, and Node.js.',
        'Hands-on with RESTful APIs, authentication, and database design for real-world projects.',
        'Curious about cloud deployments, CI/CD, and automation to ship confidently.'
    ],
    photo: '/profile.svg'
};

export type Project = {
    id: string;
    name: string;
    description: string;
    vertical: 'web' | 'backend' | 'iot';
    year: number;
    tags: string[];
    caseStudyUrl?: string;
};

export const projects: Project[] = [
    {
        id: 'portfolio-refresh',
        name: 'Personal Portfolio v2',
        description: 'Next.js portfolio with dark-theme UI, project filters, and contact routing.',
        vertical: 'web',
        year: 2025,
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        caseStudyUrl: '#contact'
    },
    {
        id: 'taskflow-api',
        name: 'TaskFlow API',
        description: 'Node.js and Express backend for a kanban-style task manager with JWT auth.',
        vertical: 'backend',
        year: 2024,
        tags: ['Express', 'PostgreSQL', 'Authentication'],
        caseStudyUrl: '#contact'
    },
    {
        id: 'smart-garden',
        name: 'Smart Garden Monitor',
        description: 'Arduino-powered sensor network with a web dashboard for soil and humidity alerts.',
        vertical: 'iot',
        year: 2023,
        tags: ['IoT', 'Dashboard', 'Real-time data'],
        caseStudyUrl: '#contact'
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
        category: 'Backend',
        items: ['GoFiber', 'Echo', 'Node.js', 'Express']
    }, {
        category: 'Databases',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
        category: 'DevOps',
        items: ['Git', 'Docker', 'Kubernetes', 'terraform', 'Postman', 'Figma']
    }, {
        category: 'Tools',
        items: ['Postman', 'Figma']
    }
];
