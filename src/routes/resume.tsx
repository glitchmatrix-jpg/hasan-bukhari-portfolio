import { createFileRoute } from "@tanstack/react-router";

import { Resumes } from "@/components/site/resumes";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumés — Hasan Bukhari" },
      {
        name: "description",
        content:
          "Software engineering, ML / research engineering, and computational biology résumés for Hasan Bukhari, updated August 2026.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="page-stage stage-bone bg-background text-foreground">
        <Resumes headingLevel="h1" />
        <section className="shell border-t border-border py-16">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            All three files are one page. They contain a public email address supplied inside the
            original résumé PDFs; no phone number or street address was detected during the
            publication review.
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
