import { sitePath } from "@/lib/site-path";

const works = [
  { index: "01", title: "HEARTLINE", kind: "Product", href: "/build/heartline" },
  {
    index: "02",
    title: "CancerShift",
    kind: "Computational biology",
    href: "/research/cancershift",
  },
  { index: "03", title: "To Ash Again", kind: "Game", href: "/build/to-ash-again" },
  { index: "04", title: "Flooded", kind: "Writing and book design", href: "/write/flooded" },
] as const;

export function SelectedWorkIndex() {
  return (
    <section
      className="stage-bone bg-background py-20 text-foreground sm:py-24 lg:py-24"
      aria-labelledby="selected-work-title"
    >
      <div className="shell grid-editorial gap-y-12">
        <div className="col-span-4 lg:col-span-3">
          <p className="meta text-cherry">Selected work</p>
          <h2 id="selected-work-title" className="display mt-4 text-4xl lg:text-5xl">
            Four things that explain the rest.
          </h2>
          <p className="measure mt-5 text-base leading-relaxed text-muted-foreground">
            Product, research, games, and writing—four projects that show how the same instinct
            changes form.
          </p>
        </div>

        <ol className="col-span-4 lg:col-span-8 lg:col-start-5">
          {works.map((work) => (
            <li key={work.title} className="border-t border-border last:border-b">
              <a
                href={sitePath(work.href)}
                className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-3 py-5 transition-colors hover:text-cherry sm:grid-cols-[4rem_1fr_auto] sm:gap-x-6"
              >
                <span className="meta text-cherry">{work.index}</span>
                <span className="display text-3xl sm:text-4xl">{work.title}</span>
                <span className="meta col-start-2 mt-2 text-muted-foreground transition-colors group-hover:text-current sm:col-start-auto sm:mt-0">
                  {work.kind}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
