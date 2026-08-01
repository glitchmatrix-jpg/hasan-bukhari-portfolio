import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hasan Bukhari — Build · Research · Write",
    short_name: "Hasan Bukhari",
    description:
      "Software engineering, computational biology, interactive systems, writing, and community leadership.",
    start_url: "/",
    display: "standalone",
    background_color: "#14070b",
    theme_color: "#14070b",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
