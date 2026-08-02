import { useEffect, useRef, useState } from "react";

import relic from "@/assets/relic.png";

/**
 * The identity object: a machined "signal relic" — black-cherry lacquer,
 * chrome spine, one lit waveform window, embossed HB.
 *
 * Prototype treatment of the eventual real-time 3D scene: weighted pointer
 * tilt, a moving specular sheen and a cherry key light. Limited rotation,
 * no continuous spin, and a static poster under reduced motion.
 */
export function Relic() {
  const frame = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [still, setStill] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const update = () => setStill(query.matches || coarse.matches);
    update();
    query.addEventListener("change", update);
    coarse.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      coarse.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (still) return;
    const onMove = (event: PointerEvent) => {
      const box = frame.current?.getBoundingClientRect();
      if (!box) return;
      const x = (event.clientX - (box.left + box.width / 2)) / box.width;
      const y = (event.clientY - (box.top + box.height / 2)) / box.height;
      setTilt({
        x: Math.max(-1, Math.min(1, x)) * 7,
        y: Math.max(-1, Math.min(1, y)) * 5,
      });
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [still]);

  return (
    <div
      ref={frame}
      className="relative isolate mx-auto w-full max-w-[34rem]"
      style={{ perspective: "1400px" }}
    >
      {/* cherry key light behind the object */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 aspect-square w-[112%] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 52%, color-mix(in oklab, var(--cherry) 55%, transparent), color-mix(in oklab, var(--oxblood) 35%, transparent) 42%, transparent 70%)",
          filter: "blur(18px)",
        }}
      />
      <div
        className="settle-in relative transition-transform duration-500 ease-out will-change-transform"
        style={{
          transform: still
            ? undefined
            : `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg) translate3d(${tilt.x * 0.5}px, ${tilt.y * 0.4}px, 0)`,
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={relic}
          width={1280}
          height={1600}
          alt="A machined object the size of a paperweight: two lobes of black-cherry lacquer joined by a polished chrome spine, with a lit crimson waveform window across the front and an embossed HB monogram."
          className="w-full select-none"
          draggable={false}
        />
        {/* specular sweep across the lacquer */}
        {!still ? (
          <div
            aria-hidden="true"
            className="sheen pointer-events-none absolute inset-0 mix-blend-screen"
            style={{
              background:
                "linear-gradient(102deg, transparent 34%, color-mix(in oklab, var(--rose) 26%, transparent) 50%, transparent 64%)",
              maskImage: `url(${relic})`,
              maskSize: "100% 100%",
              WebkitMaskImage: `url(${relic})`,
              WebkitMaskSize: "100% 100%",
            }}
          />
        ) : null}
      </div>

      <p className="meta absolute -bottom-1 left-0 text-muted-foreground">
        Fig. 00 — Identity object
      </p>
    </div>
  );
}
