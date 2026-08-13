import { Link } from "react-router-dom";
import { ui } from "../content/ui";
import type { Locale } from "../types/content";

interface SiteNavigationProps {
  locale: Locale;
}

export function SiteNavigation({ locale }: SiteNavigationProps) {
  const text = ui[locale];
  const otherLocale = locale === "ko" ? "en" : "ko";

  return (
    <header className="site-navigation">
      <Link to={`/${locale}`} aria-label={text.navigation.projects}>
        <img src="/image/main/profile.svg" width="40" height="40" alt="Kwansik Nam" />
      </Link>
      <nav className="menu" aria-label="Primary navigation">
        <Link to={`/${locale}`}>{text.navigation.projects}</Link>
        <a href="https://velog.io/@snack" target="_blank" rel="noreferrer">{text.navigation.development}</a>
        <a href="/about.html">{text.navigation.about}</a>
        <Link to={`/${otherLocale}`} aria-label={text.languageLabel} className="language-switch">
          {text.navigation.language}
        </Link>
      </nav>
    </header>
  );
}
