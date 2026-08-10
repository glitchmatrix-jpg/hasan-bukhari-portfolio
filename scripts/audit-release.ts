import { existsSync, readFileSync } from "node:fs";
import { projects } from "../src/content/portfolio";

const failures: string[] = [];

for (const project of projects) {
  const page = `src/app${project.route}/page.tsx`;
  if (!existsSync(page)) failures.push(`Missing route source: ${page}`);
  if (
    project.repository &&
    !project.repository.href.startsWith("https://github.com/")
  ) {
    failures.push(`Unexpected repository URL for ${project.title}`);
  }
}

for (const route of [
  "sitemap.ts",
  "robots.ts",
  "manifest.ts",
  "opengraph-image.tsx",
  "not-found.tsx",
]) {
  if (!existsSync(`src/app/${route}`)) {
    failures.push(`Missing metadata/release route: ${route}`);
  }
}

for (const resume of [
  "Hasan_Bukhari_Software_Engineering_Resume.pdf",
  "Hasan_Bukhari_Machine_Learning_Resume.pdf",
  "Hasan_Bukhari_Bioinformatics_Resume.pdf",
]) {
  if (!existsSync(`public/resumes/${resume}`)) {
    failures.push(`Verified résumé absent — ${resume}`);
  }
}

for (const source of [
  "src/components/home/RecruiterSnapshot.tsx",
  "src/components/home/RecruiterSnapshot.module.css",
]) {
  if (!existsSync(source))
    failures.push(`Missing recruiter-speed source: ${source}`);
}

const releaseSources = [
  "src/app/page.tsx",
  "src/app/home.module.css",
  "src/app/resume/page.tsx",
  "src/components/projects/ResumeTile.tsx",
];
const unfinishedMarkers = [
  "final asset pending",
  "asset pending",
  "screenshot pending",
  "download pending",
];

for (const source of releaseSources) {
  const text = readFileSync(source, "utf8").toLowerCase();
  for (const marker of unfinishedMarkers) {
    if (text.includes(marker)) {
      failures.push(`Unfinished release marker in ${source}: ${marker}`);
    }
  }
}

console.log(`Source audit: ${projects.length} project routes checked.`);
if (failures.length) {
  failures.forEach((failure) => console.error(failure));
  process.exitCode = 1;
}
