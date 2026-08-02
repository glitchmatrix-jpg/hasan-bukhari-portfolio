import { Link } from "@tanstack/react-router";

export function SceneCancerShift() {
  return (
    <section
      className="stage-research relative overflow-hidden bg-background py-24 text-foreground lg:py-32"
      aria-labelledby="cancershift-title"
    >
      <div className="shell grid-editorial items-start gap-y-12">
        <div className="col-span-4 lg:col-span-5">
          <p className="meta text-teal">02 / Research — external evaluation</p>
          <h3 id="cancershift-title" className="display mt-5 text-6xl lg:text-7xl">
            CancerShift
          </h3>
          <p className="display mt-6 text-2xl lg:text-[1.75rem]">
            A multicancer classifier tested on datasets it did not train on.
          </p>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            Independent computational-biology work. The pipeline is leakage-controlled: cohorts are
            held apart so the model is scored on studies and platforms it never saw. The two numbers
            below come from two different external evaluations, not one test set.
          </p>

          <div className="mt-8 space-y-4">
            <p className="meta text-muted-foreground">Cohorts — TCGA · GEO · CPTAC-GDC</p>
            <div className="gate p-4">
              <p className="meta text-teal">Limitations — stated, not buried</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Retrospective bulk-expression data only. Accuracy on curated public cohorts does not
                measure clinical performance. Nothing here is diagnostic, regulated, peer-reviewed,
                or tested on patients. Raw manuscript figures stay gated until clearance.
              </p>
            </div>
          </div>

          <div className="mt-9">
            <Link to="/research/cancershift" className="action-solid">
              Read the research
            </Link>
          </div>
        </div>

        {/* dominant object: one plate of evidence under glass */}
        <div className="col-span-4 lg:col-span-6 lg:col-start-7">
          <figure
            className="relative p-7 lg:p-9"
            style={{
              background: "var(--plotcream)",
              color: "var(--ink-deep)",
              boxShadow: "0 50px 90px -45px oklch(0 0 0 / 0.9)",
              transform: "rotate(-0.6deg)",
            }}
          >
            <span className="regmark left-3 top-3" aria-hidden="true" />
            <span className="regmark bottom-3 right-3" aria-hidden="true" />

            <figcaption className="flex items-baseline justify-between gap-4 border-b border-current/20 pb-3">
              <span className="meta">Fig. 01 — Blind external evaluation</span>
              <span className="meta opacity-60">Accuracy / %</span>
            </figcaption>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                {
                  value: "99.59",
                  label: "Blind external microarray cohort",
                  note: "Held-out studies, unseen batches",
                },
                {
                  value: "98.24",
                  label: "External RNA-seq evaluation",
                  note: "Different platform, different cohort",
                },
              ].map((bar) => (
                <div key={bar.value}>
                  <div
                    className="flex items-start justify-center pt-6"
                    style={{
                      background: "var(--teal)",
                      color: "var(--midnight)",
                      height: bar.value === "99.59" ? "13rem" : "12.4rem",
                    }}
                  >
                    <span className="display text-4xl">{bar.value}</span>
                  </div>
                  <p className="meta mt-3">{bar.label}</p>
                  <p className="mt-1 text-[0.7rem] leading-snug opacity-70">{bar.note}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 border-t border-current/20 pt-3 text-[0.7rem] leading-relaxed opacity-70">
              Two separate external evaluations. Not a single blended score, not a clinical result.
              Plate recreated for public display; source figures remain publication-gated.
            </p>
          </figure>
        </div>
      </div>
    </section>
  );
}
