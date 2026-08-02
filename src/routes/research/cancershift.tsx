import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";

export const Route = createFileRoute("/research/cancershift")({
  head: () => ({
    meta: [
      { title: "CancerShift — leakage-controlled multicancer classification | Hasan Bukhari" },
      {
        name: "description",
        content:
          "CancerShift is a leakage-controlled multicancer classification pipeline evaluated across TCGA, GEO and CPTAC-GDC cohorts: 99.59% on a blind external microarray cohort, 98.24% on external RNA-seq.",
      },
      { property: "og:title", content: "CancerShift — cross-cohort multicancer classification" },
      {
        property: "og:description",
        content:
          "Two separate external evaluations, strict leakage controls, and limitations stated in full.",
      },
    ],
  }),
  component: CancerShift,
});

function Block({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="shell grid-editorial border-t border-border py-14">
      <div className="col-span-4 lg:col-span-4">
        <p className="meta text-teal">{label}</p>
        <h2 className="display mt-4 text-3xl lg:text-[2.5rem]">{title}</h2>
      </div>
      <div className="col-span-4 mt-5 lg:col-span-7 lg:col-start-6 lg:mt-0">{children}</div>
    </section>
  );
}

function CancerShift() {
  return (
    <>
      <SiteNav />
      <main className="stage-research bg-background pt-14 text-foreground">
        <header className="shell grid-editorial items-end gap-y-10 py-16 lg:py-24">
          <div className="col-span-4 lg:col-span-7">
            <p className="meta text-muted-foreground">Case study · Research</p>
            <h1 className="display mt-5 text-6xl lg:text-[5.5rem]">CancerShift</h1>
            <p className="display mt-6 text-2xl lg:text-3xl">
              A multicancer classifier tested on datasets it did not train on.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="patch">TCGA</span>
              <span className="patch">GEO</span>
              <span className="patch">CPTAC-GDC</span>
              <span className="patch">Independent research</span>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-4 lg:col-start-9">
            <div
              className="p-6"
              style={{ background: "var(--plotcream)", color: "var(--ink-deep)" }}
            >
              <p className="meta">Fig. 01 — External evaluations</p>
              <div className="mt-5 space-y-4">
                {[
                  ["99.59%", "Blind external microarray cohort"],
                  ["98.24%", "External RNA-seq evaluation"],
                ].map(([value, label]) => (
                  <div key={value} className="border-t border-current/20 pt-3">
                    <p className="display text-4xl">{value}</p>
                    <p className="meta mt-1 opacity-70">{label}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-[0.7rem] leading-relaxed opacity-70">
                Different evaluations on different platforms. Not one score.
              </p>
            </div>
          </div>
        </header>

        <Block label="01" title="Research question">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Can a multicancer classifier trained on public expression data keep its accuracy when
            the evaluation cohort comes from a different study and a different measurement platform?
          </p>
        </Block>

        <Block label="02" title="In plain language">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Models like this often look excellent because the test data secretly resembles the
            training data — same lab, same batch, same platform. CancerShift is built to remove that
            comfort: the model is scored on cohorts it has never touched, so the number reported is
            a transfer result rather than a self-report.
          </p>
        </Block>

        <Block label="03" title="Datasets">
          <ul className="measure space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>TCGA — primary tumour expression cohorts.</li>
            <li>GEO — independent studies used for blind external microarray evaluation.</li>
            <li>CPTAC-GDC — additional cohort context.</li>
          </ul>
        </Block>

        <Block label="04" title="Leakage controls">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Cohorts are separated before any feature decision is made, so normalization, selection
            and tuning never see the evaluation studies. Cross-study and cross-platform separation
            is the point of the design, not a robustness check bolted on at the end.
          </p>
        </Block>

        <Block label="05" title="Validation design">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Two external evaluations: one blind microarray cohort, one RNA-seq evaluation on a
            different platform. They answer different questions and are reported separately for that
            reason.
          </p>
        </Block>

        <Block label="06" title="Findings">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["99.59%", "Blind external microarray cohort"],
              ["98.24%", "External RNA-seq evaluation"],
            ].map(([value, label]) => (
              <div key={value} className="border border-border p-5">
                <p className="display text-5xl text-teal">{value}</p>
                <p className="meta mt-3 text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block label="07" title="Limitations">
          <ul className="measure space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>Retrospective public bulk-expression data only.</li>
            <li>Curated cohorts are cleaner than clinical material.</li>
            <li>No prospective, patient-level or longitudinal evaluation.</li>
            <li>Class coverage is bounded by what the public cohorts contain.</li>
          </ul>
        </Block>

        <Block label="08" title="What the results do not prove">
          <div className="gate p-5">
            <ul className="measure space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>Not a diagnostic. Not clinically validated. Not regulated.</li>
              <li>No claim about patient outcomes or deployment readiness.</li>
              <li>Not peer-reviewed at the time of writing.</li>
            </ul>
          </div>
        </Block>

        <Block label="09" title="Reproducibility and status">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            The pipeline and evaluation protocol are recorded so the external runs can be repeated.
            Raw manuscript figures stay publication-gated; the plate on the homepage is a
            public-safe recreation of the reported accuracies.
          </p>
        </Block>

        <Block label="10" title="Related research">
          <Link to="/" hash="archive" className="link-rule display text-2xl">
            A17 — chromatin contact prediction, manuscript in preparation
          </Link>
        </Block>
      </main>
      <SiteFooter />
    </>
  );
}
