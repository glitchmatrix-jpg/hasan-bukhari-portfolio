import { projects, type World } from "@/content/portfolio";
import { getWorld, worlds } from "@/content/site";
import { ProjectVisual } from "@/components/projects/project-visual";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";

export function WorldPage({ worldId }: { worldId: World }) {
  const world = getWorld(worldId);
  const nextWorld = getWorld(world.next);
  const entries = projects.filter((project) => project.world === worldId);
  const feature = entries[0];

  return (
    <>
      <SiteNav />
      <main id="main-content" className={`page-stage world-${worldId}`}>
        <header className="page-hero">
          <div className="shell grid-editorial gap-y-10">
            <div className="col-span-4 lg:col-span-8">
              <p className="meta world-mark">{world.eyebrow}</p>
              <h1 className="display mt-6 text-[5rem] leading-[0.82] sm:text-8xl lg:text-[11rem]">
                {world.title}
              </h1>
            </div>
            <div className="col-span-4 lg:col-span-4 lg:col-start-9 lg:self-end">
              <p className="display text-2xl leading-snug lg:text-3xl">{world.summary}</p>
              <p className="meta mt-7 text-muted-foreground">
                {entries.length} {entries.length === 1 ? "project" : "projects"}
              </p>
            </div>
          </div>
        </header>

        {feature ? (
          <section className="shell grid-editorial items-center gap-y-10 py-16 lg:py-24">
            <div className="col-span-4 lg:col-span-7">
              <ProjectVisual project={feature} compact />
            </div>
            <div className="col-span-4 lg:col-span-4 lg:col-start-9">
              <p className="meta world-mark">First read</p>
              <h2 className="display mt-5 text-5xl lg:text-6xl">{feature.title}</h2>
              <p className="measure mt-6 text-sm leading-relaxed text-muted-foreground">
                {feature.summary}
              </p>
              <div className="mt-8">
                <a href={feature.route} className="action-solid">
                  Read the case study
                </a>
              </div>
            </div>
          </section>
        ) : null}

        <section
          className="shell border-t border-border py-16 lg:py-24"
          aria-labelledby="world-index"
        >
          <div className="grid-editorial gap-y-8">
            <div className="col-span-4 lg:col-span-3">
              <h2 id="world-index" className="display text-4xl lg:text-5xl">
                Full index.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                One verified sentence, then the evidence.
              </p>
            </div>
            <ol className="col-span-4 lg:col-span-8 lg:col-start-5">
              {entries.map((project, index) => (
                <li key={project.id}>
                  <a href={project.route} className="project-index-row">
                    <span className="meta world-mark">{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <strong className="display block text-3xl font-normal">
                        {project.title}
                      </strong>
                      <span className="meta mt-3 block text-muted-foreground">{project.role}</span>
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {project.summary}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <nav className="border-t border-border py-16 lg:py-24" aria-label="Other worlds">
          <div className="shell grid-editorial gap-y-8">
            <div className="col-span-4 lg:col-span-6">
              <p className="meta text-muted-foreground">Next world</p>
              <p className="display mt-4 text-5xl lg:text-7xl">{nextWorld.title}</p>
              <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
                {nextWorld.summary}
              </p>
            </div>
            <div className="col-span-4 flex flex-col gap-3 lg:col-span-4 lg:col-start-9 lg:self-end">
              <a href={nextWorld.route} className="action-solid">
                Enter {nextWorld.title}
              </a>
              <a href="/archive" className="action">
                Open the complete archive
              </a>
            </div>
          </div>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}

export function ArchivePage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="page-stage stage-bone bg-background text-foreground">
        <header className="page-hero">
          <div className="shell grid-editorial gap-y-8">
            <div className="col-span-4 lg:col-span-7">
              <p className="meta text-cherry">Complete archive</p>
              <h1 className="display mt-6 text-6xl sm:text-8xl lg:text-[8.5rem]">
                Everything public.
              </h1>
            </div>
            <p className="col-span-4 text-sm leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9 lg:self-end">
              Ten case studies. Private repositories, unpublished figures, and unapproved excerpts
              remain clearly marked rather than filled with substitutes.
            </p>
          </div>
        </header>

        <section className="shell py-16 lg:py-24">
          <ol>
            {projects.map((project, index) => (
              <li key={project.id}>
                <a href={project.route} className="project-index-row">
                  <span className="meta text-cherry">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong className="display block text-3xl font-normal">{project.title}</strong>
                    <span className="meta mt-3 block text-muted-foreground">
                      {getWorld(project.world).title} · {project.status}
                    </span>
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <nav className="shell border-t border-border py-16" aria-label="Worlds">
          <div className="grid gap-3 sm:grid-cols-3">
            {worlds.map((world) => (
              <a key={world.id} href={world.route} className="action">
                {world.index} · {world.title}
              </a>
            ))}
          </div>
        </nav>
      </main>
      <SiteFooter />
    </>
  );
}
