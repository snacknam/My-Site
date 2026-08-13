import { Link } from "react-router-dom";
import { ui } from "../content/ui";
import { defaultLocale } from "../i18n/locales";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";

interface NotFoundPageProps {
  locale?: Locale;
}

export function NotFoundPage({ locale = defaultLocale }: NotFoundPageProps) {
  const text = ui[locale].notFound;

  return (
    <SiteLayout locale={locale}>
      <section className="not-found" aria-labelledby="not-found-title">
        <p className="eyebrow">404</p>
        <h1 id="not-found-title">{text.title}</h1>
        <p>{text.description}</p>
        <Link className="text-link" to={`/${locale}`}>{text.action}</Link>
      </section>
    </SiteLayout>
  );
}
