import type { HTMLAttributes, ReactNode } from "react";
interface Props extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: "article" | "aside" | "section";
  tone?: "cream" | "blue" | "cherry";
}
export function TornPaperPanel({
  as: Element = "section",
  children,
  className = "",
  tone = "cream",
  ...props
}: Props) {
  return (
    <Element
      className={`torn-paper torn-paper--${tone} ${className}`.trim()}
      {...props}
    >
      {children}
    </Element>
  );
}
