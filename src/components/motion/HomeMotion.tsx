"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type ReactNode } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HomeMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-hero-line]", {
          opacity: 0,
          y: 36,
          duration: 0.95,
          ease: "power3.out",
          stagger: 0.1,
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 44,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 86%", once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
          gsap.to(item, {
            yPercent: -9,
            ease: "none",
            scrollTrigger: {
              trigger: item.closest("section") ?? item,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          });
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
