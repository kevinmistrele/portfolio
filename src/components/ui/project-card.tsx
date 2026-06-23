import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { useLanguage } from "@/hooks/use-language";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

function formatName(name: string): string {
  return name.replace(/[-_]/g, " ");
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { translation } = useLanguage();
  const { projects } = translation;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -6, scale: 1.01 }}
      className="h-full"
    >
      <Card
        className={cn(
          "h-full flex flex-col ring-0 border border-[var(--color-border)]",
          "bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg-soft)]",
          "transition-all duration-[0.25s] hover:border-[var(--color-primary)]",
          "hover:shadow-[0_20px_50px_-20px_rgba(94,234,212,0.55)]",
        )}
      >
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <span
            className="font-mono text-[1.3rem] text-[var(--color-primary)]"
            aria-hidden="true"
          >
            {"</>"}
          </span>
          {project.featured ? (
            <Badge
              variant="secondary"
              className="bg-[rgba(99,102,241,0.18)] text-[#a5b4fc] border-0 uppercase text-[0.7rem] tracking-[0.05em] font-bold"
            >
              {projects.featuredTag}
            </Badge>
          ) : null}
        </CardHeader>

        <CardContent className="flex flex-col gap-3 flex-1 pb-3">
          <h3 className="project-card__title">{formatName(project.name)}</h3>
          <p className="project-card__description">{project.description}</p>

          {project.topics.length > 0 ? (
            <ul className="flex flex-wrap gap-1 list-none m-0 p-0">
              {project.topics.slice(0, 4).map(function renderTopic(topic) {
                return (
                  <li key={topic}>
                    <Badge
                      variant="outline"
                      className="text-[var(--color-primary)] bg-[rgba(94,234,212,0.1)] border-0 text-[0.72rem] rounded-[6px]"
                    >
                      {topic}
                    </Badge>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </CardContent>

        <CardFooter className="flex items-center justify-between gap-2 border-t border-[var(--color-border)] bg-transparent mt-auto">
          <div className="project-card__meta">
            {project.language ? (
              <span className="project-card__language">{project.language}</span>
            ) : null}
            <span className="project-card__stars">★ {project.stars}</span>
          </div>

          <div className="project-card__links">
            <a
              className="project-card__link"
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
            >
              {projects.viewRepo}
            </a>
            {project.homepageUrl ? (
              <a
                className="project-card__link project-card__link--primary"
                href={project.homepageUrl}
                target="_blank"
                rel="noreferrer"
              >
                {projects.viewLive}
              </a>
            ) : null}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
