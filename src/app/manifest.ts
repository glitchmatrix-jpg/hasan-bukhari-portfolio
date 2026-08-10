import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  const basePath =
    process.env.GITHUB_PAGES === "true" ? "/hasan-bukhari-portfolio" : "";
  return {
    name: "Hasan Bukhari — Build · Research · Write",
    short_name: "Hasan Bukhari",
    description:
      "Software engineering, computational biology, machine learning, scientific software, interactive systems, writing, and community leadership.",
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#14070b",
    theme_color: "#14070b",
    icons: [
      { src: `${basePath}/icon.svg`, sizes: "any", type: "image/svg+xml" },
    ],
  };
}
