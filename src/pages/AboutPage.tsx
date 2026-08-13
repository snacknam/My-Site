import { aboutContent } from "../content/about";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";

export function AboutPage({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];
  return (
    <SiteLayout locale={locale} pageTitle={content.title}>
      <section className="about-hero">
        <img src="/image/about/profile.jpg" alt={locale === "ko" ? "남관식 프로필" : "Portrait of Kwansik Nam"} />
        <div className="about-overview">
          <h1>{content.title}</h1>
          <div>{content.introduction.map((line) => <p key={line}>{line}</p>)}</div>
          <div className="social-links">
            <a className="primary-button" href="/CV.pdf" download>{content.resumeLabel}</a>
            <a href="https://www.linkedin.com/in/kwansiknam/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><img src="/image/about/linkedin.png" alt="" /></a>
            <a href="https://github.com/snacknam" target="_blank" rel="noreferrer" aria-label="GitHub"><img src="/image/about/github.png" alt="" /></a>
          </div>
        </div>
      </section>
      <section className="career-timeline" aria-label={locale === "ko" ? "경력" : "Career timeline"}>
        {content.timeline.map((group) => (
          <div className="career-year" key={group.year}>
            <h2>{group.year}</h2>
            <div>{group.items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}
