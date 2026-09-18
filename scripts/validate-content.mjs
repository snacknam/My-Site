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
const developmentEnglish = JSON.parse(readFileSync(resolve(root, "src/content/development.en.json"), "utf8"));
const codeBlocks = (markdown) => [...markdown.matchAll(/^(`{3,}|~{3,})[^\n]*\n([\s\S]*?)^\1[ \t]*$/gm)].map((match) => match[2]);
// These source fences contain Korean formulas or pseudocode, not runnable Swift.
// Their English equivalents are explicitly marked as text blocks.
const proseFences = {
  "dev-ios-한글-조사-입력하기": [0, 1, 3, 4, 5],
  "dev-swiftui-conditional-statementsif-else": [0, 2],
};
const executableCode = (markdown, slug) => codeBlocks(markdown).filter((_, index) => !proseFences[slug]?.includes(index)).map((block) => block.split("\n").map((line) => line.replace(/\/\/.*$/, "").trimEnd()).join("\n"));
const imagePaths = (markdown) => [...markdown.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)].map((match) => match[1]);
const developmentSlugs = new Set();
for (const post of development) {
  if (!post.slug || developmentSlugs.has(post.slug)) errors.push(`Duplicate or missing development slug: ${post.slug}`);
  developmentSlugs.add(post.slug);
  if (!post.title || !post.markdown || !post.topic || !/^\d{4}-\d{2}-\d{2}$/.test(post.date) || !post.source.startsWith("https://velog.io/@snack/")) errors.push(`Invalid development content: ${post.slug}`);
  const english = developmentEnglish[post.slug];
  if (!english?.title?.trim() || !english?.summary?.trim() || !english?.markdown?.trim()) {
    errors.push(`Missing English development translation: ${post.slug}`);
  } else {
    const prose = english.markdown.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[ \t]*$/gm, "");
    // Allow only the actual Korean syllables taught in the particle article.
    const proseToCheck = post.slug === "dev-ios-한글-조사-입력하기" ? prose.replace(/[이가힣]/g, "") : prose;
    if (/[가-힣]/.test(english.title + english.summary + proseToCheck)) errors.push(`Untranslated English archive text: ${post.slug}`);
    if (codeBlocks(post.markdown).length !== codeBlocks(english.markdown).length || JSON.stringify(executableCode(post.markdown, post.slug)) !== JSON.stringify(executableCode(english.markdown, post.slug))) errors.push(`Translation changed example code: ${post.slug}`);
    if (JSON.stringify(imagePaths(post.markdown)) !== JSON.stringify(imagePaths(english.markdown))) errors.push(`Translation changed example images: ${post.slug}`);
  }
  for (const match of post.markdown.matchAll(/\/image\/development\/[^\s\[\]()"'<>]+/g)) {
    if (!existsSync(resolve(root, match[0].slice(1)))) errors.push(`Missing development image: ${match[0]}`);
  }
}
for (const slug of Object.keys(developmentEnglish)) {
  if (!developmentSlugs.has(slug)) errors.push(`English translation has no Korean source: ${slug}`);
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
