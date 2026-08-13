import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sourceFiles = [
  "src/content/projects.ts",
  "src/content/projectDetails/safetybell.ts",
  "src/content/projectDetails/exemble.ts",
  "src/content/projectDetails/simpleProjects.ts",
  "src/content/about.ts",
  "src/content/photography.ts",
];

const errors = [];
const assetPattern = /["'](\/image\/[^"']+|\/CV\.pdf)["']/g;
const legacyFiles = ["about.html", "ada.html", "exemble.html", "exemui.html", "koin.html", "orbro.html", "safetybell.html", "together.html"];

for (const sourceFile of sourceFiles) {
  const absoluteSource = resolve(root, sourceFile);
  if (!existsSync(absoluteSource)) {
    errors.push(`Missing content file: ${sourceFile}`);
    continue;
  }

  const source = readFileSync(absoluteSource, "utf8");
  if (!source.includes("Locale") && (!source.includes("ko") || !source.includes("en"))) {
    errors.push(`Content must include both ko and en: ${sourceFile}`);
  }

  for (const match of source.matchAll(assetPattern)) {
    const asset = match[1].slice(1);
    if (!existsSync(resolve(root, asset))) errors.push(`Missing asset in ${sourceFile}: /${asset}`);
  }
}

for (const legacyFile of legacyFiles) {
  const source = readFileSync(resolve(root, legacyFile), "utf8");
  const normalizedSource = source.replaceAll('src="./', 'src="/').replaceAll('href="./', 'href="/');
  for (const match of normalizedSource.matchAll(assetPattern)) {
    const asset = match[1].slice(1);
    if (!existsSync(resolve(root, asset))) errors.push(`Missing asset in ${legacyFile}: /${asset}`);
  }
}

for (const font of ["Light", "Regular", "SemiBold"]) {
  const fontPath = `Pretendard/web/static/woff2/Pretendard-${font}.woff2`;
  if (!existsSync(resolve(root, fontPath))) errors.push(`Missing font: ${fontPath}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated bilingual content, ${legacyFiles.length} original Korean pages, fonts, and referenced assets.`);
