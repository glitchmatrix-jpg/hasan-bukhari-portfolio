import { CaseStudy } from "@/components/projects/CaseStudy";
import { getProject } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";
const project = getProject("ichthyology");
export const metadata = pageMetadata(
  project.title,
  project.summary,
  "/research/ichthyology",
);
export default function Page() {
  return <CaseStudy project={project} />;
}
