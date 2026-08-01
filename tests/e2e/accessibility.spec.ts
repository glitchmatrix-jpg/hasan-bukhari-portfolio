import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = ["/", "/build", "/research", "/write", "/about", "/resume", "/contact"];

for (const route of routes) {
  test(`${route} has no serious or critical axe violations`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main")).toBeVisible();

    const results = await new AxeBuilder({ page }).analyze();
    const blocking = results.violations.filter((violation) =>
      ["serious", "critical"].includes(violation.impact ?? ""),
    );

    expect(blocking).toEqual([]);
  });
}
