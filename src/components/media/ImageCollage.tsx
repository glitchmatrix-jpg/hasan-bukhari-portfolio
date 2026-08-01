import type { ReactNode } from "react";
interface Props { children: ReactNode; label: string; }
export function ImageCollage({ children, label }: Props) { return <div className="image-collage" role="group" aria-label={label}>{children}</div>; }
