import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import book from "@/assets/flooded-book.jpg.asset.json";
import wrap from "@/assets/flooded-wrap.jpg.asset.json";

export function SceneFlooded() {
  const frame = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;
    const onMove = (event: PointerEvent) => {
      const box = frame.current?.getBoundingClientRect();
      if (!box) return;
      const x = (event.clientX - (box.left + box.width / 2)) / box.width;
      setTilt(Math.max(-1, Math.min(1, x)) * 6);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      className="stage-write bg-background py-24 text-foreground lg:py-32"
      aria-labelledby="flooded-title"
    >
      <div className="shell grid-editorial items-center gap-y-14">
        {/* dominant object: a physical book, and the site goes quiet around it */}
        <div className="col-span-4 lg:col-span-6" ref={frame}>
          <div style={{ perspective: "1200px" }}>
            <img
              src={book.url}
              alt="A physical copy of Flooded held in one hand: a deep blue cloth cover with cream type."
              loading="lazy"
              className="w-full max-w-[26rem] transition-transform duration-700 ease-out"
              style={{
                transform: `rotateY(${tilt}deg)`,
                boxShadow: "0 60px 100px -50px oklch(0 0 0 / 0.9)",
              }}
            />
          </div>
          <img
            src={wrap.url}
            alt="The full cover wrap for Flooded, showing spine and back cover artwork."
            loading="lazy"
            className="mt-8 w-full max-w-[20rem] opacity-70"
          />
          <p className="meta mt-4 text-muted-foreground">Fig. 03 — Cover wrap, current revision</p>
        </div>

        <div className="col-span-4 lg:col-span-5 lg:col-start-8">
          <p className="meta text-gold">04 / Write — poetry</p>
          <h3 id="flooded-title" className="display mt-5 text-6xl lg:text-7xl">
            Flooded
          </h3>
          <p className="display mt-6 text-2xl lg:text-[1.75rem]">
            A poetry collection I'm still shaping, from sequence to cover.
          </p>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            The manuscript exists as a physical object and the cover is on a second revision.
            Sequencing and editing are still open, so there is no publication date and nothing to
            buy.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="stamp">Status · in progress</span>
            <span className="stamp">Excerpts · none approved</span>
          </div>

          <div className="mt-9">
            <Link to="/write/flooded" className="action">
              Open the writing study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
