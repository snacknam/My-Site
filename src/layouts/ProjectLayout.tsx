import { SiteLayout } from "./SiteLayout";
import { ProjectMedia } from "../components/ProjectMedia";
import type { Locale, LocalizedProjectDetail } from "../types/content";

interface ProjectLayoutProps {
  locale: Locale;
  project: LocalizedProjectDetail;
}

export function ProjectLayout({ locale, project }: ProjectLayoutProps) {
  return (
    <SiteLayout locale={locale} pageTitle={`${project.name} — ${project.headline}`}>
      <article className="project-detail">
        <section className="project-detail-section project-detail-intro" aria-labelledby="project-title">
          <div className="project-detail-copy">
            <header>
              <h1 id="project-title">{project.name} <span aria-hidden="true">—</span> {project.headline}</h1>
              <p className="project-metadata">{project.metadata}</p>
            </header>
            <div className="project-body">
              {project.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <img src={project.cover.image} alt={project.cover.alt} fetchPriority="high" />
        </section>

        {project.sections.map((section) => (
          <section className="project-detail-section" key={section.id} aria-labelledby={`${section.id}-title`}>
            <div className="project-detail-copy">
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              <div className="project-body">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
            {section.image && <img src={section.image.image} alt={section.image.alt} loading="lazy" />}
            {section.media && section.media.length > 1 ? (
              <div className="project-media-grid">
                {section.media.map((item) => <ProjectMedia item={item} key={item.src} />)}
              </div>
            ) : section.media?.map((item) => <ProjectMedia item={item} key={item.src} />)}
          </section>
        ))}
      </article>
    </SiteLayout>
  );
}
