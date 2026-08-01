import { CaseStudy } from "@/components/projects/CaseStudy";
import { getProject } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
const project = getProject("flooded");
export const metadata = pageMetadata(
  project.title,
  project.summary,
  "/write/flooded",
);
export default function Page() {
  return <CaseStudy project={project} />;
}
