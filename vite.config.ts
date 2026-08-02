// @lovable.dev/vite-tanstack-config already includes the core Start, React,
// Tailwind, Nitro and path-alias plugins. Do not add duplicates here.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const githubPages = process.env["GITHUB_PAGES"] === "true";
const pagesBase = "/hasan-bukhari-portfolio";

export default defineConfig({
  ...(githubPages ? { nitro: false } : {}),
  vite: {
    base: githubPages ? `${pagesBase}/` : "/",
  },
  tanstackStart: {
    router: {
      basepath: githubPages ? pagesBase : "/",
    },
    server: {
      // Redirect TanStack Start's bundled server entry to our SSR error wrapper.
      entry: "server",
    },
    ...(githubPages
      ? {
          spa: {
            enabled: true,
            prerender: {
              outputPath: "/404.html",
              crawlLinks: true,
            },
          },
          prerender: {
            enabled: true,
            autoStaticPathsDiscovery: true,
            crawlLinks: true,
            failOnError: true,
          },
          sitemap: {
            enabled: true,
            host: "https://glitchmatrix-jpg.github.io/hasan-bukhari-portfolio",
          },
        }
      : {}),
  },
});
