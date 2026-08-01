import type { HTMLAttributes, ReactNode } from "react";
interface Props extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2;
  eyebrow?: string;
}
export function Masthead({
  children,
  className = "",
  eyebrow,
  level = 1,
  ...props
}: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className="masthead">
      {eyebrow ? <p className="masthead__eyebrow">{eyebrow}</p> : null}
      <Heading className={`masthead__title ${className}`.trim()} {...props}>
        {children}
      </Heading>
    </div>
  );
}
