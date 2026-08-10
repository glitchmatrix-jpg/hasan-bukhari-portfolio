import { createFileRoute } from "@tanstack/react-router";

import { WorldPage } from "@/components/projects/world-page";
import { getWorld } from "@/content/site";

const world = getWorld("research");

export const Route = createFileRoute("/research/")({
  head: () => ({
    meta: [
      { title: `${world.title} — Hasan Bukhari` },
      { name: "description", content: world.summary },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <WorldPage worldId="research" />;
}
