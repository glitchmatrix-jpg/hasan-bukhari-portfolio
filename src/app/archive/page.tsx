import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Archive",
  "A compact index of supporting software, game, and scientific-tool projects by Hasan Bukhari.",
  "/archive",
);
const items = [
  [
    "QTL Analysis Toolkit",
    "Research software",
    "https://github.com/PurplePoet25/QTL-Analysis-Toolkit",
  ],
  [
    "Unified Genome Explorer",
    "Local-first genomics tooling",
    "https://github.com/PurplePoet25/Unified-Genome-Explorer",
  ],
  [
    "PhyloPlayground",
    "Scientific education and visualization",
    "https://github.com/PurplePoet25/PhyloPlayground",
  ],
  [
    "Observatorium",
    "Supporting software project",
    "https://github.com/PurplePoet25/observatorium",
  ],
  [
    "Moonwater Angler",
    "Game engineering archive",
    "https://github.com/PurplePoet25/Moonwater-Angler",
  ],
  [
    "MiniTactics Mobile",
    "Mobile game archive",
    "https://github.com/PurplePoet25/MiniTactics-Mobile",
  ],
] as const;
export default function ArchivePage() {
  return (
    <div className="utility-page">
      <header>
        <p className="eyebrow">Supporting constellation</p>
        <h1>Archive</h1>
        <p className="utility-page__lead">
          Public repositories that support the larger practice without competing
          with the flagship sequence.
        </p>
      </header>
      <ol className="archive-ledger">
        {items.map(([title, description, href], index) => (
          <li key={title}>
            <a href={href} rel="noreferrer" target="_blank">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{title}</strong>
              <span>{description}</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
