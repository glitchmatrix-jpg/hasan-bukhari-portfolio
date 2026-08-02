import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";

export const Route = createFileRoute("/research/research-software")({
  head: () => ({
    meta: [
      { title: "Research Software — Hasan Bukhari" },
      {
        name: "description",
        content:
          "Scientific software that connects software engineering with computational-biology work.",
      },
    ],
  }),
  component: ResearchSoftwarePage,
});

function ResearchSoftwarePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="page-stage world-research">
        <header className="page-hero">
          <div className="shell grid-editorial gap-y-8">
            <div className="col-span-4 lg:col-span-8">
              <p className="meta text-teal">Build ↔ Research</p>
              <h1 className="display mt-6 text-6xl sm:text-8xl">Research software.</h1>
            </div>
            <p className="col-span-4 text-sm leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9">
              The bridge is BioLitGraph: a software system whose usefulness depends on scientific
              traceability.
            </p>
          </div>
        </header>
        <section className="shell py-16 lg:py-24">
          <div className="related-strip">
            <a href="/build/biolitgraph">
              <span className="meta text-teal">01</span>
              <span className="display text-3xl">BioLitGraph</span>
              <span className="meta text-muted-foreground">Case study ↗</span>
            </a>
            <a href="/research">
              <span className="meta text-teal">02</span>
              <span className="display text-3xl">Research world</span>
              <span className="meta text-muted-foreground">Index ↗</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
