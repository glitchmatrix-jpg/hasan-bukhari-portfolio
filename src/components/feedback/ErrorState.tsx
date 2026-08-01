import { ActionButton } from "@/components/ui/ActionButton";
import type { ReactNode } from "react";
interface Props {
  title?: string;
  children: ReactNode;
  onRetry?: () => void;
}
export function ErrorState({
  children,
  onRetry,
  title = "Something interrupted this section",
}: Props) {
  return (
    <section className="error-state">
      <h2>{title}</h2>
      <div>{children}</div>
      {onRetry ? (
        <ActionButton onClick={onRetry}>Try again</ActionButton>
      ) : null}
    </section>
  );
}
