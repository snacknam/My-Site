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

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Validated ${sourceFiles.length} bilingual content files and their referenced assets.`);
