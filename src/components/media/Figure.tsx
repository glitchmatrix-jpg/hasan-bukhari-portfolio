import type { ReactNode } from "react";
interface Props { children: ReactNode; number?: string; title: string; caption: string; longDescription?: string; }
export function Figure({ caption, children, longDescription, number, title }: Props) { return <figure className="figure"><div className="figure__media">{children}</div><figcaption className="figure__caption"><span className="figure__label">{number ? `Figure ${number}. ` : ""}{title}</span><span>{caption}</span>{longDescription ? <span className="figure__description">{longDescription}</span> : null}</figcaption></figure>; }
