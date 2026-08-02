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

const expectedProjectIds = [
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
];

const bannedPublicCopy = [
  "The first open mic had nine people",
  "there was no regular place to read work out loud",
  "cover is on a second revision",
  "There is no publisher",
];

const missingRoutes = requiredRouteFiles.filter((file) => !existsSync(join(root, file)));
if (missingRoutes.length) {
  throw new Error(`Missing required route files:\n${missingRoutes.join("\n")}`);
}

const portfolio = readFileSync(join(root, "src/content/portfolio.ts"), "utf8");
const actualProjectIds = [...portfolio.matchAll(/\bid:\s*"([^"]+)"/g)].map((match) => match[1]);
if (JSON.stringify(actualProjectIds) !== JSON.stringify(expectedProjectIds)) {
  throw new Error(
    `Project register mismatch. Expected ${expectedProjectIds.join(", ")}; received ${actualProjectIds.join(", ")}`,
  );
}

const sourceFiles = [
  "src/content/portfolio.ts",
  "src/components/site/hero.tsx",
  "src/components/site/human-section.tsx",
  "src/routes/about.tsx",
].map((file) => readFileSync(join(root, file), "utf8"));

for (const phrase of bannedPublicCopy) {
  if (sourceFiles.some((source) => source.includes(phrase))) {
    throw new Error(`Unsupported public copy returned: ${phrase}`);
  }
}

const publicAssets = readdirSync(join(root, "public/assets")).sort();
if (JSON.stringify(publicAssets) !== JSON.stringify([...allowedPublicAssets].sort())) {
  throw new Error(
    `Public asset allowlist mismatch. Expected ${allowedPublicAssets.join(", ")}; received ${publicAssets.join(", ")}`,
  );
}

const sourceTree = sourceFiles.join("\n") + readFileSync(join(root, "src/styles.css"), "utf8");
if (sourceTree.includes("/__l5e/")) {
  throw new Error("Lovable-hosted asset path found in the public source tree.");
}

console.log(
  `Validated ${requiredRouteFiles.length} routes, ${actualProjectIds.length} projects, and ${publicAssets.length} public assets.`,
);
