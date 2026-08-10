import { createFileRoute } from "@tanstack/react-router";

import { ProjectVisual } from "@/components/projects/project-visual";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { getProject } from "@/content/portfolio";
import { profile } from "@/content/site";
import { sitePath } from "@/lib/site-path";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hasan Bukhari" },
      {
        name: "description",
        content:
          "Hasan Bukhari is a computer science student at Southern Miss working across software, computational biology, games, poetry, and student arts programming.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const spa = getProject("student-poets-association");

  return (
    <>
      <SiteNav />
      <main id="main-content" className="page-stage">
        <header className="page-hero">
          <div className="shell grid-editorial items-end gap-y-10">
            <div className="col-span-4 lg:col-span-7">
              <p className="meta text-cherry">About</p>
              <h1 className="display mt-6 text-6xl sm:text-8xl lg:text-[8rem]">Karachi first.</h1>
              <p className="display mt-6 text-3xl text-rose lg:text-5xl">Mississippi now.</p>
            </div>
            <p className="measure col-span-4 text-sm leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9">
              {profile.statement} I study computer science at Southern Miss, with minors in
              biological sciences and political science, and expect to graduate in December 2028.
            </p>
          </div>
        </header>

        <section className="shell grid-editorial gap-y-12 py-16 lg:py-24">
          <div className="col-span-4 lg:col-span-4">
            <h2 className="display text-4xl lg:text-5xl">The short version.</h2>
          </div>
          <dl className="col-span-4 lg:col-span-7 lg:col-start-6">
            {[
              ["From", profile.origin],
              ["Studies", profile.degree],
              ["Minors", profile.minor],
              ["University", profile.university],
              ["Expected graduation", profile.expectedGraduation],
              ["GPA", profile.gpa],
              ["Research", "Undergraduate researcher · USM Ichthyology Lab"],
              ["Community", "Founder and President · Student Poets Association"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-[8rem_1fr] gap-4 border-t border-border py-4 last:border-b"
              >
                <dt className="meta text-muted-foreground">{label}</dt>
                <dd className="text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="border-t border-border py-16 lg:py-24">
          <div className="shell grid-editorial items-center gap-y-12">
            <div className="col-span-4 lg:col-span-6">
              <ProjectVisual project={spa} compact />
            </div>
            <div className="col-span-4 lg:col-span-5 lg:col-start-8">
              <p className="meta text-rose">The human section</p>
              <h2 className="display mt-5 text-4xl lg:text-6xl">Work also means making a room.</h2>
              <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
                The Student Poets Association work is open mics, public showcases, collaborative
                arts programming, and club operations. No attendance number or origin story is
                supplied where the record does not support one.
              </p>
              <div className="mt-8">
                <a href={sitePath(spa.route)} className="action-solid">
                  Student Poets Association
                </a>
              </div>
            </div>
          </div>
        </section>

        <nav className="shell border-t border-border py-16" aria-label="Next pages">
          <div className="flex flex-wrap gap-3">
            <a href={sitePath("/resume")} className="action-solid">
              Read the résumés
            </a>
            <a href={sitePath("/contact")} className="action">
              Contact and public links
            </a>
          </div>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
