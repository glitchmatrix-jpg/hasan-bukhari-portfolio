import createMDX from "@next/mdx";
import type { NextConfig } from "next";
const withMDX = createMDX({ extension: /\.mdx?$/ });
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const repositoryBasePath = "/hasan-bukhari-portfolio";
const nextConfig: NextConfig = {
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: repositoryBasePath,
        assetPrefix: repositoryBasePath,
        trailingSlash: true,
      }
    : {}),
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  poweredByHeader: false,
  reactStrictMode: true,
  typedRoutes: true,
  images: {
    unoptimized: isGitHubPages,
    formats: ["image/avif", "image/webp"],
    contentDispositionType: "attachment",
  },
  async headers() {
    if (isGitHubPages) return [];
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
export default withMDX(nextConfig);
