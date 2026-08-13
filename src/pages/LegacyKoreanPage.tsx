import { getLegacyProjectMarkup, legacyAboutMarkup } from "../content/legacyKorean";
import { getProjectDetail } from "../content/projectDetails";
import { SiteLayout } from "../layouts/SiteLayout";
import { NotFoundPage } from "./NotFoundPage";

export function LegacyKoreanProjectPage({ slug }: { slug: string }) {
  const markup = getLegacyProjectMarkup(slug);
  const project = getProjectDetail(slug)?.content.ko;

  if (!markup || !project) return <NotFoundPage locale="ko" />;

  return (
    <SiteLayout locale="ko" pageTitle={`${project.name} — ${project.headline}`}>
      <div className="legacy-project" dangerouslySetInnerHTML={{ __html: markup }} />
    </SiteLayout>
  );
}

export function LegacyKoreanAboutPage() {
  return (
    <SiteLayout locale="ko" pageTitle="안녕하세요, 디자이너 남관식입니다">
      <div className="legacy-about" dangerouslySetInnerHTML={{ __html: legacyAboutMarkup }} />
    </SiteLayout>
  );
}
