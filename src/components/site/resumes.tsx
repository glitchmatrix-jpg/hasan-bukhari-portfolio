import resumeSE from "@/assets/resume-se.pdf.asset.json";
import resumeCB from "@/assets/resume-cb.pdf.asset.json";
import { sitePath } from "@/lib/site-path";

const sheets = [
  {
    index: "A",
    title: "Software engineering",
    scope: "Mobile development, backend systems, product engineering, interactive software.",
    url: sitePath(resumeSE.url),
    file: "hasan-bukhari-software-engineering.pdf",
  },
  {
    index: "B",
    title: "Computational biology",
    scope: "Bioinformatics, research engineering, scientific computing, data analysis.",
    url: sitePath(resumeCB.url),
    file: "hasan-bukhari-computational-biology.pdf",
  },
];

export function Resumes({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  return (
    <section
      id="resumes"
      className="stage-bone bg-background py-24 text-foreground lg:py-28"
      aria-labelledby="resumes-title"
    >
      <div className="shell grid-editorial gap-y-12">
        <div className="col-span-4 lg:col-span-4">
          <Heading id="resumes-title" className="display text-5xl lg:text-6xl">
            Two résumés.
            <br />
            One person.
          </Heading>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            Same work, ordered for two readers. Both are one page and were updated in August 2026:
            one for product and software roles, one for computational biology.
          </p>
        </div>

        {/* two equal printed documents in sleeves */}
        <div className="col-span-4 grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {sheets.map((sheet) => (
            <article
              key={sheet.title}
              className="relative flex flex-col justify-between border border-border p-6"
              style={{
                background: "color-mix(in oklab, var(--blackcherry) 4%, var(--bone))",
                boxShadow: "0 30px 60px -45px oklch(0 0 0 / 0.6)",
              }}
            >
              <span className="regmark right-3 top-3" aria-hidden="true" />
              <div>
                <p className="meta text-cherry">Sheet {sheet.index}</p>
                <h4 className="display mt-4 text-3xl">{sheet.title}</h4>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{sheet.scope}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="stamp">PDF · one page</span>
                  <span className="stamp">Updated Aug 2026</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={sheet.url} target="_blank" rel="noreferrer" className="action-solid">
                  View
                </a>
                <a href={sheet.url} download={sheet.file} className="action">
                  Download
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
