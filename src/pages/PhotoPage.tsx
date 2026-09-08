import { Link } from "react-router-dom";
import { getPhotograph, photographyLabels } from "../content/photography";
import { SiteLayout } from "../layouts/SiteLayout";
import type { Locale } from "../types/content";
import { NotFoundPage } from "./NotFoundPage";

export function PhotoPage({ locale, slug }: { locale: Locale; slug: string }) {
  const photo = getPhotograph(slug);
  if (!photo) return <NotFoundPage locale={locale} />;
  return <SiteLayout locale={locale} pageTitle="Photography"><article className="photo-detail"><Link className="archive-back" to={`/${locale}/photography`}>← {photographyLabels[locale].back}</Link><img src={photo.image} width={photo.width} height={photo.height} alt={photo.alt[locale]} /></article></SiteLayout>;
}
