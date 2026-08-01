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
  )
    failures.push(`Unexpected repository URL for ${project.title}`);
}
for (const route of [
  "sitemap.ts",
  "robots.ts",
  "manifest.ts",
  "opengraph-image.tsx",
])
  if (!existsSync(`src/app/${route}`))
    failures.push(`Missing metadata route: ${route}`);
for (const resume of [
  "Hasan_Bukhari_Computational_Biology_Resume.pdf",
  "Hasan_Bukhari_Software_Engineering_Resume.pdf",
])
  if (!existsSync(`public/assets/resumes/${resume}`))
    warnings.push(`Release blocker: verified résumé absent — ${resume}`);
if (!existsSync("public/assets"))
  warnings.push("Release blocker: no approved production asset directory.");

console.log(`Source audit: ${projects.length} flagship routes checked.`);
warnings.forEach((warning) => console.warn(warning));
if (failures.length) {
  failures.forEach((failure) => console.error(failure));
  process.exitCode = 1;
}
if (process.argv.includes("--release") && warnings.length) process.exitCode = 1;
