"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/** Progressive enhancement only: mobile, keyboard, and reduced-motion users keep native scroll. */
export function SmoothScroll() {
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 64rem) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!desktop.matches || reduced.matches) return;

    const lenis = new Lenis({
      anchors: true,
      autoRaf: true,
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.85,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
