import { motion } from "framer-motion";
import type { Project } from "@/types/project";
import { useLanguage } from "@/hooks/use-language";

interface ProjectCardProps {
  project: Project;
}

function formatName(name: string): string {
  return name.replace(/[-_]/g, " ");
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { translation } = useLanguage();
  const { projects } = translation;

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -6 }}
    >
      <header className="project-card__header">
        <span className="project-card__folder" aria-hidden="true">
          {"</>"}
        </span>
        {project.featured ? (
          <span className="project-card__badge">{projects.featuredTag}</span>
        ) : null}
      </header>

      <h3 className="project-card__title">{formatName(project.name)}</h3>
      <p className="project-card__description">{project.description}</p>

      {project.topics.length > 0 ? (
        <ul className="project-card__topics">
          {project.topics.slice(0, 4).map(function renderTopic(topic) {
            return (
              <li key={topic} className="project-card__topic">
                {topic}
              </li>
            );
          })}
        </ul>
      ) : null}

      <footer className="project-card__footer">
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
      </footer>
    </motion.article>
  );
}
