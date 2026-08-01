import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
  tone?: "info" | "success" | "warning" | "error";
  live?: "polite" | "assertive" | "off";
}
export function StatusMessage({
  children,
  live = "polite",
  tone = "info",
}: Props) {
  return (
    <div
      className={`status-message status-message--${tone}`}
      role={tone === "error" ? "alert" : "status"}
      aria-live={live}
    >
      {children}
    </div>
  );
}
