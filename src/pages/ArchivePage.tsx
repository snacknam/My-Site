import { Link, useSearchParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { archives, archiveLabels, developmentCollections, developmentTopics } from "../content/archives";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";
import { NotFoundPage } from "./NotFoundPage";

export function ArchivePage({ locale, slug }: { locale: Locale; slug?: string }) {
  const labels = archiveLabels[locale];
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedCategory = searchParams.get("category");
  const category = requestedCategory === "design" || requestedCategory === "development" ? requestedCategory : "all";
  const topic = searchParams.get("topic") ?? "";
  const topics = developmentTopics.filter((value) => archives.some((entry) => entry.topic === value));
  const topicItems = [
    { value: "all", label: labels.allTopics },
    ...topics.map((value) => ({ value, label: `${value} (${archives.filter((entry) => entry.topic === value).length})` })),
  ];
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
      <div className="archive-controls">
        <Tabs value={category}>
          <TabsList aria-label={labels.title}>
            {(["all", "design", "development"] as const).map((value) => (
              <TabsTrigger key={value} value={value} nativeButton={false} render={<Link to={value === "all" ? `/${locale}/archives` : `/${locale}/archives?category=${value}`} />}>
                {labels[value]} <span>{value === "all" ? archives.length : archives.filter((entry) => entry.category === value).length}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        {category === "development" && (
          <Select items={topicItems} value={topic || "all"} onValueChange={(value) => setSearchParams(!value || value === "all" ? { category } : { category, topic: value })}>
            <SelectTrigger className="archive-topic" aria-label={labels.topic}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {topicItems.map((item) => <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
            </SelectContent>
          </Select>
        )}
      </div>
      {category === "development" && !topic ? (
        <ul className="archive-collections">
          {developmentCollections.map((collection) => {
            const count = archives.filter((entry) => entry.topic === collection.topic).length;
            return <li key={collection.topic}>
              <Link className="archive-collection" to={`/${locale}/archives?category=development&topic=${encodeURIComponent(collection.topic)}`}>
                <div className="archive-collection-image"><img src={collection.image} alt={collection.alt[locale]} loading="lazy" decoding="async" /></div>
                <div className="archive-collection-copy">
                  <p>{collection.topic} · {count}</p>
                  <span>{collection.summary[locale]}</span>
                </div>
              </Link>
            </li>;
          })}
        </ul>
      ) : (
        <ul className="archive-list">
          {[...filtered].sort((a, b) => b.date.localeCompare(a.date)).map((entry) => {
            const copy = entry.content[locale];
            return <li key={entry.slug}><Link className="archive-entry" to={`/${locale}/archives/${entry.slug}`}>
              <div><p className="archive-meta">{copy.tags.join(" · ")}</p><h2>{copy.title}</h2><p className="archive-summary">{copy.summary}</p></div>
              <ArrowUpRightIcon className="archive-arrow" />
            </Link></li>;
          })}
        </ul>
      )}
      {filtered.length === 0 && <p className="empty-state">{labels.empty}</p>}
    </SiteLayout>
  );
}
