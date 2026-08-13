import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const redirects = {
  "about.html": "/ko/about",
  "ada.html": "/ko/projects/ada",
  "exemble.html": "/ko/projects/exemble",
  "exemui.html": "/ko/projects/exemui",
  "koin.html": "/ko/projects/koin",
  "orbro.html": "/ko/projects/orbro",
  "safetybell.html": "/ko/projects/safetybell",
  "together.html": "/ko/projects/together",
};

for (const [file, path] of Object.entries(redirects)) {
  const canonical = `https://kwansik.com${path}`;
  const html = `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <meta http-equiv="refresh" content="0; url=${path}" />
    <link rel="canonical" href="${canonical}" />
    <title>페이지 이동 중 — Kwansik Nam</title>
    <script>window.location.replace(${JSON.stringify(path)});</script>
  </head>
  <body>
    <p><a href="${path}">새 페이지로 이동하기</a></p>
  </body>
</html>
`;
  await writeFile(resolve(root, "dist", file), html);
}

console.log(`Created ${Object.keys(redirects).length} legacy redirects.`);
