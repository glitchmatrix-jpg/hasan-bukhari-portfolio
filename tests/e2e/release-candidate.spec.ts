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
  "/archive",
  "/research/research-software",
  "/accessibility",
  "/privacy",
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

  test("homepage exposes a fast recruiter read without replacing the editorial flow", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        name: "Software Engineering + Computational Biology",
      }),
    ).toBeVisible();
    await expect(page.getByText(/University of Southern Mississippi/)).toBeVisible();
    await expect(page.getByText("Three résumé paths")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Enter the worlds" })).toBeVisible();
  });

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

  test("résumé route exposes three verified downloadable documents", async ({
    page,
  }) => {
    await page.goto("/resume");
    const downloadLinks = page.getByRole("link", { name: /download.*résumé/i });
    await expect(downloadLinks).toHaveCount(3);
    await expect(
      page.locator('a[href="/resumes/Hasan_Bukhari_Software_Engineering_Resume.pdf"]'),
    ).toHaveCount(1);
    await expect(
      page.locator('a[href="/resumes/Hasan_Bukhari_Machine_Learning_Resume.pdf"]'),
    ).toHaveCount(1);
    await expect(
      page.locator('a[href="/resumes/Hasan_Bukhari_Bioinformatics_Resume.pdf"]'),
    ).toHaveCount(1);
  });

  test("unknown routes return the portfolio failure state", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { name: "This page left the issue." })).toBeVisible();
  });
});
