export type Profile = {
  name: string;
  title: string;
  location: string;
  about: string;
  photo: string;
};

export const profile: Profile = {
  name: 'Jaitnipat Wichitniti',
  title: 'Computer Engineering & Digital Technology Student',
  location: 'Bangkok, Thailand',
  about:
    "Hello, I'm Game. I am passionate about software development because I believe technology is the key to driving progress. I am dedicated to solving complex problems that improve quality of life and society. I am actively seeking opportunities to make a tangible impact in the tech industry and am eager to continuously learn and refine my skills.",
  photo: 'https://lh3.googleusercontent.com/d/1BHmDfSJh6Rxb2LRpmnY-tEPnv85Sifxe'
};

export type Experience = {
    id: string;
    dates: string;
    role: string;
    organization: string;
    summary: string[];
};

export const experiences: Experience[] = [
    {
        id: 'Capstone_year3_2025',
        dates: '2025 — Present',
        role: 'Full-stack Developer (Capstone Project)',
        organization: 'SCB Tech X Company Limited',
        summary: [
            "Designed and implemented the backend architecture for a banking-grade employee reward platform, from refining requirements with stakeholders to modelling database schema, workflows, and GraphQL APIs in Go.",
            "Deployed and operated the system on Azure (Container Apps, PostgreSQL, Redis, Blob Storage), including environment setup and load testing with Postman to ensure reliable performance."
        ]
    },
    {
        id: 'internship_year2_2025',
        dates: 'May 2025 — July 2025',
        role: 'Full-stack Developer (Intern)',
        organization: 'Mitr Phol Sugar Corporation Limited',
        summary:[
            'Developed the Agricultural Equipment Services web application using Next.js for resource management and work tracking across personnel, vehicles and tools',
            'Built RESTful backend with Node.js and Express and designed a scalable PostgreSQL database schema to support operational reporting and future system growth'
            ]
    },
    {
        id: 'internship_year1_2024',
        dates: 'May 2024 — July 2024',
        role: 'Full-stack Mobile Application Developer (Intern)',
        organization: 'FIN Insurance Broker Company Limited',
        summary:[
            'Developed the FIN Sales mobile application using React Native to drive sales growth and motivated internal teams by enabling consistent tracking and improvement of their sales performance through the app',
            'Implemented MySQL database for efficient customer data management and sales progress tracking'
            ]
    },
];

export type Project = {
    id: string;
    name: string;
    description: string[];
    vertical: 'Web' | 'IoT' | 'AI&ML';
    year: number;
    tags: string[];
    media?: {
        type: 'image' | 'video';
        src: string;
        alt: string;
    };
    githubUrl?: string;
    youtubeUrl?: string;
    linkUrl?: string;
};

export const projects: Project[] = [
    {
        id: 'portfolio-refresh',
        name: 'Personal Portfolio',
        description: ['React + Vite portfolio with dark-theme UI, project filters, and PWA-ready navigation.'],
        vertical: 'Web',
        year: 2025,
        tags: ['React', 'Vite', 'Tailwind CSS', 'PWA'],
        media: {
            type: 'image',
            src: '/project-portfolio.svg',
            alt: 'Preview of the dark-themed portfolio homepage'
        },
        githubUrl: 'https://github.com/JPcGaM3/portfolio'
    },
    {
        id: 'cbe-line-shopping-2024',
        name: 'CBE Line Shopping',
        description: [
            'Built a LINE LIFF-integrated webview that streamlines the purchasing process and simplifies data management for users',
            'Deployed using GitHub Actions with automated CI/CD to Google Cloud Platform, enabling scalable infrastructure and streamlined monitoring'
        ],
        vertical: 'Web',
        year: 2025,
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Echo', 'Go', 'PostgreSQL', 'Docker', 'Google Cloud'],
        media: {
            type: 'image',
            src: 'https://lh3.googleusercontent.com/d/14lDFw-dHnfcTAUcebLlTFEXNI6aNPraC',
            alt: 'Preview of cbe line shopping on instagram'
        },
        githubUrl: 'https://github.com/CBE-Technology-Team/cbe-website-2024',
        linkUrl: 'https://www.instagram.com/p/DF7jLCVSZL0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        id: 'cbe-website-2024',
        name: 'CBE Website',
        description: [
            'Developed a company website to showcase business information and services using Next.js',
            'Focused on component-based architecture and responsive layout'
        ],
        vertical: 'Web',
        year: 2025,
        tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        media: {
            type: 'video',
            src: 'https://drive.google.com/file/d/1HDpvLMKO7x4AZUg0Idhh0WAWoPY6FPHR/view?usp=sharing',
            alt: 'Preview of cbe website'
        },
        githubUrl: 'https://github.com/CBE-Technology-Team/cbe-website-2024'
    },
    {
        id: 'automate-plant-farm-system-2024',
        name: 'Automate Plant Farm System',
        description: [
            'Developed a smart plant monitoring and automation system using an Arduino-based setup to promote healthy plant growth through automatic watering and pest detection',
            'Integrated camera-based insect detection using YOLOv11, with instant alerts sent via LINE Notify',
            'Built a real-time monitoring web application using Next.js and Flask, with data stored and synced via Firebase Realtime Database'
        ],
        vertical: 'IoT',
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

export type Certificate = {
    id: string;
    title: string;
    issuer: string;
    year: number;
    credentialUrl?: string;
    image: {
        src: string;
        alt: string;
    };
};

export const certificates: Certificate[] = [
    {
        id: 'alibaba-operate-and-manage-cloud-server-2025',
        title: 'Cloud Computing Operate and Manage a Cloud Server',
        issuer: 'Alibaba Cloud',
        year: 2025,
        image: {
            src: 'https://lh3.googleusercontent.com/d/1LN6foiYJ-FhLdXrrwIGtKBs9b2B1AR9H',
            alt: 'Alibaba Cloud Certification - Cloud Computing Operate and Manage a Cloud Server'
        }
    },
    {
        id: 'alibaba-aca-business-user-cert-exam-2025',
        title: 'Alibaba Cloud Certified Associate Business User',
        issuer: 'Alibaba Cloud',
        year: 2025,
        image: {
            src: 'https://lh3.googleusercontent.com/d/1K1dz3ejW6rdnceOl-zU7jsy2XFzu-nI-',
            alt: 'Alibaba Cloud Certified Associate Business User'
        }
    },
    {
        id: 'team-aiimza-hackathon-2025',
        title: 'The Second Runner-Up Award for AIIMZA Hackathon',
        issuer: 'AIIMZA & AMSA Thailand',
        year: 2025,
        image: {
            src: 'https://lh3.googleusercontent.com/d/1uiyJlVyqvGv4hRNBDsiUm7B4Rjugm_W1',
            alt: 'The Second Runner-Up Award for AIIMZA Hackathon 2025 | Building with AI: Shaping the Future of Healthcare with Technology'
        }
    },
    {
        id: 'huawei-cloud-hccda-tech-essentials-2024',
        title: 'HCCDA-Tech Essentials',
        issuer: 'Huawei Cloud',
        year: 2024,
        image: {
            src: 'https://lh3.googleusercontent.com/d/1GDDPmPw30saPOUHa20jlbIyudrY25Vpz',
            alt: 'Huawei Cloud Certified - HCCDA-Tech Essentials certification'
        }
    }
];

export type Skill = {
    category: string;
    items: string[];
};

export const skills: Skill[] = [
    {
        category: 'Programming Languages',
        items: ['TypeScript', 'JavaScript', 'Go', 'Python', 'Cpp', 'C', 'Lua', 'Rust', 'Zig']
    },
    {
        category: 'Frontend',
        items: ['React', 'Next.js', 'React Native', 'Vite', 'Tailwind CSS']
    },
    {
        category: 'Backend & APIs',
        items: ['Go Fiber', 'Echo', 'Node.js', 'Express', 'GraphQL', 'REST APIs']
    },
    {
        category: 'Databases & Caching',
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
        category: 'AI & ML',
        items: [
            'Classical ML (regression, classification, clustering)',
            'scikit-learn',
            'XGBoost',
            'Computer vision (OpenCV, MediaPipe, EasyOCR)'
        ]
    },
    {
        category: 'IoT & Messaging',
        items: [
            'MQTT',
            'Kafka (event streaming basics)',
            'Raspberry Pi',
            'Arduino'
        ]
    },
    {
        category: 'DevOps & Cloud',
        items: [
            'Git',
            'Docker',
            'Kubernetes',
            'Terraform',
            'CI/CD (GitHub Actions)',
            'AWS',
            'Google Cloud',
            'Azure',
            'Huawei Cloud',
            'Alibaba Cloud'
        ]
    },
    {
        category: 'Tools & Design',
        items: ['Postman', 'Apidog', 'Figma', 'Photoshop', 'Premiere Pro']
    }
];
