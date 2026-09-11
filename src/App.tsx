import { useEffect, useRef } from "react";
import { Navigate, Route, Routes, useLocation, useNavigationType, useParams } from "react-router-dom";
import { defaultLocale, isLocale } from "./i18n/locales";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";
import { AboutPage } from "./pages/AboutPage";
import { PhotographyPage } from "./pages/PhotographyPage";
import { PhotoPage } from "./pages/PhotoPage";
import { ArchivePage } from "./pages/ArchivePage";
import { LegacyKoreanAboutPage, LegacyKoreanProjectPage } from "./pages/LegacyKoreanPage";

interface ScrollPosition {
  left: number;
  top: number;
}

interface ScrollHistoryState extends Record<string, unknown> {
  key?: string;
  scrollPosition?: ScrollPosition;
}

function ScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useEffect(() => {
    const savePosition = () => {
      const historyState = (window.history.state ?? {}) as ScrollHistoryState;
      if (historyState.key && historyState.key !== location.key) return;
      window.history.replaceState({
        ...historyState,
        scrollPosition: { left: window.scrollX, top: window.scrollY },
      }, "");
    };

    window.addEventListener("scroll", savePosition, { passive: true });
    document.addEventListener("click", savePosition, true);
    return () => {
      window.removeEventListener("scroll", savePosition);
      document.removeEventListener("click", savePosition, true);
    };
  }, [location.key]);

  useEffect(() => {
    const pathnameChanged = previousPathname.current === null || previousPathname.current !== location.pathname;
    previousPathname.current = location.pathname;
    if (!pathnameChanged) return;

    const historyState = (window.history.state ?? {}) as ScrollHistoryState;
    const savedPosition = navigationType === "POP" ? historyState.scrollPosition : undefined;
    const position = savedPosition ?? { left: 0, top: 0 };
    const restorePosition = () => window.scrollTo({ ...position, behavior: "auto" });

    if (!savedPosition) document.getElementById("main-content")?.focus({ preventScroll: true });
    restorePosition();

    const frame = window.requestAnimationFrame(restorePosition);
    const pendingImages = [...document.images].filter((image) => !image.complete);
    pendingImages.forEach((image) => {
      image.addEventListener("load", restorePosition);
      image.addEventListener("error", restorePosition);
    });

    return () => {
      window.cancelAnimationFrame(frame);
      pendingImages.forEach((image) => {
        image.removeEventListener("load", restorePosition);
        image.removeEventListener("error", restorePosition);
      });
    };
  }, [location.key, location.pathname, navigationType]);

  return null;
}

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

function LocalizedPhotographyRoute({ recent = false }: { recent?: boolean }) {
  const { locale, albumSlug } = useParams();
  return isLocale(locale) ? <PhotographyPage locale={locale} recent={recent} albumSlug={albumSlug} /> : <NotFoundPage />;
}

function LocalizedPhotoRoute() {
  const { locale, slug } = useParams();
  return isLocale(locale) && slug ? <PhotoPage locale={locale} slug={slug} /> : <NotFoundPage />;
}

function LocalizedArchiveRoute() {
  const { locale, slug } = useParams();
  return isLocale(locale) ? <ArchivePage locale={locale} slug={slug} /> : <NotFoundPage />;
}

export function App() {
  return (
    <>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Navigate to={`/${defaultLocale}`} replace />} />
        <Route path="/:locale" element={<LocalizedHomeRoute />} />
        <Route path="/:locale/projects/:slug" element={<LocalizedProjectRoute />} />
        <Route path="/:locale/about" element={<LocalizedAboutRoute />} />
        <Route path="/:locale/archives" element={<LocalizedArchiveRoute />} />
        <Route path="/:locale/archives/:slug" element={<LocalizedArchiveRoute />} />
        <Route path="/:locale/photography" element={<LocalizedPhotographyRoute />} />
        <Route path="/:locale/photography/recents" element={<LocalizedPhotographyRoute recent />} />
        <Route path="/:locale/photography/albums/:albumSlug" element={<LocalizedPhotographyRoute />} />
        <Route path="/:locale/photography/:slug" element={<LocalizedPhotoRoute />} />
        <Route path="/:locale/*" element={<LocalizedNotFoundRoute />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
