import { sitePath } from "@/lib/site-path";

const sheets = [
  {
    index: "A",
    title: "Software engineering",
    scope:
      "Software engineering, mobile development, backend systems, product engineering, and interactive software.",
    url: sitePath("/resumes/Hasan_Bukhari_Software_Engineering_Resume.pdf"),
    file: "Hasan_Bukhari_Software_Engineering_Resume.pdf",
    posture: "sm:-rotate-[0.6deg] sm:translate-y-2",
  },
  {
    index: "B",
    title: "ML / research engineering",
    scope:
      "Machine learning, research engineering, scientific computing, data science, and applied AI.",
    url: sitePath("/resumes/Hasan_Bukhari_Machine_Learning_Resume.pdf"),
    file: "Hasan_Bukhari_Machine_Learning_Resume.pdf",
    posture: "sm:rotate-[0.35deg] sm:-translate-y-2",
  },
  {
    index: "C",
    title: "Computational biology",
    scope: "Computational biology, bioinformatics, genomics, scientific software, and research.",
    url: sitePath("/resumes/Hasan_Bukhari_Bioinformatics_Resume.pdf"),
    file: "Hasan_Bukhari_Bioinformatics_Resume.pdf",
    posture: "sm:-rotate-[0.25deg] sm:translate-y-3",
  },
] as const;

async function downloadPdf(url: string, filename: string) {
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Resume request failed with status ${response.status}.`);
  }

  const blob = await response.blob();
  const signature = await blob.slice(0, 5).text();

  if (signature !== "%PDF-") {
    throw new Error("The server returned a non-PDF response for this résumé.");
  }

  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(objectUrl);
}

export function Resumes({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Heading = headingLevel;
  const CardHeading = headingLevel === "h1" ? "h2" : "h3";

  return (
    <section
      id="resumes"
      className="stage-bone bg-background py-24 text-foreground lg:py-28"
      aria-labelledby="resumes-title"
    >
      <div className="shell grid-editorial gap-y-12">
        <div className="col-span-4 lg:col-span-3">
          <Heading id="resumes-title" className="display text-5xl lg:text-6xl">
            Three résumés.
            <br />
            One person.
          </Heading>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            Same body of work, ordered for three readers. Each is one page and was updated in August
            2026: software engineering, ML / research engineering, and computational biology.
          </p>
        </div>

        <div className="col-span-4 grid gap-6 py-2 sm:grid-cols-3 lg:col-span-8 lg:col-start-5">
          {sheets.map((sheet) => (
            <article
              key={sheet.title}
              className={`relative flex min-h-[23rem] flex-col justify-between border border-border p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 ${sheet.posture}`}
              style={{
                background: "color-mix(in oklab, var(--blackcherry) 4%, var(--bone))",
                boxShadow: "0 30px 60px -45px oklch(0 0 0 / 0.6)",
              }}
            >
              <span className="regmark right-3 top-3" aria-hidden="true" />
              <div>
                <p className="meta text-cherry">Sheet {sheet.index}</p>
                <CardHeading className="display mt-4 text-3xl">{sheet.title}</CardHeading>
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
                <button
                  type="button"
                  className="action"
                  onClick={() => {
                    void downloadPdf(sheet.url, sheet.file).catch((error: unknown) => {
                      console.error(error);
                      window.open(sheet.url, "_blank", "noopener,noreferrer");
                    });
                  }}
                >
                  Download
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
