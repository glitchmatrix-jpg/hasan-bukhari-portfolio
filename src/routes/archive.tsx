import { createFileRoute } from "@tanstack/react-router";

import { ArchivePage } from "@/components/projects/world-page";

export const Route = createFileRoute("/archive")({
  head: () => ({
    meta: [
      { title: "Archive — Hasan Bukhari" },
      {
        name: "description",
        content:
          "Ten public case studies across software, computational biology, games, poetry, and community work.",
      },
    ],
  }),
  component: ArchivePage,
});
