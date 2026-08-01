import type { HTMLAttributes, ReactNode } from "react";
interface Props extends HTMLAttributes<HTMLSpanElement> { children: ReactNode; tone?: "global" | "build" | "research" | "write" | "warning"; }
export function StampedLabel({ children, className = "", tone = "global", ...props }: Props) { return <span className={`stamped-label stamped-label--${tone} ${className}`.trim()} {...props}>{children}</span>; }
