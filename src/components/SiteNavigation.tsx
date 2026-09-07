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
          <Link to={`/${locale}/archives`}>{text.navigation.archives}</Link>
        <Link to={`/${locale}/about`}>{text.navigation.about}</Link>
        <Link to={languagePath} aria-label={text.languageLabel} className="language-switch" lang={otherLocale}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4374 7.52016L18.5503 17.746L17.5664 18.2379L16.1053 15.3156H10.7695L9.30836 18.2379L8.32449 17.746L13.4374 7.52016ZM11.3195 14.2156H15.5553L13.4374 9.97983L11.3195 14.2156Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1.6374 3.35625H6.95615V3.90625C6.95615 5.94795 5.93239 8.99338 2.40405 10.5055L1.89852 10.7222L1.46521 9.71112L1.97074 9.49447C4.69415 8.32729 5.65888 6.12952 5.82793 4.45625H1.6374V3.35625Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9.2999 1.95V6.16875H11.1749V7.26875H9.2999V12.8937H8.19989V1.95H9.2999Z" fill="currentColor" />
          </svg>
        </Link>
      </nav>
    </header>
  );
}
