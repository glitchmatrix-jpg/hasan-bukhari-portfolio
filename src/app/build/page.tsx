import { WorldPage } from "@/components/projects/WorldPage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Build",
  description: "Products, tools, games, and systems built by Hasan Bukhari.",
};
export default function BuildPage() {
  return <WorldPage world="build" />;
}
