import { Link } from "@tanstack/react-router";

import { Relic } from "./relic";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14" aria-labelledby="hero-name">
      {/* one dominant idea: the relic sits in a cherry-lit vitrine, the name owns the page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[55%]"
        style={{
          background: "radial-gradient(80% 70% at 70% 40%, var(--cola), transparent 70%)",
        }}
      />

      <div className="shell grid-editorial relative min-h-[calc(100svh-3.5rem)] items-center gap-y-12 py-14 lg:py-0">
        <div className="col-span-4 lg:col-span-6 lg:pr-6">
          <p className="meta text-cherry">Build · Research · Write</p>

          <h1 id="hero-name" className="display mt-6 text-[3.25rem] sm:text-7xl lg:text-[6.5rem]">
            Hasan
            <br />
            Bukhari
          </h1>

          <p className="display mt-8 max-w-[30rem] text-[1.6rem] leading-[1.15] sm:text-3xl lg:text-[2.1rem]">
            I build software, study biological signals, and write poems and games.
          </p>

          <p className="measure mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            I'm Hasan, a computer science student at Southern Miss with a biology minor. Karachi
            first, Mississippi now. Android and backend work on one side, cross-cohort cancer
            classification on the other, a Pygame platformer and a poetry collection in between.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link to="/" hash="work" className="action-solid">
              View work
            </Link>
            <Link to="/" hash="resumes" className="action">
              Résumés
            </Link>
          </div>

          <dl className="rule-top mt-12 grid grid-cols-2 gap-y-4 pt-5 sm:grid-cols-4">
            {[
              ["Study", "CIS, B.S. · 2028"],
              ["Minor", "Biological sciences"],
              ["Lab", "USM Ichthyology"],
              ["Leads", "Student Poets Association"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="meta text-muted-foreground">{label}</dt>
                <dd className="mt-1 text-xs text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="col-span-4 lg:col-span-6 lg:col-start-7">
          <div className="lg:-mr-16 lg:translate-y-2">
            <Relic />
          </div>
        </div>
      </div>
    </section>
  );
}
