"use client";

import { useEffect, useState, type ComponentType } from "react";

export function IdentityStage({ poster }: { poster: string }) {
  const [CanvasScene, setCanvasScene] = useState<ComponentType | null>(null);
  const [status, setStatus] = useState("Static object");

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const desktopPointer = window.matchMedia("(min-width: 64rem)").matches;
    const canvas = document.createElement("canvas");
    const webgl = canvas.getContext("webgl2") || canvas.getContext("webgl");

    if (reduced) {
      const frame = window.requestAnimationFrame(() =>
        setStatus("Static object / motion reduced"),
      );
      return () => window.cancelAnimationFrame(frame);
    }
    if (!desktopPointer || !webgl) return;

    let active = true;
    const load = () => {
      void import("./IdentityCanvas").then((module) => {
        if (!active) return;
        setCanvasScene(() => module.IdentityCanvas);
        setStatus("Interactive object");
      });
    };
    const timer = window.setTimeout(load, 1400);

    return () => {
      active = false;
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      className={`identity-stage${CanvasScene ? " identity-stage--webgl" : ""}`}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="identity-stage__poster" src={poster} alt="" />
      {CanvasScene ? <CanvasScene /> : null}
      <span className="identity-stage__status">{status}</span>
    </div>
  );
}
