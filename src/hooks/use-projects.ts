import { useEffect, useState } from "react";
import type { Project } from "@/types/project";
import { fetchProjects } from "@/services/github-service";
import { fallbackProjects } from "@/data/featured-projects";

type ProjectsStatus = "loading" | "success" | "error";

interface UseProjectsResult {
  projects: Project[];
  status: ProjectsStatus;
}

export function useProjects(): UseProjectsResult {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<ProjectsStatus>("loading");

  useEffect(() => {
    let isActive = true;

    async function loadProjects() {
      try {
        const result = await fetchProjects();
        if (!isActive) {
          return;
        }
        setProjects(result);
        setStatus("success");
      } catch {
        if (!isActive) {
          return;
        }
        setProjects(fallbackProjects);
        setStatus("error");
      }
    }

    loadProjects();

    return () => {
      isActive = false;
    };
  }, []);

  return { projects, status };
}
