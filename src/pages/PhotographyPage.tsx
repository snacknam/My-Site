import { Link } from "react-router-dom";
import { photographs } from "../content/photography";
import { ui } from "../content/ui";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";

export function PhotographyPage({ locale }: { locale: Locale }) {
  const text = ui[locale].photography;
  return (
    <SiteLayout locale={locale} pageTitle={text.title}>
      <header className="page-intro"><h1>{text.title}</h1><p>{text.description}</p></header>
      {photographs.length === 0 ? <p className="empty-state">{text.empty}</p> : (
        <section className="photo-grid" aria-label={text.title}>
          {photographs.map((photo) => <Link to={`/${locale}/photography/${photo.slug}`} key={photo.slug}><img src={photo.image} width={photo.width} height={photo.height} alt={photo.alt[locale]} loading="lazy" /></Link>)}
        </section>
      )}
    </SiteLayout>
  );
}
