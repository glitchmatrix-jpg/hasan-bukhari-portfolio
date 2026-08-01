import { readdir } from "node:fs/promises";
import path from "node:path";

const forbiddenSegments = ["restricted", "originals-private", "reference-only"];

async function walk(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(absolutePath)));
    else files.push(absolutePath);
  }

  return files;
}

async function main() {
  const publicRoot = path.resolve("public");

  try {
    const files = await walk(publicRoot);
    const violations = files.filter((file) =>
      forbiddenSegments.some((segment) => file.split(path.sep).includes(segment)),
    );

    if (violations.length > 0) {
      throw new Error(`Restricted asset paths found in public/:\n${violations.join("\n")}`);
    }

    console.log(`Asset path validation passed for ${files.length} public files.`);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      console.log("No public asset directory yet; no production assets to validate.");
      return;
    }
    throw error;
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
