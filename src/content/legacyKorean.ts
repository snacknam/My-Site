import aboutHtml from "./legacy/about.html?raw";
import adaHtml from "./legacy/ada.html?raw";
import exembleHtml from "./legacy/exemble.html?raw";
import exemUiHtml from "./legacy/exemui.html?raw";
import koinHtml from "./legacy/koin.html?raw";
import orbroHtml from "./legacy/orbro.html?raw";
import safetyBellHtml from "./legacy/safetybell.html?raw";
import togetherHtml from "./legacy/together.html?raw";

const projectSources: Record<string, string> = {
  ada: adaHtml,
  exemble: exembleHtml,
  exemui: exemUiHtml,
  koin: koinHtml,
  orbro: orbroHtml,
  safetybell: safetyBellHtml,
  together: togetherHtml,
};

function normalizeLegacyMarkup(markup: string) {
  return markup
    .replaceAll('src="./', 'src="/')
    .replaceAll('href="./', 'href="/')
    .replaceAll('target="_blank"', 'target="_blank" rel="noreferrer"');
}

export function getLegacyProjectMarkup(slug: string) {
  const source = projectSources[slug];
  return source ? normalizeLegacyMarkup(source) : undefined;
}

export const legacyAboutMarkup = normalizeLegacyMarkup(aboutHtml);
