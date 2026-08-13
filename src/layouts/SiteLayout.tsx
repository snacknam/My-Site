import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { SiteNavigation } from "../components/SiteNavigation";
import { ui } from "../content/ui";
import type { Locale } from "../types/content";

interface SiteLayoutProps {
  children: ReactNode;
  locale: Locale;
  pageTitle?: string;
}

export function SiteLayout({ children, locale, pageTitle }: SiteLayoutProps) {
  const text = ui[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = pageTitle ? `${pageTitle} — Kwansik Nam` : "Kwansik Nam";
  }, [locale, pageTitle]);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{text.skipToContent}</a>
      <SiteNavigation locale={locale} />
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <p>ⓒ Kwansik Nam 2026</p>
        <nav className="menu" aria-label={text.footerNavigationLabel}>
          <Link to={`/${locale}`}>{text.navigation.projects}</Link>
          <Link to={`/${locale}/photography`}>{text.navigation.photography}</Link>
          <a href="https://velog.io/@snack" target="_blank" rel="noreferrer">{text.navigation.development}</a>
          <Link to={`/${locale}/about`}>{text.navigation.about}</Link>
        </nav>
      </footer>
    </div>
  );
}
