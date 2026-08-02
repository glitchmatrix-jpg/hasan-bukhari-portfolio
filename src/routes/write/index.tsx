import { createFileRoute } from "@tanstack/react-router";

import { WorldPage } from "@/components/projects/world-page";
import { getWorld } from "@/content/site";

const world = getWorld("write");

export const Route = createFileRoute("/write/")({
  head: () => ({
    meta: [
      { title: `${world.title} — Hasan Bukhari` },
      { name: "description", content: world.summary },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return <WorldPage worldId="write" />;
}
