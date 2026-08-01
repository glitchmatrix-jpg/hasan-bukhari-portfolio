import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
  activeWorld: string;
  label?: string;
}
export function GameWorldFrame({
  activeWorld,
  children,
  label = "World select",
}: Props) {
  return (
    <section className="game-frame" aria-label={label}>
      <header className="game-frame__header">
        <span>{label}</span>
        <span>Active world: {activeWorld}</span>
      </header>
      <div className="game-frame__viewport">{children}</div>
    </section>
  );
}
