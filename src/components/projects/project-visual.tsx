import type { ReactNode } from "react";

import type { ProjectRecord } from "@/content/portfolio";

type ProjectVisualProps = {
  project: ProjectRecord;
  compact?: boolean;
};

function Frame({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure className={`project-visual ${className}`}>
      <div className="project-visual__label">{label}</div>
      {children}
    </figure>
  );
}

function HeartlineVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame label="Rights-safe interface reconstruction" className="visual-heartline">
      <div className={`demo-phone ${compact ? "demo-phone--compact" : ""}`}>
        <div className="demo-phone__status">
          <span>HEARTLINE</span>
          <span>01:42</span>
        </div>
        <div className="demo-phone__body">
          <p className="meta text-cherry">Active media session</p>
          <p className="display mt-4 text-3xl">Original demo track</p>
          <p className="mt-2 text-sm text-muted-foreground">Synchronized line available</p>
          <div className="demo-phone__wave" aria-hidden="true">
            {Array.from({ length: 22 }, (_, index) => (
              <span key={index} style={{ height: `${18 + ((index * 13) % 42)}%` }} />
            ))}
          </div>
          <div className="demo-phone__progress">
            <span />
          </div>
          <div className="mt-5 flex justify-between">
            <span className="meta">Cached locally</span>
            <span className="meta">Live notification</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

function CancerShiftVisual() {
  return (
    <Frame label="Public aggregate results" className="visual-research">
      <div className="metric-sheet">
        <div className="metric-sheet__head">
          <span>Blind external evaluation</span>
          <span>Accuracy</span>
        </div>
        <div className="metric-sheet__grid">
          <div>
            <strong>99.59%</strong>
            <span>External microarray cohort</span>
          </div>
          <div>
            <strong>98.24%</strong>
            <span>External RNA-seq data</span>
          </div>
        </div>
        <p>
          Separate evaluations. These values do not establish clinical performance or diagnostic
          use.
        </p>
      </div>
    </Frame>
  );
}

function ToAshVisual() {
  return (
    <Frame label="Code-native scene · original project art withheld" className="visual-game">
      <div className="game-scene" aria-hidden="true">
        <div className="game-scene__moon" />
        <div className="game-scene__platform game-scene__platform--one" />
        <div className="game-scene__platform game-scene__platform--two" />
        <div className="game-scene__player" />
        <div className="game-scene__enemy" />
        <div className="game-scene__signal" />
      </div>
      <div className="game-scene__hud">
        <span>ACT 04</span>
        <span>2 CHARACTERS</span>
        <span>6 ABILITIES</span>
      </div>
    </Frame>
  );
}

function A17Visual() {
  return (
    <Frame label="Public-safe method diagram" className="visual-a17">
      <div className="a17-flow">
        <div>
          <span className="meta">Seven epigenomic tracks</span>
          <div className="a17-tracks" aria-hidden="true">
            {Array.from({ length: 7 }, (_, index) => (
              <span key={index} style={{ width: `${58 + index * 6}%` }} />
            ))}
          </div>
        </div>
        <div className="a17-arrow" aria-hidden="true">
          →
        </div>
        <div>
          <span className="meta">Residual model</span>
          <div className="a17-blocks" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="a17-arrow" aria-hidden="true">
          →
        </div>
        <div>
          <span className="meta">Held-out chromosome</span>
          <div className="contact-matrix" aria-hidden="true">
            {Array.from({ length: 64 }, (_, index) => (
              <span key={index} style={{ opacity: 0.12 + ((index * 7) % 9) / 11 }} />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-5 text-sm text-muted-foreground">
        Relative structure transferred more consistently than absolute scale.
      </p>
    </Frame>
  );
}

function FloodedVisual() {
  return (
    <Frame label="Code-native object · no manuscript text shown" className="visual-flooded">
      <div className="book-object" aria-hidden="true">
        <div className="book-object__spine">FLOODED</div>
        <div className="book-object__cover">
          <span>FLOODED</span>
          <small>COLLECTION IN DEVELOPMENT</small>
        </div>
        <div className="book-object__pages" />
      </div>
    </Frame>
  );
}

function TaaqatVisual() {
  return (
    <Frame label="Synthetic product diagram" className="visual-taaqat">
      <div className="recovery-map">
        <div className="recovery-map__figure" aria-hidden="true">
          <span className="recovery-map__head" />
          <span className="recovery-map__torso" />
          <span className="recovery-map__arm recovery-map__arm--left" />
          <span className="recovery-map__arm recovery-map__arm--right" />
          <span className="recovery-map__leg recovery-map__leg--left" />
          <span className="recovery-map__leg recovery-map__leg--right" />
        </div>
        <dl>
          <div>
            <dt>Library</dt>
            <dd>172 exercises</dd>
          </div>
          <div>
            <dt>Core use</dt>
            <dd>Offline</dd>
          </div>
          <div>
            <dt>Data</dt>
            <dd>Local persistence</dd>
          </div>
        </dl>
      </div>
    </Frame>
  );
}

function NivalaVisual() {
  return (
    <Frame label="Synthetic product diagram" className="visual-nivala">
      <div className="nivala-panel">
        <div>
          <p className="meta">Pakistani-first food library</p>
          <strong>278</strong>
          <span>bundled foods</span>
        </div>
        <ul>
          <li>English</li>
          <li lang="ur">اردو</li>
          <li>Roman Urdu</li>
        </ul>
        <p>Local diary · recipes · backup</p>
      </div>
    </Frame>
  );
}

function BioLitGraphVisual() {
  return (
    <Frame label="Project-authored demonstration output" className="visual-biolitgraph">
      <img
        src="/assets/biolitgraph-egfr.png"
        alt="BioLitGraph demonstration network connecting normalized EGFR-related entities to source evidence."
        loading="lazy"
      />
    </Frame>
  );
}

function IchthyologyVisual() {
  return (
    <Frame
      label="Abstract correspondence matrix · no unpublished result"
      className="visual-ichthyology"
    >
      <div className="chromosome-sheet">
        <div className="chromosome-sheet__labels">
          <span>Assembly A</span>
          <span>Assembly B</span>
        </div>
        <div className="chromosome-lines" aria-hidden="true">
          {Array.from({ length: 24 }, (_, index) => (
            <span key={index} style={{ width: `${42 + ((index * 17) % 54)}%` }} />
          ))}
        </div>
        <p>24 pseudochromosome labels · ongoing comparative work</p>
      </div>
    </Frame>
  );
}

function SpaVisual() {
  return (
    <Frame label="Public-safe poster field · participant photos withheld" className="visual-spa">
      <div className="poster-field">
        <div className="poster poster--cream">
          <small>STUDENT POETS ASSOCIATION</small>
          <strong>
            OPEN
            <br />
            MIC
          </strong>
          <span>No date published here</span>
        </div>
        <div className="poster poster--red">
          <small>WRITE · READ · LISTEN</small>
          <strong>
            POETRY
            <br />
            MONTH
          </strong>
          <span>USM student community</span>
        </div>
      </div>
    </Frame>
  );
}

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  switch (project.id) {
    case "heartline":
      return <HeartlineVisual compact={compact} />;
    case "cancershift":
      return <CancerShiftVisual />;
    case "to-ash-again":
      return <ToAshVisual />;
    case "a17":
      return <A17Visual />;
    case "flooded":
      return <FloodedVisual />;
    case "taaqat":
      return <TaaqatVisual />;
    case "nivala":
      return <NivalaVisual />;
    case "biolitgraph":
      return <BioLitGraphVisual />;
    case "ichthyology":
      return <IchthyologyVisual />;
    case "student-poets-association":
      return <SpaVisual />;
    default:
      return null;
  }
}
