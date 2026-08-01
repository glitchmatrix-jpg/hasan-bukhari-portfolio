import { WorldPage } from "@/components/projects/WorldPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Write",
  "Poetry, narrative design, and creative community work by Hasan Bukhari.",
  "/write",
);
export default function WritePage() {
  return <WorldPage world="write" />;
}
