import type { ReactNode } from "react";

import type { ProjectRecord } from "@/content/portfolio";
import { sitePath } from "@/lib/site-path";

type ProjectVisualProps = {
  project: ProjectRecord;
  compact?: boolean | undefined;
};

function Frame({
  label,
  children,
  className = "",
  compact = false,
}: {
  label: string;
  children: ReactNode;
  className?: string;
  compact?: boolean | undefined;
}) {
  return (
    <figure className={"project-visual " + className + (compact ? " project-visual--compact" : "")}>
      <div className="project-visual__label">{label}</div>
      {children}
    </figure>
  );
}

function HeartlineVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Real HEARTLINE interface · fictional demo lyrics"
      className="visual-heartline visual-heartline--real"
      compact={compact}
    >
      <div className="real-device-stage">
        <div className="real-device-shell">
          <img
            src={sitePath("/assets/project/heartline-live-demo.jpg")}
            alt="HEARTLINE live lyrics interface showing fictional publication-safe demo text."
            width={520}
            height={1156}
            loading={compact ? "lazy" : "eager"}
          />
        </div>
        <div className="real-device-note" aria-hidden="true">
          <span>REAL BUILD</span>
          <strong>Media-session lyrics, translated into a live lock-screen surface.</strong>
        </div>
      </div>
    </Frame>
  );
}

function CancerShiftVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Verified aggregate result · manuscript figure pending clearance"
      className="visual-research"
      compact={compact}
    >
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

function ToAshVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Original title art · gameplay · Act IV environment"
      className="visual-game visual-game--real"
      compact={compact}
    >
      <div className="toash-art">
        <img
          className="toash-art__scene"
          src={sitePath("/assets/project/toash-red-scene.jpg")}
          alt=""
          width={1600}
          height={900}
          loading="lazy"
        />
        <img
          className="toash-art__title"
          src={sitePath("/assets/project/toash-title.jpg")}
          alt="To Ash Again title screen."
          width={1600}
          height={900}
          loading="lazy"
        />
        <img
          className="toash-art__combat"
          src={sitePath("/assets/project/toash-combat.jpg")}
          alt="To Ash Again gameplay showing its side-scrolling combat interface."
          width={1600}
          height={900}
          loading="lazy"
        />
        <div className="toash-art__hud" aria-hidden="true">
          <span>ACT 04</span>
          <span>2 CHARACTERS</span>
          <span>6 ABILITIES</span>
        </div>
      </div>
    </Frame>
  );
}

function A17Visual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Public-safe method diagram · manuscript figure withheld"
      className="visual-a17"
      compact={compact}
    >
      <div className="a17-flow">
        <div>
          <span className="meta">Seven epigenomic tracks</span>
          <div className="a17-tracks" aria-hidden="true">
            {Array.from({ length: 7 }, (_, index) => (
              <span key={index} style={{ width: 58 + index * 6 + "%" }} />
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

function FloodedVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Physical book prototype · cover wrap"
      className="visual-flooded visual-flooded--real"
      compact={compact}
    >
      <div className="flooded-art">
        <img
          className="flooded-art__wrap"
          src={sitePath("/assets/project/flooded-cover.jpg")}
          alt="Flooded cover-wrap design."
          width={1200}
          height={800}
          loading="lazy"
        />
        <img
          className="flooded-art__book"
          src={sitePath("/assets/project/flooded-book.jpg")}
          alt="Physical prototype of the Flooded poetry collection."
          width={900}
          height={1200}
          loading="lazy"
        />
        <p className="flooded-art__caption">A manuscript becoming an object.</p>
      </div>
    </Frame>
  );
}

function TaaqatVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Real Taaqat product interface"
      className="visual-product-real visual-taaqat--real"
      compact={compact}
    >
      <div className="product-device-stage product-device-stage--single">
        <img
          className="product-device"
          src={sitePath("/assets/project/taaqat-dashboard.png")}
          alt="Taaqat rehabilitation dashboard showing exercise and recovery tracking."
          width={1080}
          height={2160}
          loading="lazy"
        />
        <div className="product-proof">
          <strong>172</strong>
          <span>exercises · local-first recovery tracking</span>
        </div>
      </div>
    </Frame>
  );
}

function NivalaVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Real Nivala light and dark interfaces"
      className="visual-product-real visual-nivala--real"
      compact={compact}
    >
      <div className="product-device-stage product-device-stage--pair">
        <img
          className="product-device product-device--light"
          src={sitePath("/assets/project/nivala-light.png")}
          alt="Nivala food-tracking dashboard in its light interface."
          width={1080}
          height={2160}
          loading="lazy"
        />
        <img
          className="product-device product-device--dark"
          src={sitePath("/assets/project/nivala-dark.png")}
          alt="Nivala food-tracking dashboard in its dark interface."
          width={1080}
          height={2160}
          loading="lazy"
        />
        <div className="product-proof">
          <strong>278</strong>
          <span>bundled Pakistani foods · English, Urdu and Roman Urdu</span>
        </div>
      </div>
    </Frame>
  );
}

function BioLitGraphVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Real landing, network and timeline views"
      className="visual-biolitgraph visual-biolitgraph--real"
      compact={compact}
    >
      <div className="biolitgraph-spread">
        <img
          className="biolitgraph-spread__graph"
          src={sitePath("/assets/project/biolitgraph-graph.png")}
          alt="BioLitGraph entity network connecting normalized biomedical entities to evidence."
          width={1600}
          height={1000}
          loading="lazy"
        />
        <img
          className="biolitgraph-spread__search"
          src={sitePath("/assets/project/biolitgraph-search.png")}
          alt="BioLitGraph landing and literature-search interface."
          width={1200}
          height={800}
          loading="lazy"
        />
        <img
          className="biolitgraph-spread__timeline"
          src={sitePath("/assets/project/biolitgraph-timeline.png")}
          alt="BioLitGraph evidence timeline view."
          width={1200}
          height={800}
          loading="lazy"
        />
      </div>
    </Frame>
  );
}

function IchthyologyVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Abstract correspondence matrix · unpublished result withheld"
      className="visual-ichthyology"
      compact={compact}
    >
      <div className="chromosome-sheet">
        <div className="chromosome-sheet__labels">
          <span>Assembly A</span>
          <span>Assembly B</span>
        </div>
        <div className="chromosome-lines" aria-hidden="true">
          {Array.from({ length: 24 }, (_, index) => (
            <span key={index} style={{ width: 42 + ((index * 17) % 54) + "%" }} />
          ))}
        </div>
        <p>24 pseudochromosome labels · ongoing comparative work</p>
      </div>
    </Frame>
  );
}

function SpaVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Real logo, posters and presenting image · group photography withheld"
      className="visual-spa visual-spa--real"
      compact={compact}
    >
      <div className="spa-collage">
        <img
          className="spa-collage__logo"
          src={sitePath("/assets/project/spa-logo.jpg")}
          alt="Student Poets Association logo."
          width={1000}
          height={1000}
          loading="lazy"
        />
        <img
          className="spa-collage__poster spa-collage__poster--one"
          src={sitePath("/assets/project/spa-open-mic.jpg")}
          alt="Student Poets Association open-mic poster."
          width={900}
          height={1100}
          loading="lazy"
        />
        <img
          className="spa-collage__poster spa-collage__poster--two"
          src={sitePath("/assets/project/spa-poetry-month.jpg")}
          alt="Student Poets Association poetry-month poster."
          width={900}
          height={1100}
          loading="lazy"
        />
        <img
          className="spa-collage__presenting"
          src={sitePath("/assets/project/spa-presenting.jpg")}
          alt="Hasan presenting at a Student Poets Association event."
          width={1000}
          height={800}
          loading="lazy"
        />
      </div>
    </Frame>
  );
}

function AegisVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Project-authored AEGIS architecture · deterministic evidence pipeline"
      className="visual-aegis"
      compact={compact}
    >
      <div className="grid min-h-[24rem] place-items-center bg-cola p-4 sm:p-7 lg:p-10">
        <div className="paper-card relative w-full rotate-[0.35deg] p-3 sm:p-5">
          <span className="regmark right-3 top-3" aria-hidden="true" />
          <img
            src={sitePath("/assets/project/aegis-architecture.svg")}
            alt="AEGIS architecture from controlled libraries through monitoring, trusted identity, retained versions, format-aware parsing, deterministic diffing, governance, FastAPI, and the React and Tauri desktop interface."
            loading={compact ? "lazy" : "eager"}
            className="w-full object-contain"
          />
          <p className="meta mt-3 border-t border-blackcherry/20 pt-3 text-blackcherry/70">
            System architecture · deterministic evidence before governance
          </p>
        </div>
      </div>
    </Frame>
  );
}

export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {
  switch (project.id) {
    case "aegis":
      return <AegisVisual compact={compact} />;
    case "heartline":
      return <HeartlineVisual compact={compact} />;
    case "cancershift":
      return <CancerShiftVisual compact={compact} />;
    case "to-ash-again":
      return <ToAshVisual compact={compact} />;
    case "a17":
      return <A17Visual compact={compact} />;
    case "flooded":
      return <FloodedVisual compact={compact} />;
    case "taaqat":
      return <TaaqatVisual compact={compact} />;
    case "nivala":
      return <NivalaVisual compact={compact} />;
    case "biolitgraph":
      return <BioLitGraphVisual compact={compact} />;
    case "ichthyology":
      return <IchthyologyVisual compact={compact} />;
    case "student-poets-association":
      return <SpaVisual compact={compact} />;
    default:
      return null;
  }
}
