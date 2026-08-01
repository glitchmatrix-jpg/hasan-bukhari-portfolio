import type { Metadata } from "next";

const siteName = "Hasan Bukhari — Build · Research · Write";

export function pageMetadata(
  title: string,
  description: string,
  path: `/${string}` | "/",
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title,
      description,
      siteName,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${title} — Hasan Bukhari`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
