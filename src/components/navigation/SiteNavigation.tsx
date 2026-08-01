import type { Route } from "next";
import Link from "next/link";

const items = [
  { href: "/build", label: "Build", number: "01" },
  { href: "/research", label: "Research", number: "02" },
  { href: "/write", label: "Write", number: "03" },
  { href: "/about", label: "About", number: "04" },
  { href: "/resume", label: "Résumé", number: "05" },
  { href: "/contact", label: "Contact", number: "06" },
] as const;

export function SiteNavigation() {
  return (
    <nav aria-label="Primary navigation">
      <ul className="site-nav__list">
        {items.map((item) => (
          <li key={item.href}>
            <Link className="site-nav__link" href={item.href as Route}>
              <span aria-hidden="true" className="site-nav__number">
                {item.number}
              </span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
