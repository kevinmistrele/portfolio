import type { Project } from "@/types/project";
import { featuredProjectNames, fallbackProjects } from "@/data/featured-projects";
import { githubUsername } from "@/data/profile";

const curatedProjectsByName = new Map(
  fallbackProjects.map((project) => [project.name, project]),
);

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
  const curated = curatedProjectsByName.get(repository.name);
  const liveTopics = repository.topics ?? [];

  return {
    id: repository.id,
    name: repository.name,
    // Prefer curated copy so featured cards always show a polished
    // description, falling back to whatever GitHub provides.
    description: curated?.description || repository.description || "",
    language: repository.language ?? curated?.language ?? null,
    topics: liveTopics.length > 0 ? liveTopics : curated?.topics ?? [],
    stars: repository.stargazers_count,
    repositoryUrl: repository.html_url,
    homepageUrl: repository.homepage || curated?.homepageUrl || null,
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
