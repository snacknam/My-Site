import { Link, useLocation } from "react-router-dom";
import { ui } from "../content/ui";
import { getLocalizedPath } from "../i18n/locales";
import type { Locale } from "../types/content";

interface SiteNavigationProps {
  locale: Locale;
}

export function SiteNavigation({ locale }: SiteNavigationProps) {
  const text = ui[locale];
  const otherLocale = locale === "ko" ? "en" : "ko";
  const location = useLocation();
  const languagePath = getLocalizedPath(location.pathname, otherLocale);

  return (
    <header className="site-navigation">
      <Link to={`/${locale}`} aria-label={text.navigation.projects}>
        <img src="/image/main/profile.svg" width="40" height="40" alt="Kwansik Nam" />
      </Link>
      <nav className="menu" aria-label={text.primaryNavigationLabel}>
        <Link to={`/${locale}`}>{text.navigation.projects}</Link>
        <Link to={`/${locale}/photography`}>{text.navigation.photography}</Link>
        <a href="https://velog.io/@snack" target="_blank" rel="noreferrer">{text.navigation.development}</a>
        <Link to={`/${locale}/about`}>{text.navigation.about}</Link>
        <Link to={languagePath} aria-label={text.languageLabel} className="language-switch" lang={otherLocale}>
          {text.navigation.language}
        </Link>
      </nav>
    </header>
  );
}
