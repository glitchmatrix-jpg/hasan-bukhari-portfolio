import type { ButtonHTMLAttributes, ReactNode } from "react";
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> { children: ReactNode; variant?: "primary" | "secondary" | "text"; }
export function ActionButton({ children, className = "", type = "button", variant = "primary", ...props }: Props) { return <button className={`action-button action-button--${variant} ${className}`.trim()} type={type} {...props}>{children}</button>; }
