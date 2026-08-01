import { WorldPage } from "@/components/projects/WorldPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Research",
  "Computational biology, genomics, scientific software, and strict evaluation by Hasan Bukhari.",
  "/research",
);
export default function ResearchPage() {
  return <WorldPage world="research" />;
}
