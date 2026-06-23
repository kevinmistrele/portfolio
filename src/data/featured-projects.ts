import type { Project } from "@/types/project";

export const featuredProjectNames: string[] = [
  "portfolio",
  "multi-agent-orchestration",
  "design-system",
];

export const fallbackProjects: Project[] = [
  {
    id: 1,
    name: "portfolio",
    description:
      "Interactive 3D portfolio built with React, Three.js and TypeScript, featuring live GitHub previews and multi-language support.",
    language: "TypeScript",
    topics: ["react", "three-js", "typescript", "portfolio"],
    stars: 0,
    repositoryUrl: "https://github.com/kevinmistrele/portfolio",
    homepageUrl: "https://kevinmistrele.github.io/portfolio",
    updatedAt: new Date().toISOString(),
    featured: true,
  },
  {
    id: 2,
    name: "multi-agent-orchestration",
    description:
      "Custom multi-agent pipeline that investigates issues, implements clean code, runs automated reviews and opens pull requests.",
    language: "TypeScript",
    topics: ["ai", "agents", "automation", "developer-tools"],
    stars: 0,
    repositoryUrl: "https://github.com/kevinmistrele",
    homepageUrl: null,
    updatedAt: new Date().toISOString(),
    featured: true,
  },
];
