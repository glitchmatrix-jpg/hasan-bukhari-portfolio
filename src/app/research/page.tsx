import { WorldPage } from "@/components/projects/WorldPage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Research",
  description:
    "Computational biology, genomics, scientific software, and strict evaluation by Hasan Bukhari.",
};
export default function ResearchPage() {
  return <WorldPage world="research" />;
}
