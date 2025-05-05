export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  company: string;
  website: string;
  linkedin?: string;
}
