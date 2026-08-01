import { WorldPage } from "@/components/projects/WorldPage";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Write",
  description:
    "Poetry, narrative design, and creative community work by Hasan Bukhari.",
};
export default function WritePage() {
  return <WorldPage world="write" />;
}
