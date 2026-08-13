import type { Locale, Project } from "../types/content";

interface ProjectCardProps {
  locale: Locale;
  project: Project;
}

export function ProjectCard({ locale, project }: ProjectCardProps) {
  const content = project.content[locale];
  const media = project.media[locale];

  return (
    <article className="project-card">
      <a href={`/${project.slug}.html`}>
        <div className="project-image-frame">
          <img src={media.image} alt={media.alt} />
        </div>
        <div className="project-text">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
      </a>
    </article>
  );
}
