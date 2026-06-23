import type { Project } from "@/types/project";
import { featuredProjectNames } from "@/data/featured-projects";
import { githubUsername } from "@/data/profile";

interface GithubRepository {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  html_url: string;
  homepage: string | null;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

const REPOSITORIES_ENDPOINT = `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`;

function mapRepositoryToProject(repository: GithubRepository): Project {
  return {
    id: repository.id,
    name: repository.name,
    description: repository.description ?? "",
    language: repository.language,
    topics: repository.topics ?? [],
    stars: repository.stargazers_count,
    repositoryUrl: repository.html_url,
    homepageUrl: repository.homepage ? repository.homepage : null,
    updatedAt: repository.updated_at,
    featured: featuredProjectNames.includes(repository.name),
  };
}

function isShowable(repository: GithubRepository): boolean {
  return !repository.fork && !repository.archived;
}

function sortByRelevance(first: Project, second: Project): number {
  if (first.featured !== second.featured) {
    return first.featured ? -1 : 1;
  }

  if (first.stars !== second.stars) {
    return second.stars - first.stars;
  }

  return second.updatedAt.localeCompare(first.updatedAt);
}

export async function fetchProjects(): Promise<Project[]> {
  const response = await fetch(REPOSITORIES_ENDPOINT, {
    headers: { Accept: "application/vnd.github+json" },
  });

  if (!response.ok) {
    throw new Error(`GitHub request failed with status ${response.status}`);
  }

  const repositories = (await response.json()) as GithubRepository[];

  return repositories
    .filter(isShowable)
    .map(mapRepositoryToProject)
    .sort(sortByRelevance);
}
