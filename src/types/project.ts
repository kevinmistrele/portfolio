export interface Project {
  id: number;
  name: string;
  description: string;
  language: string | null;
  topics: string[];
  stars: number;
  repositoryUrl: string;
  homepageUrl: string | null;
  updatedAt: string;
  featured: boolean;
}
