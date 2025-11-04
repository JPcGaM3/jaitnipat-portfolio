export interface PortfolioPerson {
  name: string;
  title: string;
  location: string;
  email: string;
  website: string;
}

export interface PortfolioSkill {
  category: string;
  items: string[];
}

export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  vertical: string;
  year: number;
  tags: string[];
  caseStudyUrl?: string;
}

export interface PortfolioExperience {
  role: string;
  organization: string;
  location: string;
  startDate: string;
  endDate?: string;
  accomplishments: string[];
}

export interface PortfolioAchievement {
  title: string;
  issuer: string;
  issuedOn: string;
}

export interface Portfolio {
  person: PortfolioPerson;
  summary: string;
  skills: PortfolioSkill[];
  projects: PortfolioProject[];
  experience: PortfolioExperience[];
  achievements: PortfolioAchievement[];
  updatedAt: string;
}
