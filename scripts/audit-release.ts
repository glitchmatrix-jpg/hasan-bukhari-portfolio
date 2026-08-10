import { existsSync } from "node:fs";
import { projects } from "../src/content/portfolio";

const failures: string[] = [];
const warnings: string[] = [];

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
  if (!existsSync(source)) failures.push(`Missing recruiter-speed source: ${source}`);
}

if (!existsSync("public/assets")) {
  warnings.push(
    "No approved production asset directory; intentional public-safe studies remain in use.",
  );
}

console.log(`Source audit: ${projects.length} project routes checked.`);
warnings.forEach((warning) => console.warn(warning));
if (failures.length) {
  failures.forEach((failure) => console.error(failure));
  process.exitCode = 1;
}
if (process.argv.includes("--release") && warnings.length) process.exitCode = 1;
