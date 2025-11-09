export interface Skill {
  name: string;
  icon: string; // Changed from IconType
  color: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description:string[];
  technologies: string[];
}

export interface NavLink {
  id: string;
  title: string;
}

export interface SocialLink {
  name: string;
  icon: string; // Changed from IconType
  url: string;
}