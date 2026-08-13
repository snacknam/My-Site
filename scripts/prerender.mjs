import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { render } from "../dist-ssr/entry-server.js";

const root = resolve(import.meta.dirname, "..");
const origin = "https://kwansik.com";
const projectMeta = {
  exemble: ["Exemble", "An on-premise LLM workflow platform for internal knowledge"],
  exemui: ["Exem UI", "A unified design and development library for internal products"],
  orbro: ["Orbro Design System", "A design system for a digital twin platform"],
  safetybell: ["Safety Bell", "An emergency reporting system designed with Gyeonggi Province"],
  ada: ["Apple Developer Academy", "iOS development projects and learning at Apple Developer Academy"],
  together: ["Together", "A household task-sharing service designed around empathy"],
  koin: ["Koin", "A usability redesign that made campus food ordering 44% faster"],
};

const routes = [
  ...["ko", "en"].flatMap((locale) => [
    { path: `/${locale}`, title: locale === "ko" ? "남관식 포트폴리오" : "Kwansik Nam Portfolio", description: locale === "ko" ? "기술을 이해하고 시스템을 설계하는 디자이너 남관식의 포트폴리오" : "Portfolio of Kwansik Nam, a product designer who understands technology and designs systems." },
    { path: `/${locale}/about`, title: locale === "ko" ? "소개 — 남관식" : "About — Kwansik Nam", description: locale === "ko" ? "프로덕트 디자이너 남관식의 경험과 경력" : "Experience and career of product designer Kwansik Nam." },
    { path: `/${locale}/photography`, title: "Photography — Kwansik Nam", description: locale === "ko" ? "일상에서 발견한 장면을 기록하는 사진 아카이브" : "A visual archive of moments found in everyday life." },
    ...Object.entries(projectMeta).map(([slug, [name, description]]) => ({ path: `/${locale}/projects/${slug}`, title: `${name} — Kwansik Nam`, description })),
  ]),
];

const template = await readFile(resolve(root, "dist/index.html"), "utf8");
const structuredData = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kwansik Nam",
  alternateName: "남관식",
  url: origin,
  jobTitle: "Product Designer",
});

for (const route of routes) {
  const locale = route.path.split("/")[1];
  const alternateLocale = locale === "ko" ? "en" : "ko";
  const alternatePath = route.path.replace(`/${locale}`, `/${alternateLocale}`);
  const canonical = `${origin}${route.path}`;
  const appHtml = render(route.path);
  const meta = `
    <meta name="description" content="${route.description}" />
    <link rel="canonical" href="${canonical}" />
    <link rel="alternate" hreflang="ko" href="${origin}${locale === "ko" ? route.path : alternatePath}" />
    <link rel="alternate" hreflang="en" href="${origin}${locale === "en" ? route.path : alternatePath}" />
    <link rel="alternate" hreflang="x-default" href="${origin}${locale === "ko" ? route.path : alternatePath}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${route.title}" />
    <meta property="og:description" content="${route.description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${origin}/image/main/exemble.jpg" />
    <meta property="og:locale" content="${locale === "ko" ? "ko_KR" : "en_US"}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${route.title}" />
    <meta name="twitter:description" content="${route.description}" />
    <meta name="twitter:image" content="${origin}/image/main/exemble.jpg" />
    <script type="application/ld+json">${structuredData}</script>`;
  const html = template
    .replace('<html lang="ko">', `<html lang="${locale}">`)
    .replace(/<meta name="description"[^>]*>\s*/g, "")
    .replace("<title>Kwansik Nam</title>", `${meta}\n    <title>${route.title}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  const directory = resolve(root, `dist${route.path}`);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), html);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${origin}${route.path}</loc></url>`).join("\n")}
</urlset>\n`;
await writeFile(resolve(root, "dist/sitemap.xml"), sitemap);
await rm(resolve(root, "dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered ${routes.length} localized routes.`);
