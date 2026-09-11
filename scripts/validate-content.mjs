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
  "src/content/archives.ts",
];

const errors = [];
const development = JSON.parse(readFileSync(resolve(root, "src/content/development.json"), "utf8"));
const developmentSlugs = new Set();
for (const post of development) {
  if (!post.slug || developmentSlugs.has(post.slug)) errors.push(`Duplicate or missing development slug: ${post.slug}`);
  developmentSlugs.add(post.slug);
  if (!post.title || !post.markdown || !post.topic || !/^\d{4}-\d{2}-\d{2}$/.test(post.date) || !post.source.startsWith("https://velog.io/@snack/")) errors.push(`Invalid development content: ${post.slug}`);
  for (const match of post.markdown.matchAll(/\/image\/development\/[^\s\[\]()"'<>]+/g)) {
    if (!existsSync(resolve(root, match[0].slice(1)))) errors.push(`Missing development image: ${match[0]}`);
  }
}
const assetPattern = /["'](\/image\/[^"']+|\/CV\.pdf)["']/g;
const legacyFiles = ["about", "ada", "exemble", "exemui", "koin", "orbro", "safetybell", "together"]
  .map((name) => `src/content/legacy/${name}.html`);

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
  const fontPath = `public/fonts/Pretendard-${font}.woff2`;
  if (!existsSync(resolve(root, fontPath))) errors.push(`Missing font: ${fontPath}`);
}

for (const clockIcon of ["sun", "moon"]) {
  const iconPath = `image/main/${clockIcon}.svg`;
  if (!existsSync(resolve(root, iconPath))) errors.push(`Missing Seoul clock icon: ${iconPath}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated bilingual content, ${legacyFiles.length} Korean content fragments, fonts, and referenced assets.`);
