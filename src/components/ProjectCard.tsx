import { Link } from "react-router-dom";
import type { Locale, Project } from "../types/content";

interface ProjectCardProps {
  locale: Locale;
  project: Project;
}

export function ProjectCard({ locale, project }: ProjectCardProps) {
  const content = project.content[locale];
  const media = project.media[locale];
  const cardContent = (
    <>
      <div className="project-image-frame">
        <img src={media.image} alt={media.alt} loading="lazy" />
      </div>
      <div className="project-text">
        <h2>{content.title}</h2>
        <p>{content.description}</p>
      </div>
    </>
  );

  return (
    <article className="project-card">
      {project.hasReactDetail ? (
        <Link to={`/${locale}/projects/${project.slug}`}>{cardContent}</Link>
      ) : (
        <a href={`/${project.slug}.html`}>{cardContent}</a>
      )}
    </article>
  );
}
