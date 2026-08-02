import resumeSE from "@/assets/resume-se.pdf.asset.json";

const rows = [
  {
    label: "Email",
    value: "Withheld from this prototype",
    note: "Confirm the public address before publishing",
    href: null,
  },
  {
    label: "LinkedIn",
    value: "Profile URL to confirm",
    note: "Link added once Hasan supplies it",
    href: null,
  },
  {
    label: "GitHub — primary",
    value: "github.com/PurplePoet25",
    note: "Games, research software",
    href: "https://github.com/PurplePoet25",
  },
  {
    label: "GitHub — mobile",
    value: "github.com/glitchmatrix-jpg",
    note: "Android and Flutter work",
    href: "https://github.com/glitchmatrix-jpg",
  },
  {
    label: "Résumé",
    value: "Software engineering · PDF",
    note: "Computational biology sheet in the résumé section",
    href: resumeSE.url,
  },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-border py-24 lg:py-28"
      aria-labelledby="contact-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 aspect-square w-[40rem] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--cherry) 32%, transparent), transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      <div className="shell grid-editorial relative gap-y-12">
        <div className="col-span-4 lg:col-span-6">
          <p className="meta text-cherry">Contact</p>
          <h2 id="contact-title" className="display mt-6 text-5xl lg:text-[4.5rem]">
            Write to me when there's something worth making.
          </h2>
          <p className="measure mt-6 text-sm leading-relaxed text-muted-foreground">
            Open to software-engineering internships, research assistance in computational biology,
            and collaborators on games or poetry. No form — just the addresses.
          </p>
        </div>

        <dl className="col-span-4 lg:col-span-5 lg:col-start-8">
          {rows.map((row) => (
            <div key={row.label} className="border-t border-border py-5 last:border-b">
              <dt className="meta text-muted-foreground">{row.label}</dt>
              <dd className="mt-2">
                {row.href ? (
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-rule display text-2xl"
                  >
                    {row.value}
                  </a>
                ) : (
                  <span className="display text-2xl text-muted-foreground">{row.value}</span>
                )}
                <p className="meta mt-2 text-muted-foreground">{row.note}</p>
              </dd>
            </div>
          ))}
        </dl>

        <p className="meta col-span-4 text-muted-foreground lg:col-span-12">
          Hasan Bukhari · Build · Research · Write · Hattiesburg, Mississippi
        </p>
      </div>
    </footer>
  );
}
