import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyPage } from "@/components/projects/case-study-page";
import { getProject } from "@/content/portfolio";

const project = getProject("nivala");

export const Route = createFileRoute("/build/nivala")({
  head: () => ({
    meta: [
      { title: `${project.title} — Hasan Bukhari` },
      { name: "description", content: project.summary },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <CaseStudyPage projectId="nivala" />;
}
