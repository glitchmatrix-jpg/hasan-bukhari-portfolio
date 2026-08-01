import { projects } from "@/content/portfolio";
import type { MetadataRoute } from "next";
export const dynamic = "force-static";

const base = "https://hasanbukhari.dev";
const staticRoutes = [
  "",
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
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [...staticRoutes, ...projects.map((project) => project.route)].map(
    (path) => ({
      url: `${base}${path}`,
      changeFrequency: path === "" ? "monthly" : "yearly",
      priority:
        path === ""
          ? 1
          : path.split("/").filter(Boolean).length === 1
            ? 0.8
            : 0.7,
    }),
  );
}
