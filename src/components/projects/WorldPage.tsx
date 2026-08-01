import type { Route } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { projects, type World } from "@/content/portfolio";

const copy = {
  build: {
    number: "ACT I",
    title: "Build",
    thesis:
      "Products, tools, games, and systems built to make complex behavior usable.",
    bridge: "Follow the evidence into Research",
    bridgeHref: "/research",
  },
  research: {
    number: "ACT II",
    title: "Research",
    thesis:
      "Models should survive unfamiliar data, scientific claims should match the evidence, and negative results belong in the story.",
    bridge: "Cross into writing and community",
    bridgeHref: "/write",
  },
  write: {
    number: "ACT III",
    title: "Write",
    thesis:
      "Writing is another way of studying systems: memory, narrative, community, and what people carry with them.",
    bridge: "Return to systems and products",
    bridgeHref: "/build",
  },
} as const;

export function WorldPage({ world }: { world: World }) {
  const details = copy[world];
  const entries = projects.filter((project) => project.world === world);
  return (
    <div className={`world-page world-page--${world}`}>
      <header className="world-opener">
        <p className="eyebrow">{details.number} / Department</p>
        <h1>{details.title}</h1>
        <p>{details.thesis}</p>
      </header>
      <section className="world-sequence" aria-labelledby={`${world}-projects`}>
        <div className="world-sequence__intro">
          <p className="eyebrow">Selected work / sequenced</p>
          <h2 id={`${world}-projects`}>
            Not a wall. A route through the work.
          </h2>
        </div>
        <ol>
          {entries.map((project, index) => (
            <li key={project.id}>
              <Link href={project.route as Route}>
                <span className="world-sequence__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <small>{project.status}</small>
                </div>
                <span aria-hidden="true">&#8599;</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
      {world === "research" && (
        <aside className="world-manifesto">
          <p className="eyebrow">Research rule</p>
          <h2>Findings and limitations travel together.</h2>
          <p>
            Each research case study separates supported findings from
            uncertainty, negative results, publication status, and material that
            remains unpublished.
          </p>
        </aside>
      )}
      {world === "write" && (
        <aside className="world-manifesto">
          <p className="eyebrow">Publication rule</p>
          <h2>No excerpt appears without approval.</h2>
          <p>
            Flooded remains a collection in development, and community
            photography remains behind a consent and rights gate.
          </p>
        </aside>
      )}
      {world === "build" && (
        <aside className="world-manifesto">
          <p className="eyebrow">Systems behind the screens</p>
          <h2>Interfaces are the visible edge of architecture.</h2>
          <p>
            Across mobile products, games, and research tools, the deeper thread
            is state, persistence, resilient workflows, and evidence that stays
            attached.
          </p>
        </aside>
      )}
      <section className="world-transition">
        <p className="eyebrow">Next act</p>
        <h2>{details.bridge}</h2>
        <ButtonLink href={details.bridgeHref}>
          Enter {details.bridgeHref.slice(1)}
        </ButtonLink>
      </section>
    </div>
  );
}
