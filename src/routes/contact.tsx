import { createFileRoute } from "@tanstack/react-router";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { publicLinks } from "@/content/site";
import { sitePath } from "@/lib/site-path";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hasan Bukhari" },
      {
        name: "description",
        content: "Public contact status, GitHub profiles, and résumé links for Hasan Bukhari.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="page-stage">
        <header className="page-hero">
          <div className="shell grid-editorial gap-y-10">
            <div className="col-span-4 lg:col-span-7">
              <p className="meta text-cherry">Contact</p>
              <h1 className="display mt-6 text-6xl sm:text-8xl lg:text-[8rem]">
                Make the first line count.
              </h1>
            </div>
            <div className="col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="text-sm leading-relaxed text-muted-foreground">
                A public email address for the website has not been confirmed. The two GitHub
                profiles and résumé downloads below are the verified public routes.
              </p>
            </div>
          </div>
        </header>

        <section className="shell grid-editorial gap-y-10 py-16 lg:py-24">
          <div className="col-span-4 lg:col-span-3">
            <h2 className="display text-4xl">Public links.</h2>
          </div>
          <div className="col-span-4 lg:col-span-8 lg:col-start-5">
            {publicLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="project-index-row"
              >
                <span className="meta text-cherry">↗</span>
                <span className="display text-3xl">{link.value}</span>
                <span className="meta text-muted-foreground">{link.label}</span>
              </a>
            ))}
            <a href={sitePath("/resume")} className="project-index-row">
              <span className="meta text-cherry">PDF</span>
              <span className="display text-3xl">Two résumés</span>
              <span className="meta text-muted-foreground">Software · computational biology</span>
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
