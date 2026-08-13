import { Navigate, useParams } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";
import { SeoulClock } from "../components/SeoulClock";
import { SiteNavigation } from "../components/SiteNavigation";
import { projects } from "../content/projects";
import { ui } from "../content/ui";
import type { Locale } from "../types/content";

function isLocale(value: string | undefined): value is Locale {
  return value === "ko" || value === "en";
}

export function HomePage() {
  const { locale } = useParams();

  if (!isLocale(locale)) {
    return <Navigate to="/ko" replace />;
  }

  const text = ui[locale];
  document.documentElement.lang = locale;

  return (
    <div className="site-shell">
      <SiteNavigation locale={locale} />
      <main>
        <section className="hero">
          <div>
            {text.introduction.map((line, index) => <h1 key={line} style={{ animationDelay: `${index * 0.1}s` }}>{line}</h1>)}
            <SeoulClock />
          </div>
        </section>
        <section className="projects" aria-label={text.navigation.projects}>
          {projects.map((project) => <ProjectCard key={project.slug} project={project} locale={locale} />)}
        </section>
      </main>
      <footer className="site-footer">
        <p>ⓒ Kwansik Nam 2026</p>
        <div className="menu">
          <a href={`/${locale}`}>{text.navigation.projects}</a>
          <a href="https://velog.io/@snack" target="_blank" rel="noreferrer">{text.navigation.development}</a>
          <a href="/about.html">{text.navigation.about}</a>
        </div>
      </footer>
    </div>
  );
}
