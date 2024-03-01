// job.model.ts

export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: Requirement;
  role: Role;
}

export interface Requirement {
  content: string;
  items: string[];
}

export interface Role {
  content: string;
  items: string[];
}
