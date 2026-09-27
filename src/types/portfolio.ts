export interface ProjectFlowStep {
  number: string;
  title: string;
  detail: string;
  tech?: string;
  accent?: boolean;
}

export interface Project {
  id: string;
  title: string;
  actLabel: string;
  tagline: string;
  description: string;
  technologies: string[];
  flowSteps?: ProjectFlowStep[];
  responsibilities?: string[];
  metrics?: { label: string; value: string }[];
  isFlagship?: boolean;
  githubUrl?: string;
  liveUrl?: string;
}

export interface JourneyStage {
  stageNumber: string;
  title: string;
  description: string;
  tagline?: string;
  isHorizon?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  badge?: string;
  highlight?: string;
  period?: string;
  description: string;
  responsibilities?: string[];
}

export interface EducationInfo {
  degree: string;
  major: string;
  institution: string;
  cgpa: string;
  graduationYear: string;
  location: string;
}

export interface ProfileInfo {
  name: string;
  roles: string[];
  headline: string;
  subheadline: string;
  editorialStatement: string;
  aboutStory: string[];
  education: EducationInfo;
  interests: string[];
  contact: {
    email: string;
    resumeUrl: string;
    location: string;
    status: string;
  };
}
