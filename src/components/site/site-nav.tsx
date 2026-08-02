import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";

const items = [
  { index: "00", label: "Home", href: "/" },
  { index: "01", label: "Build", href: "/build" },
  { index: "02", label: "Research", href: "/research" },
  { index: "03", label: "Write", href: "/write" },
  { index: "04", label: "About", href: "/about" },
  { index: "05", label: "Résumé", href: "/resume" },
  { index: "06", label: "Contact", href: "/contact" },
] as const;

export function SiteNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
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

        <ul className="hidden items-center gap-7 lg:flex">
          {items.slice(1).map((item) => (
            <li key={item.label}>
              <Link
                to={item.href}
                activeProps={{ "aria-current": "page" }}
                className="meta text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <span className="meta hidden text-muted-foreground md:block lg:hidden">
          Build · Research · Write
        </span>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="meta -mr-2 flex h-11 min-w-11 items-center justify-center px-2 lg:hidden"
            >
              Contents
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[60] bg-blackcherry/80 backdrop-blur-sm" />
            <Dialog.Content className="fixed inset-0 z-[70] overflow-y-auto bg-background lg:hidden">
              <div className="shell flex h-14 items-center justify-between border-b border-border">
                <Dialog.Title className="meta text-muted-foreground">Contents</Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="meta flex h-11 min-w-11 items-center justify-end px-2"
                  >
                    Close
                  </button>
                </Dialog.Close>
              </div>
              <ul className="shell mt-6 pb-12">
                {items.map((item) => (
                  <li key={item.label} className="rule-top">
                    <Dialog.Close asChild>
                      <Link to={item.href} className="flex items-baseline gap-4 py-5">
                        <span className="meta text-cherry">{item.index}</span>
                        <span className="display text-4xl sm:text-5xl">{item.label}</span>
                      </Link>
                    </Dialog.Close>
                  </li>
                ))}
              </ul>
              <p className="shell meta pb-10 text-muted-foreground">
                Computer science · University of Southern Mississippi
              </p>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
