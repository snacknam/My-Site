import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { defaultLocale, isLocale } from "./i18n/locales";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";
import { AboutPage } from "./pages/AboutPage";
import { PhotographyPage } from "./pages/PhotographyPage";
import { PhotoPage } from "./pages/PhotoPage";
import { LegacyKoreanAboutPage, LegacyKoreanProjectPage } from "./pages/LegacyKoreanPage";

function LocalizedHomeRoute() {
  const { locale } = useParams();

  if (!isLocale(locale)) {
    return <NotFoundPage />;
  }

  return <HomePage locale={locale} />;
}

function LocalizedNotFoundRoute() {
  const { locale } = useParams();
  return <NotFoundPage locale={isLocale(locale) ? locale : defaultLocale} />;
}

function LocalizedProjectRoute() {
  const { locale, slug } = useParams();

  if (!isLocale(locale) || !slug) {
    return <NotFoundPage locale={isLocale(locale) ? locale : defaultLocale} />;
  }

  return locale === "ko" ? <LegacyKoreanProjectPage slug={slug} /> : <ProjectPage locale={locale} slug={slug} />;
}

function LocalizedAboutRoute() {
  const { locale } = useParams();
  if (!isLocale(locale)) return <NotFoundPage />;
  return locale === "ko" ? <LegacyKoreanAboutPage /> : <AboutPage locale={locale} />;
}

function LocalizedPhotographyRoute() {
  const { locale } = useParams();
  return isLocale(locale) ? <PhotographyPage locale={locale} /> : <NotFoundPage />;
}

function LocalizedPhotoRoute() {
  const { locale, slug } = useParams();
  return isLocale(locale) && slug ? <PhotoPage locale={locale} slug={slug} /> : <NotFoundPage />;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${defaultLocale}`} replace />} />
      <Route path="/:locale" element={<LocalizedHomeRoute />} />
      <Route path="/:locale/projects/:slug" element={<LocalizedProjectRoute />} />
      <Route path="/:locale/about" element={<LocalizedAboutRoute />} />
      <Route path="/:locale/photography" element={<LocalizedPhotographyRoute />} />
      <Route path="/:locale/photography/:slug" element={<LocalizedPhotoRoute />} />
      <Route path="/:locale/*" element={<LocalizedNotFoundRoute />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
