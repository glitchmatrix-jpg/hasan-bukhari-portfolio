import { expect, test } from "@playwright/test";
import { projects } from "../../src/content/portfolio";

const coreRoutes = [
  "/",
  "/build",
  "/research",
  "/write",
  "/about",
  "/resume",
  "/contact",
];
test.describe("release-candidate navigation", () => {
  for (const route of [
    ...coreRoutes,
    ...projects.map((project) => project.route),
  ]) {
    test(`${route} has a title, description, canonical URL, and one h1`, async ({
      page,
    }) => {
      const response = await page.goto(route);
      expect(response?.ok()).toBeTruthy();
      await expect(page).toHaveTitle(/Hasan Bukhari/);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        /.+/,
      );
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        route === "/" ? "https://hasanbukhari.dev" : new RegExp(`${route}$`),
      );
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    });
  }

  test("reduced motion removes retained entrance animations", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await expect(page.locator(".motion-hero-copy")).toHaveCSS(
      "animation-name",
      "none",
    );
    await expect(page.locator(".motion-hero-art")).toHaveCSS(
      "animation-name",
      "none",
    );
  });

  test("résumé route is honest while verified files are absent", async ({
    page,
  }) => {
    await page.goto("/resume");
    await expect(page.getByText("Download pending verified PDF")).toHaveCount(
      2,
    );
    await expect(
      page.getByRole("link", { name: /download.*résumé/i }),
    ).toHaveCount(0);
  });

  test("unknown routes return the failure state", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist");
    expect(response?.status()).toBe(404);
  });
});
