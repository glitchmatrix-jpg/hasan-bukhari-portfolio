import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";

const here = dirname(fileURLToPath(import.meta.url));
const staticDirectory = resolve(here, "static");
const pages = [
  "index.html",
  "heartline.html",
  "cancershift.html",
  "flooded.html",
];
const viewports = [
  { name: "desktop", width: 1440, height: 1000 },
  { name: "mobile", width: 320, height: 760 },
];

const browser = await chromium.launch({ channel: "msedge", headless: true });
const results = [];

try {
  for (const file of pages) {
    for (const viewport of viewports) {
      const page = await browser.newPage({ viewport });
      await page.goto(pathToFileURL(resolve(staticDirectory, file)).href);

      const audit = await page.evaluate(() => {
        const selectors = "h1,h2,h3,p,a,strong,span,figcaption,li";
        const clippedText = [...document.querySelectorAll(selectors)]
          .filter((element) => element.textContent?.trim())
          .filter((element) => {
            const style = getComputedStyle(element);
            if (style.display === "none" || style.visibility === "hidden")
              return false;
            const rect = element.getBoundingClientRect();
            return (
              rect.width > 0 &&
              (rect.left < -1 || rect.right > window.innerWidth + 1)
            );
          })
          .map((element) => ({
            tag: element.tagName,
            className: element.className,
            text: element.textContent.trim().replace(/\s+/g, " ").slice(0, 90),
            rect: {
              left: Math.round(element.getBoundingClientRect().left),
              right: Math.round(element.getBoundingClientRect().right),
            },
          }));

        return {
          documentOverflow:
            document.documentElement.scrollWidth >
            document.documentElement.clientWidth,
          clippedText,
        };
      });

      results.push({ file, viewport: viewport.name, ...audit });
      await page.close();
    }
  }
} finally {
  await browser.close();
}

console.log(JSON.stringify(results, null, 2));

if (
  results.some(
    (result) => result.documentOverflow || result.clippedText.length > 0,
  )
) {
  process.exitCode = 1;
}
