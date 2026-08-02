import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const items = [
  { index: "00", label: "Home", href: "/" as const, hash: "" },
  { index: "01", label: "Work", href: "/" as const, hash: "work" },
  { index: "02", label: "About", href: "/" as const, hash: "about" },
  { index: "03", label: "Résumés", href: "/" as const, hash: "resumes" },
  { index: "04", label: "Contact", href: "/" as const, hash: "contact" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <nav aria-label="Primary" className="shell flex h-14 items-center justify-between gap-6">
        <Link to="/" className="meta flex items-center gap-3 text-foreground">
          <span
            aria-hidden="true"
            className="grid size-6 place-items-center border border-current text-[0.5625rem] tracking-normal"
          >
            HB
          </span>
          <span className="hidden sm:inline">Hasan Bukhari</span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {items.slice(1).map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                {...(item.hash ? { hash: item.hash } : {})}
                className="meta text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <span className="meta text-muted-foreground">Build · Research · Write</span>
        </div>

        <button
          type="button"
          className="meta -mr-2 flex h-11 min-w-11 items-center justify-center px-2 md:hidden"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          Contents
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 z-50 bg-background md:hidden">
          <div className="shell flex h-14 items-center justify-between">
            <span className="meta text-muted-foreground">Contents</span>
            <button
              type="button"
              className="meta flex h-11 min-w-11 items-center justify-end px-2"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <ul className="shell mt-6">
            {items.map((item) => (
              <li key={item.label} className="rule-top">
                <Link
                  to={item.href}
                  {...(item.hash ? { hash: item.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5"
                >
                  <span className="meta text-cherry">{item.index}</span>
                  <span className="display text-4xl">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="shell meta mt-10 text-muted-foreground">
            Computer science · University of Southern Mississippi
          </p>
        </div>
      ) : null}
    </header>
  );
}
