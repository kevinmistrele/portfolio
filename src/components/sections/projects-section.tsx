import { useLanguage } from "@/hooks/use-language";
import { useProjects } from "@/hooks/use-projects";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/ui/project-card";

const MAX_VISIBLE_PROJECTS = 9;

export function ProjectsSection() {
  const { translation } = useLanguage();
  const { projects: copy } = translation;
  const { projects, status } = useProjects();

  const visibleProjects = projects.slice(0, MAX_VISIBLE_PROJECTS);
  const hasProjects = visibleProjects.length > 0;

  return (
    <section id="projects" className="section projects">
      <SectionTitle index="03" title={copy.title} />
      <p className="projects__subtitle">{copy.subtitle}</p>

      {status === "loading" ? (
        <p className="projects__state">{copy.loading}</p>
      ) : null}

      {status === "error" ? (
        <p className="projects__state projects__state--error">{copy.error}</p>
      ) : null}

      {status !== "loading" && !hasProjects ? (
        <p className="projects__state">{copy.empty}</p>
      ) : null}

      {hasProjects ? (
        <div className="projects__grid">
          {visibleProjects.map(function renderProject(project) {
            return <ProjectCard key={project.id} project={project} />;
          })}
        </div>
      ) : null}
    </section>
  );
}
