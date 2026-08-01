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

export const metadata: Metadata = {
  metadataBase: new URL("https://hasanbukhari.dev"),
  title: {
    default: "Hasan Bukhari — Build, Research, Write",
    template: "%s — Hasan Bukhari",
  },
  description:
    "Software engineering, computational biology research, interactive systems, writing, and community leadership by Hasan Bukhari.",
  applicationName: "Hasan Bukhari — Build · Research · Write",
  authors: [{ name: "Hasan Bukhari", url: "https://hasanbukhari.dev" }],
  creator: "Hasan Bukhari",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "Hasan Bukhari — Build, Research, Write",
    description:
      "Software engineering, computational biology, interactive systems, writing, and community leadership.",
    siteName: "Hasan Bukhari — Build · Research · Write",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Hasan Bukhari — Build, Research, Write",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hasan Bukhari — Build, Research, Write",
    description:
      "Software engineering, computational biology, interactive systems, writing, and community leadership.",
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
