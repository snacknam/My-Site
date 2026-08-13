import aboutHtml from "../../about.html?raw";
import adaHtml from "../../ada.html?raw";
import exembleHtml from "../../exemble.html?raw";
import exemUiHtml from "../../exemui.html?raw";
import koinHtml from "../../koin.html?raw";
import orbroHtml from "../../orbro.html?raw";
import safetyBellHtml from "../../safetybell.html?raw";
import togetherHtml from "../../together.html?raw";

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

function contentBetween(source: string, start: string, end: string) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex);

  if (startIndex === -1 || endIndex === -1) {
    throw new Error(`Legacy content boundary not found: ${start}`);
  }

  return normalizeLegacyMarkup(source.slice(startIndex, endIndex));
}

export function getLegacyProjectMarkup(slug: string) {
  const source = projectSources[slug];
  return source ? contentBetween(source, '<div class="contents">', '<div class="footer">') : undefined;
}

export const legacyAboutMarkup = contentBetween(aboutHtml, '<div class="profile">', '<div class="footer">');
