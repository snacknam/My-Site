import { Link } from "react-router-dom";
import { getAlbumPhotos, photoAlbums, photographyLabels } from "../content/photography";
import { ui } from "../content/ui";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";
import { NotFoundPage } from "./NotFoundPage";

export function PhotographyPage({ locale, recent = false, albumSlug }: { locale: Locale; recent?: boolean; albumSlug?: string }) {
  const labels = photographyLabels[locale];
  const album = albumSlug ? photoAlbums.find((item) => item.slug === albumSlug) : undefined;
  if (albumSlug && !album) return <NotFoundPage locale={locale} />;
  const photos = getAlbumPhotos(albumSlug);
  const title = album?.title[locale] ?? (recent ? labels.recent : ui[locale].photography.title);

  return <SiteLayout locale={locale} pageTitle={title} wide>
    <header className="photo-gallery-heading">
      {album && <Link className="archive-back" to={`/${locale}/photography`}>← {labels.back}</Link>}
      <div><h1>{title}</h1><p>{photos.length}{labels.count}</p></div>
    </header>
    {photos.length === 0 ? <p className="photo-empty">{labels.empty}</p> : <section className="photo-grid" aria-label={title}>
      {photos.map((photo, index) => <Link to={`/${locale}/photography/${photo.slug}`} key={photo.slug}>
        <img src={photo.image} width={photo.width} height={photo.height} alt={photo.alt[locale]} loading={index < 3 ? "eager" : "lazy"} decoding="async" />
      </Link>)}
    </section>}
  </SiteLayout>;
}
