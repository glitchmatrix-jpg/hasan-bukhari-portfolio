import Link from "next/link";

const primaryLinks = [
  ["Build", "/build"],
  ["Research", "/research"],
  ["Write", "/write"],
  ["About", "/about"],
  ["Résumés", "/resume"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-mark" href="/" aria-label="Hasan Bukhari, home">
        HB / ISSUE 01
      </Link>
      <nav aria-label="Primary navigation">
        <ul className="site-nav">
          {primaryLinks.map(([label, href], index) => (
            <li key={href}>
              <Link href={href}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")} </span>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
