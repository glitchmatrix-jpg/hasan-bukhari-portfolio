import biolit from "@/assets/biolitgraph-egfr.png.asset.json";
import taaqat from "@/assets/taaqat-recovery.png.asset.json";
import nivala from "@/assets/nivala-dark.png.asset.json";
import uge from "@/assets/uge-qc.png.asset.json";

type Entry = {
  index: string;
  name: string;
  category: string;
  fact: string;
  spec: string;
  href: string;
  external?: boolean;
  patch?: string;
};

const entries: Entry[] = [
  {
    index: "05",
    name: "Taaqat",
    category: "Build",
    fact: "Offline-first fitness app with 172 bundled exercises and interactive SVG muscle mapping.",
    spec: "Dart · Flutter · local persistence",
    href: "https://github.com/glitchmatrix-jpg/taaqat",
    external: true,
  },
  {
    index: "06",
    name: "Nivala",
    category: "Build",
    fact: "Pakistani-first offline nutrition tracker: 278 foods with English, Urdu and Roman Urdu aliases.",
    spec: "Dart · Flutter · private repository",
    href: "#",
    patch: "Private",
  },
  {
    index: "07",
    name: "A17",
    category: "Research",
    fact: "Seven-track residual network predicting Hi-C contact maps from epigenomic signals; relative structure generalized across unseen chromosomes more consistently than absolute contact scale.",
    spec: "Chromosome-level holdouts · manuscript in preparation",
    href: "#",
    patch: "Figures gated",
  },
  {
    index: "08",
    name: "BioLitGraph",
    category: "Research software",
    fact: "Searches biomedical literature, normalizes entities, builds relationship graphs and exports evidence tables.",
    spec: "Python · Flask · PubMed · PubTator · NetworkX",
    href: "https://github.com/PurplePoet25/BioLitGraph",
    external: true,
  },
  {
    index: "09",
    name: "Ichthyology",
    category: "Research",
    fact: "Comparative work on chromosome-scale Fundulus assemblies across two species and 24 pseudochromosome labels.",
    spec: "USM Ichthyology Lab · ongoing",
    href: "#",
    patch: "Lab permission required",
  },
  {
    index: "10",
    name: "Unified Genome Explorer",
    category: "Research software",
    fact: "QC dashboard for genome data, built to make sample-level problems visible early.",
    spec: "Demonstration data only",
    href: "#",
    patch: "Screenshot under review",
  },
  {
    index: "11",
    name: "Student Poets Association",
    category: "Write",
    fact: "Founded and led the student poetry and creative-writing club at USM: open mics, showcases, collaborative programming.",
    spec: "President and founder",
    href: "#about",
  },
];

const plates = [
  {
    src: biolit.url,
    label: "BioLitGraph — EGFR knowledge graph",
    alt: "A knowledge graph of EGFR-related entities with labelled nodes and weighted edges.",
  },
  {
    src: uge.url,
    label: "Unified Genome Explorer — QC",
    alt: "A genome QC dashboard with per-sample quality metrics.",
  },
  {
    src: taaqat.url,
    label: "Taaqat — recovery view",
    alt: "Taaqat's recovery screen showing muscle-group readiness.",
  },
  {
    src: nivala.url,
    label: "Nivala — dark dashboard",
    alt: "Nivala's dark nutrition dashboard with calorie and macronutrient totals.",
  },
];

export function Archive() {
  return (
    <section
      className="stage-bone bg-background py-24 text-foreground lg:py-28"
      aria-labelledby="archive-title"
      id="archive"
    >
      <div className="shell grid-editorial gap-y-12">
        <div className="col-span-4 lg:col-span-3">
          <h3 id="archive-title" className="display text-5xl lg:text-6xl">
            The rest of the shelf.
          </h3>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Smaller, live, or still gated. Numbered so you can scan it without clicking anything.
          </p>
        </div>

        <ol className="col-span-4 lg:col-span-8 lg:col-start-5">
          {entries.map((entry) => {
            const Row = (
              <>
                <div className="flex items-baseline gap-4 sm:w-[16rem] sm:shrink-0">
                  <span className="meta text-cherry">{entry.index}</span>
                  <span className="display text-3xl lg:text-[2.25rem]">{entry.name}</span>
                </div>
                <div className="mt-3 flex-1 sm:mt-0">
                  <p className="measure text-sm leading-relaxed">{entry.fact}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="meta text-muted-foreground">{entry.spec}</span>
                    <span className="patch">{entry.category}</span>
                    {entry.patch ? <span className="patch text-oxblood">{entry.patch}</span> : null}
                  </div>
                </div>
              </>
            );

            return (
              <li key={entry.name} className="border-t border-border last:border-b">
                {entry.external ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col py-6 transition-colors hover:text-cherry sm:flex-row sm:items-start sm:gap-6"
                  >
                    {Row}
                  </a>
                ) : (
                  <div className="flex flex-col py-6 sm:flex-row sm:items-start sm:gap-6">
                    {Row}
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className="col-span-4 lg:col-span-12">
          <p className="meta border-t border-border pt-6 text-muted-foreground">
            Plates — interface evidence
          </p>
          <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {plates.map((plate) => (
              <figure key={plate.label}>
                <img
                  src={plate.src}
                  alt={plate.alt}
                  loading="lazy"
                  className="aspect-4/3 w-full border border-border object-cover object-top"
                />
                <figcaption className="meta mt-2 text-muted-foreground">{plate.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
