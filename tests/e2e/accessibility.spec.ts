import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { projects } from "../../src/content/portfolio";

const routes = [
  "/",
  "/build",
  "/build/aegis",
  "/research",
  "/write",
  "/about",
  "/resume",
  "/contact",
  "/archive",
  "/research/research-software",
  "/accessibility",
  "/privacy",
  ...projects.map((project) => project.route),
];

for (const route of routes) {
  test(`${route} has no serious or critical axe violations`, async ({
    page,
  }) => {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );

    expect(blocking).toEqual([]);
  });
}
