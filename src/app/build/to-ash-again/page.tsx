import { CaseStudy } from "@/components/projects/CaseStudy";
import { getProject } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
const project = getProject("to-ash-again");
export const metadata = pageMetadata(
  project.title,
  project.summary,
  "/build/to-ash-again",
);
export default function Page() {
  return <CaseStudy project={project} />;
}
