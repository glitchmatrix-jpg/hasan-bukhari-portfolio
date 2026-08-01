import type { ReactNode } from "react";
import { StampedLabel } from "./StampedLabel";
import { TornPaperPanel } from "./TornPaperPanel";
interface Props {
  label?: string;
  title: string;
  children: ReactNode;
}
export function EditorialNote({
  children,
  label = "Editorial note",
  title,
}: Props) {
  return (
    <TornPaperPanel as="aside" className="editorial-note">
      <StampedLabel>{label}</StampedLabel>
      <h2 className="editorial-note__title">{title}</h2>
      <div className="editorial-note__body">{children}</div>
    </TornPaperPanel>
  );
}
