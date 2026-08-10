import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StructuredData } from "@/components/site/StructuredData";
import "@/styles/components.css";
import "@/styles/globals.css";
import "@/styles/motion.css";
import "@/styles/p14.css";
import "@/styles/tokens.css";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

const previewBasePath =
  process.env.GITHUB_PAGES === "true" ? "/hasan-bukhari-portfolio" : "";

export const metadata: Metadata = {
  metadataBase: new URL("https://hasanbukhari.dev"),
  title: {
    default: "Hasan Bukhari — Software Engineering + Computational Biology",
    template: "%s — Hasan Bukhari",
  },
  description:
    "Portfolio of Hasan Bukhari: software engineering, computational biology, machine learning, scientific software, interactive systems, writing, and community leadership at the University of Southern Mississippi.",
  applicationName: "Hasan Bukhari — Build · Research · Write",
  authors: [{ name: "Hasan Bukhari", url: "https://hasanbukhari.dev" }],
  creator: "Hasan Bukhari",
  alternates: { canonical: "/" },
  manifest: `${previewBasePath}/manifest.webmanifest`,
  icons: {
    icon: [{ url: `${previewBasePath}/icon.svg`, type: "image/svg+xml" }],
    shortcut: `${previewBasePath}/icon.svg`,
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Hasan Bukhari — Software Engineering + Computational Biology",
    description:
      "Software engineering, computational biology, machine learning, interactive systems, writing, and community leadership.",
    siteName: "Hasan Bukhari — Build · Research · Write",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hasan Bukhari — Software Engineering + Computational Biology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasan Bukhari — Software Engineering + Computational Biology",
    description:
      "Software engineering, computational biology, machine learning, interactive systems, writing, and community leadership.",
    images: ["/opengraph-image"],
  },
  formatDetection: { email: false, address: false, telephone: false },
};
export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: "#14070b",
};
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StructuredData />
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
