import { readdir } from "node:fs/promises";
import path from "node:path";

async function main() {
  const contentRoot = path.resolve("content");

  try {
    await readdir(contentRoot);
    console.log(
      "Content directory detected. Schema validation will expand as approved MDX records are added.",
    );
  } catch {
    console.log("No content directory yet; scaffold contains schemas only.");
  }
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
