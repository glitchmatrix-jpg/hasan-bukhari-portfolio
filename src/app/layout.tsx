import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import "@/styles/components.css";
import "@/styles/globals.css";
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
  authors: [{ name: "Hasan Bukhari" }],
  creator: "Hasan Bukhari",
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
