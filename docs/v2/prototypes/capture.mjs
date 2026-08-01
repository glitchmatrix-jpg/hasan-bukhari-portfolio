import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";

const here = dirname(fileURLToPath(import.meta.url));
const staticDirectory = resolve(here, "static");
const outputDirectory = resolve(here, "stills");

const captures = [
  {
    file: "index.html",
    output: "homepage-desktop-v2.png",
    viewport: { width: 1440, height: 1000 },
  },
  {
    file: "index.html",
    output: "homepage-mobile-320-v2.png",
    viewport: { width: 320, height: 760 },
  },
  {
    file: "heartline.html",
    output: "case-heartline-desktop-v2.png",
    viewport: { width: 1440, height: 1000 },
  },
  {
    file: "cancershift.html",
    output: "case-cancershift-desktop-v2.png",
    viewport: { width: 1440, height: 1000 },
  },
  {
    file: "flooded.html",
    output: "case-flooded-desktop-v2.png",
    viewport: { width: 1440, height: 1000 },
  },
];

await mkdir(outputDirectory, { recursive: true });
const browser = await chromium.launch({ channel: "msedge", headless: true });

const results = [];

try {
  for (const capture of captures) {
    const page = await browser.newPage({ viewport: capture.viewport });
    const consoleErrors = [];
    page.on("console", (message) => {
      if (message.type() === "error") consoleErrors.push(message.text());
    });

    await page.goto(pathToFileURL(resolve(staticDirectory, capture.file)).href);
    await page.evaluate(async () => {
      await Promise.all(
        [...document.images].map((image) =>
          image.complete ? Promise.resolve() : image.decode(),
        ),
      );
    });

    const layout = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      brokenImages: [...document.images]
        .filter((image) => image.naturalWidth === 0)
        .map((image) => image.getAttribute("src")),
    }));

    await page.screenshot({
      path: resolve(outputDirectory, capture.output),
      fullPage: true,
    });

    results.push({
      ...capture,
      ...layout,
      horizontalOverflow: layout.scrollWidth > layout.viewportWidth,
      consoleErrors,
    });

    await page.close();
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify(results, null, 2));
