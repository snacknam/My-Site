import { ProjectCard } from "../components/ProjectCard";
import { SeoulClock } from "../components/SeoulClock";
import { projects } from "../content/projects";
import { ui } from "../content/ui";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";

interface HomePageProps {
  locale: Locale;
}

export function HomePage({ locale }: HomePageProps) {
  const text = ui[locale];

  return (
    <SiteLayout locale={locale}>
      <section className="hero">
        <div>
          {text.introduction.map((line, index) => (
            <h1 key={line} style={{ animationDelay: `${index * 0.1}s` }}>{line}</h1>
          ))}
          <SeoulClock />
        </div>
      </section>
      <section className="projects" aria-label={text.navigation.projects}>
        {projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}
      </section>
    </SiteLayout>
  );
}
