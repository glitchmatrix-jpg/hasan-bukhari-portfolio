import { publicLinks } from "@/content/site";
import { sitePath } from "@/lib/site-path";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border py-20 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 hidden aspect-square w-[40rem] -translate-y-1/2 rounded-full sm:block"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--cherry) 26%, transparent), transparent 65%)",
          filter: "blur(20px)",
        }}
      />

      <div className="shell grid-editorial relative gap-y-12">
        <div className="col-span-4 lg:col-span-6">
          <p className="meta text-cherry">Exit scene</p>
          <h2 className="display mt-5 text-5xl lg:text-[4.5rem]">
            Write to me when there&apos;s something worth making.
          </h2>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            Email is public. Send the useful version: what you are making, where it is stuck, and
            why it matters.
          </p>
        </div>

        <nav className="col-span-4 lg:col-span-5 lg:col-start-8" aria-label="Footer">
          {publicLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="block border-t border-border py-5 last:border-b"
            >
              <span className="meta text-muted-foreground">{link.label}</span>
              <span className="link-rule display mt-2 block text-2xl">{link.value}</span>
            </a>
          ))}
          <a href={sitePath("/resume")} className="block border-t border-border py-5">
            <span className="meta text-muted-foreground">Résumé</span>
            <span className="link-rule display mt-2 block text-2xl">Three one-page PDFs</span>
          </a>
          <a href={sitePath("/contact")} className="block border-y border-border py-5">
            <span className="meta text-muted-foreground">Contact page</span>
            <span className="link-rule display mt-2 block text-2xl">Email and public profiles</span>
          </a>
        </nav>

        <p className="meta col-span-4 text-muted-foreground lg:col-span-12">
          Hasan Bukhari · Build · Research · Write · Hattiesburg, Mississippi
        </p>
      </div>
    </footer>
  );
}
