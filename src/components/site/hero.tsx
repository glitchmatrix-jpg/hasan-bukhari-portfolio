import { Link } from "@tanstack/react-router";

import { profile } from "@/content/site";

import { Relic } from "./relic";

const evidence = [
  ["Research", "Computational biology"],
  ["Products", "Offline-first systems"],
  ["Software", "Scientific tools"],
  ["Creative", "Games and writing"],
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14" aria-labelledby="hero-name">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[56%]"
        style={{
          background: "radial-gradient(82% 72% at 68% 42%, var(--cola), transparent 70%)",
        }}
      />

      <div className="shell grid-editorial relative min-h-[calc(100svh-3.5rem)] items-center gap-y-14 py-16 sm:py-18 lg:gap-x-8 lg:py-10">
        <div className="col-span-4 lg:col-span-6 lg:pr-4">
          <p className="meta text-cherry">Build · Research · Write</p>

          <h1 id="hero-name" className="display mt-6 text-[3.25rem] sm:text-7xl lg:text-[6.25rem]">
            Hasan
            <br />
            Bukhari
          </h1>

          <p className="display mt-8 max-w-[37rem] text-[1.75rem] leading-[1.08] sm:text-3xl lg:text-[2.45rem]">
            I build systems for things that are difficult to see.
          </p>

          <div className="mt-7">
            <p className="measure text-base leading-relaxed text-muted-foreground">
              Software, computational biology, games, and writing—different forms, often the same
              question: how do we turn complex signals into something a person can understand?
            </p>

            <p className="measure mt-4 text-sm leading-relaxed text-muted-foreground">
              Karachi first, Mississippi now. Computer science at Southern Miss with biological
              sciences and political science alongside it.
            </p>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/build" className="action-solid">
              Explore the work
            </Link>
            <Link to="/resume" className="action">
              Résumés
            </Link>
          </div>

          <div className="mt-11">
            <dl className="rule-top grid grid-cols-2 gap-x-5 gap-y-5 pt-5 sm:grid-cols-4">
              {evidence.map(([label, value]) => (
                <div key={label}>
                  <dt className="meta text-cherry">{label}</dt>
                  <dd className="mt-2 text-xs leading-relaxed text-foreground">{value}</dd>
                </div>
              ))}
            </dl>

            <dl className="mt-6 grid grid-cols-2 gap-y-4 border-t border-border pt-5 sm:grid-cols-4">
              {[
                ["Study", "Computer Science, B.S. · 2028"],
                ["GPA", profile.gpa],
                ["Minors", profile.minor],
                ["Lab", "USM Ichthyology"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="meta text-muted-foreground">{label}</dt>
                  <dd className="mt-1 text-xs text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-6 lg:col-start-7">
          <div className="mx-auto w-full max-w-[48rem] lg:-mr-12 lg:-translate-y-7 lg:pl-2">
            <Relic />
          </div>
        </div>
      </div>
    </section>
  );
}
