export interface Project {
  name: string;
  icon: string;
  href: string;
  description: string;
  keywords: string[];
  technologies: {
    name: string;
    icon: string;
    purpose: string;
  }[];
}
