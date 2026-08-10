import { createFileRoute } from "@tanstack/react-router";

import { CaseStudyPage } from "@/components/projects/case-study-page";
import { getProject } from "@/content/portfolio";

const project = getProject("to-ash-again");

export const Route = createFileRoute("/build/to-ash-again")({
  head: () => ({
    meta: [
      { title: `${project.title} — Hasan Bukhari` },
      { name: "description", content: project.summary },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <CaseStudyPage projectId="to-ash-again" />;
}
