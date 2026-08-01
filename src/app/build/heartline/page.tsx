import { CaseStudy } from "@/components/projects/CaseStudy";
import { getProject } from "@/content/portfolio";
import type { Metadata } from "next";
const project = getProject("heartline");
export const metadata: Metadata = {
  title: project.title,
  description: project.summary,
};
export default function Page() {
  return <CaseStudy project={project} />;
}
