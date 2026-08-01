import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
interface Props extends Omit<ComponentProps<typeof Link>, "children"> { children: ReactNode; variant?: "primary" | "secondary" | "text"; external?: boolean; }
export function ButtonLink({ children, className = "", external = false, variant = "primary", ...props }: Props) { return <Link className={`button-link button-link--${variant} ${className}`.trim()} {...props} {...(external ? { rel: "noreferrer", target: "_blank" } : {})}><span>{children}</span>{external ? <span className="sr-only"> (opens in a new tab)</span> : null}</Link>; }
