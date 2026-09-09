import { Link, useSearchParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { archives, archiveLabels } from "../content/archives";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";
import { NotFoundPage } from "./NotFoundPage";

export function ArchivePage({ locale, slug }: { locale: Locale; slug?: string }) {
  const labels = archiveLabels[locale];
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const category = requestedCategory === "design" || requestedCategory === "development" ? requestedCategory : "all";
  const topic = searchParams.get("topic") ?? "";
  const topics = [...new Set(archives.flatMap((entry) => entry.topic ? [entry.topic] : []))].sort();
  const filtered = archives.filter((entry) => (category === "all" || entry.category === category) && (category !== "development" || !topic || entry.topic === topic));
  if (slug) {
    const entry = archives.find((item) => item.slug === slug);
    if (!entry) return <NotFoundPage locale={locale} />;
    const copy = entry.content[locale];
    return (
      <SiteLayout locale={locale} pageTitle={copy.title}>
        <article className="archive-article">
          <Link className="archive-back" to={`/${locale}/archives?category=${entry.category}`}>← {labels.back}</Link>
          <header className="archive-heading">
            <p className="archive-meta">{copy.tags.join(" · ")}</p>
            <h1>{copy.title}</h1>
            <p className="archive-summary">{copy.summary}</p>
            {entry.source && <p className="archive-source"><a href={entry.source} target="_blank" rel="noreferrer">{labels.source} ↗</a>{locale === "en" && <span>{labels.original}</span>}</p>}
          </header>
          <div className="archive-body" lang={entry.category === "development" ? "ko" : locale}>
            {copy.markdown && <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeSanitize]} components={{
              img: ({ src, alt }) => <img src={src} alt={alt ?? ""} loading="lazy" decoding="async" />,
              table: ({ children }) => <div className="archive-table-scroll"><table>{children}</table></div>,
            }}>{copy.markdown}</Markdown>}
            {copy.heroImage && <figure className="archive-figure"><img src={copy.heroImage.src} alt={copy.heroImage.alt} loading="lazy" decoding="async" />{copy.heroImage.caption && <figcaption>{copy.heroImage.caption}</figcaption>}</figure>}
            {copy.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {copy.sections.map((section) => <section key={section.title}><h2>{section.title}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
          </div>
          <Link className="archive-back archive-end" to={`/${locale}/archives?category=${entry.category}`}>← {labels.back}</Link>
        </article>
      </SiteLayout>
    );
  }
  return (
    <SiteLayout locale={locale} pageTitle={labels.title}>
      <header className="page-intro"><p>{labels.description}</p></header>
      <nav className="archive-filters" aria-label={labels.title}>
        {(["all", "design", "development"] as const).map((value) => <Link key={value} to={value === "all" ? `/${locale}/archives` : `/${locale}/archives?category=${value}`} aria-current={category === value ? "page" : undefined}>{labels[value]} <span>{value === "all" ? archives.length : archives.filter((entry) => entry.category === value).length}</span></Link>)}
      </nav>
      {category === "development" && <label className="archive-topic"><span>{labels.topic}</span><span className="archive-topic-control"><select value={topic} onChange={(event) => setSearchParams(event.target.value ? { category, topic: event.target.value } : { category })}><option value="">{labels.allTopics}</option>{topics.map((value) => <option key={value} value={value}>{value} ({archives.filter((entry) => entry.topic === value).length})</option>)}</select><span aria-hidden="true">⌄</span></span></label>}
      <ul className="archive-list">
        {[...filtered].sort((a, b) => b.date.localeCompare(a.date)).map((entry) => {
          const copy = entry.content[locale];
          return <li key={entry.slug}><Link className="archive-entry" to={`/${locale}/archives/${entry.slug}`}>
            <div><p className="archive-meta">{copy.tags.join(" · ")}</p><h2>{copy.title}</h2><p className="archive-summary">{copy.summary}</p></div>
            <span className="archive-arrow" aria-hidden="true">↗</span>
          </Link></li>;
        })}
      </ul>
      {filtered.length === 0 && <p>{labels.empty}</p>}
    </SiteLayout>
  );
}
