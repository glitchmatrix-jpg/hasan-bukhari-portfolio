import { WorldPage } from "@/components/projects/WorldPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Build",
  "Products, tools, games, and systems built by Hasan Bukhari.",
  "/build",
);
export default function BuildPage() {
  return <WorldPage world="build" />;
}
