import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
  level?: 1 | 2 | 3;
  decorativeText?: string;
}
export function CutoutHeading({ children, decorativeText, level = 2 }: Props) {
  const Heading = `h${level}` as "h1" | "h2" | "h3";
  return (
    <Heading className="cutout-heading">
      <span>{children}</span>
      {decorativeText ? (
        <span aria-hidden="true" className="cutout-heading__decorative">
          {decorativeText}
        </span>
      ) : null}
    </Heading>
  );
}
