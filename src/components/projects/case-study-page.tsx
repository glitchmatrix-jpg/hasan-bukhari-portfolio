import { getProject } from "@/content/portfolio";
import { getWorld } from "@/content/site";
import { ProjectVisual } from "@/components/projects/project-visual";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";

export function CaseStudyPage({ projectId }: { projectId: string }) {
  const project = getProject(projectId);
  const world = getWorld(project.world);
  const nextWorld = getWorld(world.next);
  const related = project.related.map(getProject);

  return (
    <>
      <SiteNav />
      <main id="main-content" className={`page-stage world-${project.world}`}>
        <header className="page-hero">
          <div className="shell grid-editorial items-end gap-y-12">
            <div className="col-span-4 lg:col-span-7">
              <p className="meta world-mark">{project.eyebrow}</p>
              <h1 className="display mt-6 text-[3.4rem] leading-[0.88] sm:text-7xl lg:text-[7.25rem]">
                {project.title}
              </h1>
              <p className="measure display mt-8 text-2xl leading-snug lg:text-3xl">
                {project.summary}
              </p>
            </div>
            <dl className="col-span-4 border-t border-border lg:col-span-4 lg:col-start-9">
              <div className="border-b border-border py-4">
                <dt className="meta text-muted-foreground">Role</dt>
                <dd className="mt-2 text-sm">{project.role}</dd>
              </div>
              <div className="border-b border-border py-4">
                <dt className="meta text-muted-foreground">Status</dt>
                <dd className="mt-2 text-sm">{project.status}</dd>
              </div>
              <div className="border-b border-border py-4">
                <dt className="meta text-muted-foreground">World</dt>
                <dd className="mt-2 text-sm">{world.title}</dd>
              </div>
            </dl>
          </div>
        </header>

        <section className="shell py-16 lg:py-24" aria-label="Project evidence">
          <ProjectVisual project={project} />
        </section>

        <section className="shell grid-editorial gap-y-12 border-t border-border py-16 lg:py-24">
          <div className="col-span-4 lg:col-span-3">
            <p className="meta world-mark">The question</p>
          </div>
          <div className="col-span-4 lg:col-span-7 lg:col-start-5">
            <p className="display text-3xl leading-tight lg:text-5xl">{project.question}</p>
          </div>
          <ul className="col-span-4 flex flex-wrap gap-2 lg:col-span-8 lg:col-start-5">
            {project.facts.map((fact) => (
              <li key={fact} className="stamp">
                {fact}
              </li>
            ))}
          </ul>
        </section>

        <section className="shell border-t border-border py-16 lg:py-24" aria-label="Deep reading">
          {project.sections.map((section, index) => {
            const boundary = /boundary|without borrowed certainty/i.test(section.title);
            return (
              <article
                key={section.title}
                className="grid-editorial gap-y-5 border-t border-border py-10 first:border-t-0 first:pt-0"
              >
                <p className="meta col-span-1 world-mark">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="display col-span-3 text-3xl lg:col-span-3 lg:text-4xl">
                  {section.title}
                </h2>
                <div className="col-span-4 lg:col-span-6 lg:col-start-7">
                  <p
                    className={`measure text-base leading-relaxed ${boundary ? "publication-note" : ""}`}
                  >
                    {section.body}
                  </p>
                </div>
              </article>
            );
          })}
        </section>

        {project.findings || project.limitations ? (
          <section className="stage-research border-t border-border py-16 lg:py-24">
            <div className="shell grid-editorial gap-y-10">
              <div className="col-span-4 lg:col-span-5">
                <p className="meta text-teal">What the current record supports</p>
                <h2 className="display mt-5 text-4xl lg:text-5xl">
                  Finding and limit stay together.
                </h2>
              </div>
              <div className="col-span-4 lg:col-span-3 lg:col-start-7">
                <h3 className="meta text-teal">Findings</h3>
                <ul className="mt-4 border-t border-border">
                  {project.findings?.map((finding) => (
                    <li
                      key={finding}
                      className="border-b border-border py-4 text-sm leading-relaxed"
                    >
                      {finding}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-4 lg:col-span-3 lg:col-start-10">
                <h3 className="meta text-rose">Limitations</h3>
                <ul className="mt-4 border-t border-border">
                  {project.limitations?.map((limitation) => (
                    <li
                      key={limitation}
                      className="border-b border-border py-4 text-sm leading-relaxed"
                    >
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ) : null}

        {project.repository ? (
          <section className="shell border-t border-border py-14">
            <div className="grid-editorial items-center gap-y-5">
              <p className="meta col-span-4 text-muted-foreground lg:col-span-3">Source</p>
              <div className="col-span-4 lg:col-span-7 lg:col-start-5">
                <a
                  href={project.repository.href}
                  target="_blank"
                  rel="noreferrer"
                  className="action-solid"
                >
                  {project.repository.label}
                </a>
              </div>
            </div>
          </section>
        ) : null}

        <nav className="shell border-t border-border py-16 lg:py-24" aria-label="Related projects">
          <p className="meta text-muted-foreground">Related work</p>
          <div className="related-strip mt-6">
            {related.map((item, index) => (
              <a key={item.id} href={item.route}>
                <span className="meta world-mark">{String(index + 1).padStart(2, "0")}</span>
                <span className="display text-2xl lg:text-3xl">{item.title}</span>
                <span className="meta text-muted-foreground">{getWorld(item.world).title} ↗</span>
              </a>
            ))}
          </div>
        </nav>

        <section className="border-t border-border py-16 lg:py-20">
          <div className="shell grid-editorial items-end gap-y-7">
            <div className="col-span-4 lg:col-span-7">
              <p className="meta text-muted-foreground">Cross-world transition</p>
              <p className="display mt-4 text-4xl lg:text-6xl">{nextWorld.title} comes next.</p>
              <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
                {nextWorld.summary}
              </p>
            </div>
            <div className="col-span-4 lg:col-span-3 lg:col-start-10">
              <a href={nextWorld.route} className="action">
                Enter {nextWorld.title}
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
