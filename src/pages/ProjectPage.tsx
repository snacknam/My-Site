import { getProjectDetail } from "../content/projectDetails";
import { ProjectLayout } from "../layouts/ProjectLayout";
import type { Locale } from "../types/content";
import { NotFoundPage } from "./NotFoundPage";

interface ProjectPageProps {
  locale: Locale;
  slug: string;
}

export function ProjectPage({ locale, slug }: ProjectPageProps) {
  const project = getProjectDetail(slug);

  if (!project) {
    return <NotFoundPage locale={locale} />;
  }

  return <ProjectLayout locale={locale} project={project.content[locale]} />;
}
