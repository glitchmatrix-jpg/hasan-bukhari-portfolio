import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

const requiredRouteFiles = [
  "src/routes/build/index.tsx",
  "src/routes/research/index.tsx",
  "src/routes/write/index.tsx",
  "src/routes/about.tsx",
  "src/routes/resume.tsx",
  "src/routes/contact.tsx",
  "src/routes/archive.tsx",
  "src/routes/build/aegis.tsx",
  "src/routes/build/heartline.tsx",
  "src/routes/research/cancershift.tsx",
  "src/routes/build/to-ash-again.tsx",
  "src/routes/research/a17.tsx",
  "src/routes/write/flooded.tsx",
  "src/routes/build/taaqat.tsx",
  "src/routes/build/nivala.tsx",
  "src/routes/build/biolitgraph.tsx",
  "src/routes/research/ichthyology.tsx",
  "src/routes/write/student-poets-association.tsx",
];

const requiredResumeFiles = [
  "public/resumes/Hasan_Bukhari_Software_Engineering_Resume.pdf",
  "public/resumes/Hasan_Bukhari_Machine_Learning_Resume.pdf",
  "public/resumes/Hasan_Bukhari_Bioinformatics_Resume.pdf",
];

const expectedProjectIds = [
  "aegis",
  "heartline",
  "to-ash-again",
  "taaqat",
  "nivala",
  "biolitgraph",
  "cancershift",
  "a17",
  "ichthyology",
  "flooded",
  "student-poets-association",
];

const allowedPublicAssets = [
  "biolitgraph-egfr.png",
  "hasan-bukhari-computational-biology.pdf",
  "hasan-bukhari-software-engineering.pdf",
  "project/aegis-architecture.svg",
  "project/biolitgraph-graph.png",
  "project/biolitgraph-search.png",
  "project/biolitgraph-timeline.png",
  "project/flooded-book.jpg",
  "project/flooded-cover.jpg",
  "project/heartline-live-demo.jpg",
  "project/nivala-dark.png",
  "project/nivala-light.png",
  "project/spa-logo.jpg",
  "project/spa-open-mic.jpg",
  "project/spa-poetry-month.jpg",
  "project/spa-presenting.jpg",
  "project/taaqat-dashboard.png",
  "project/toash-combat.jpg",
  "project/toash-red-scene.jpg",
  "project/toash-title.jpg",
];

function listPublicAssets(directory, prefix = "") {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    return entry.isDirectory()
      ? listPublicAssets(join(directory, entry.name), relativePath)
      : [relativePath];
  });
}

function listSourceFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return listSourceFiles(path);
    return /\.(ts|tsx|js|mjs|css)$/.test(entry.name) ? [path] : [];
  });
}

const bannedPublicCopy = [
  "The first open mic had nine people",
  "there was no regular place to read work out loud",
  "cover is on a second revision",
  "There is no publisher",
];

const staleResumeCopy = ["Two résumés", "two résumés", "Both files"];

const missingRoutes = requiredRouteFiles.filter((file) => !existsSync(join(root, file)));
if (missingRoutes.length) {
  throw new Error(`Missing required route files:\n${missingRoutes.join("\n")}`);
}

const missingResumes = requiredResumeFiles.filter((file) => !existsSync(join(root, file)));
if (missingResumes.length) {
  throw new Error(`Missing required résumé PDFs:\n${missingResumes.join("\n")}`);
}

for (const file of requiredResumeFiles) {
  const signature = readFileSync(join(root, file)).subarray(0, 5).toString("utf8");
  if (signature !== "%PDF-") throw new Error(`Résumé is not a PDF: ${file}`);
}

const portfolio = readFileSync(join(root, "src/content/portfolio.ts"), "utf8");
const actualProjectIds = [...portfolio.matchAll(/\bid:\s*"([^"]+)"/g)].map((match) => match[1]);
if (JSON.stringify(actualProjectIds) !== JSON.stringify(expectedProjectIds)) {
  throw new Error(
    `Project register mismatch. Expected ${expectedProjectIds.join(", ")}; received ${actualProjectIds.join(", ")}`,
  );
}

const sourceFiles = listSourceFiles(join(root, "src"));
const sourceText = sourceFiles.map((file) => readFileSync(file, "utf8"));

for (const phrase of bannedPublicCopy) {
  if (sourceText.some((source) => source.includes(phrase))) {
    throw new Error(`Unsupported public copy returned: ${phrase}`);
  }
}

for (const phrase of staleResumeCopy) {
  if (sourceText.some((source) => source.includes(phrase))) {
    throw new Error(`Stale résumé copy returned: ${phrase}`);
  }
}

const publicAssets = listPublicAssets(join(root, "public/assets")).sort();
if (JSON.stringify(publicAssets) !== JSON.stringify([...allowedPublicAssets].sort())) {
  throw new Error(
    `Public asset allowlist mismatch. Expected ${allowedPublicAssets.join(", ")}; received ${publicAssets.join(", ")}`,
  );
}

const sourceTree = sourceText.join("\n");
if (sourceTree.includes("/__l5e/")) {
  throw new Error("Lovable-hosted asset path found in the public source tree.");
}

if (!sourceTree.includes("/build/aegis")) {
  throw new Error("AEGIS route is missing from the public source tree.");
}

console.log(
  `Validated ${requiredRouteFiles.length} routes, ${actualProjectIds.length} projects, ${requiredResumeFiles.length} résumé PDFs, and ${publicAssets.length} public assets.`,
);
