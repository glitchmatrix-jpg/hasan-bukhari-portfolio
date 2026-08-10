import { useEffect, useRef, useState } from "react";

const RELIC_DESCRIPTION =
  "A machined signal object: two black-cherry lacquer lobes joined by a chrome bridge, with a lit waveform window across the front.";

export function Relic() {
  const frame = useRef<HTMLDivElement>(null);
  const mount = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = mount.current;
    const pointerTarget = frame.current;
    if (!host || !pointerTarget) return;

    let disposed = false;
    let disposeScene = () => {};

    void import("./relic-three-scene")
      .then(({ mountRelicScene }) => {
        if (disposed) return;
        disposeScene = mountRelicScene(host, pointerTarget);
        if (disposed) disposeScene();
        else setReady(true);
      })
      .catch(() => setReady(false));

    return () => {
      disposed = true;
      disposeScene();
    };
  }, []);

  return (
    <figure ref={frame} className={`relic-scene ${ready ? "is-ready" : ""}`}>
      <div className="relic-aura" aria-hidden="true" />
      <div className="relic-fallback" aria-hidden="true">
        <span className="relic-fallback__lobe relic-fallback__lobe--left" />
        <span className="relic-fallback__lobe relic-fallback__lobe--right" />
        <span className="relic-fallback__bridge" />
        <span className="relic-fallback__signal" />
      </div>
      <div ref={mount} className="relic-mount" />
      <figcaption className="meta relic-caption flex flex-wrap gap-x-4 gap-y-1">
        <span>Fig. 00 — realtime identity object</span>
        <span className="text-rose/80">Move to inspect</span>
        <span className="sr-only"> {RELIC_DESCRIPTION}</span>
      </figcaption>
    </figure>
  );
}
