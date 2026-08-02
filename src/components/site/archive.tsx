import { getProject } from "@/content/portfolio";
import { getWorld } from "@/content/site";

const supportingIds = [
  "taaqat",
  "nivala",
  "a17",
  "biolitgraph",
  "ichthyology",
  "student-poets-association",
] as const;

export function Archive() {
  const entries = supportingIds.map(getProject);

  return (
    <section
      className="stage-bone bg-background py-24 text-foreground lg:py-28"
      aria-labelledby="archive-title"
      id="archive"
    >
      <div className="shell grid-editorial gap-y-12">
        <div className="col-span-4 lg:col-span-3">
          <h2 id="archive-title" className="display text-5xl lg:text-6xl">
            The rest of the shelf.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Six more projects. Each line says what is public and nothing more.
          </p>
          <div className="mt-8">
            <a href="/archive" className="action">
              Complete archive
            </a>
          </div>
        </div>

        <ol className="col-span-4 lg:col-span-8 lg:col-start-5">
          {entries.map((entry, index) => (
            <li key={entry.id} className="border-t border-border last:border-b">
              <a
                href={entry.route}
                className="flex flex-col py-6 transition-colors hover:text-cherry sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex items-baseline gap-4 sm:w-[16rem] sm:shrink-0">
                  <span className="meta text-cherry">{String(index + 5).padStart(2, "0")}</span>
                  <span className="display text-3xl lg:text-[2.25rem]">{entry.title}</span>
                </div>
                <div className="mt-3 flex-1 sm:mt-0">
                  <p className="measure text-sm leading-relaxed">{entry.summary}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="meta text-muted-foreground">{entry.status}</span>
                    <span className="patch">{getWorld(entry.world).title}</span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ol>

        <figure className="col-span-4 border-t border-border pt-7 lg:col-span-8 lg:col-start-5">
          <img
            src="/assets/biolitgraph-egfr.png"
            alt="BioLitGraph demonstration network connecting normalized EGFR-related entities to source evidence."
            loading="lazy"
            className="w-full border border-border object-contain"
          />
          <figcaption className="meta mt-3 text-muted-foreground">
            BioLitGraph · project-authored demonstration output
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
