const items = [
  ["Writing", "OpenFold manuscript"],
  ["Developing", "Isoform Atlas"],
  ["Working", "HSE analytics at Engro"],
  ["Next", "Southern Miss · Fall 2026"],
] as const;

export function CurrentDesk() {
  return (
    <section className="border-t border-border py-16 lg:py-20" aria-labelledby="current-desk-title">
      <div className="shell grid-editorial gap-y-10">
        <div className="col-span-4 lg:col-span-4">
          <p className="meta text-rose">Current desk</p>
          <h2 id="current-desk-title" className="display mt-4 text-4xl lg:text-5xl">
            Work still in motion.
          </h2>
          <p className="measure mt-5 text-base leading-relaxed text-muted-foreground">
            A small, honest snapshot of what is active now—not a feed, not a productivity performance.
          </p>
        </div>

        <dl className="col-span-4 grid gap-x-6 gap-y-0 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
          {items.map(([label, value]) => (
            <div key={label} className="border-t border-border py-5">
              <dt className="meta text-cherry">{label}</dt>
              <dd className="display mt-3 text-2xl leading-tight">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
