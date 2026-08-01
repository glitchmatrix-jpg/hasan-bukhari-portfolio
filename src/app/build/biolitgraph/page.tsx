import { CaseStudy } from "@/components/projects/CaseStudy";
import { getProject } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
const project = getProject("biolitgraph");
export const metadata = pageMetadata(
  project.title,
  project.summary,
  "/build/biolitgraph",
);
export default function Page() {
  return <CaseStudy project={project} />;
}
