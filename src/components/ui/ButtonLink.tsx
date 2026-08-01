import type { Route } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "secondary" | "text";
  external?: boolean;
}
export function ButtonLink({
  children,
  className = "",
  external = false,
  href,
  variant = "primary",
}: Props) {
  const content = (
    <>
      <span>{children}</span>
      {external ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );
  const classes = `button-link button-link--${variant} ${className}`.trim();
  if (external)
    return (
      <a className={classes} href={href} rel="noreferrer" target="_blank">
        {content}
      </a>
    );
  return (
    <Link className={classes} href={href as Route}>
      {content}
    </Link>
  );
}
