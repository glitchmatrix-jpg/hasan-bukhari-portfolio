import { Link } from "@tanstack/react-router";

import lyrics from "@/assets/heartline-lyrics.png.asset.json";

export function SceneHeartline() {
  return (
    <section
      className="relative overflow-hidden border-t border-border py-24 lg:py-32"
      aria-labelledby="heartline-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[46rem] -translate-x-[10%] -translate-y-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--cherry) 40%, transparent), transparent 62%)",
          filter: "blur(10px)",
        }}
      />

      <div className="shell grid-editorial relative items-center gap-y-12">
        <div className="col-span-4 lg:col-span-5">
          <p className="meta text-muted-foreground">01 / Build — Native Android</p>
          <h3 id="heartline-title" className="display mt-5 text-6xl lg:text-7xl">
            HEARTLINE
          </h3>
          <p className="display mt-6 text-2xl lg:text-[1.75rem]">
            Lyrics that stay in time with whatever is already playing.
          </p>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            HEARTLINE reads the active media session, pulls synchronized lyrics, follows playback
            position, and caches tracks so they still work offline. It renders share cards on-device
            with Android Canvas rather than shipping images to a server.
          </p>

          <ul className="rule-top mt-8 grid grid-cols-2 gap-y-5 pt-6">
            {[
              ["Stack", "Kotlin · Jetpack Compose · Room"],
              ["System work", "Media session · foreground service"],
              ["Offline", "Local track cache"],
              ["Delivery", "Lint · unit tests · GitHub Actions · APK"],
            ].map(([label, value]) => (
              <li key={label}>
                <p className="meta text-cherry">{label}</p>
                <p className="mt-1 text-xs text-foreground">{value}</p>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link to="/build/heartline" className="action-solid">
              Read the case study
            </Link>
            <a
              href="https://github.com/glitchmatrix-jpg/HEARTLINE-Android"
              className="link-rule meta text-muted-foreground"
              target="_blank"
              rel="noreferrer"
            >
              GitHub — HEARTLINE-Android
            </a>
          </div>
        </div>

        {/* dominant object: the phone, treated as a physical music artifact */}
        <div className="col-span-4 lg:col-span-6 lg:col-start-7">
          <div className="relative mx-auto w-full max-w-[22rem]">
            <div
              className="grain relative overflow-hidden rounded-[2.25rem] border border-border p-2"
              style={{
                background: "var(--graphite)",
                boxShadow:
                  "0 60px 90px -50px oklch(0 0 0 / 0.95), inset 0 0 0 1px color-mix(in oklab, var(--bone) 12%, transparent)",
                transform: "rotate(-3deg)",
              }}
            >
              <img
                src={lyrics.url}
                alt="HEARTLINE running on a phone: a synchronized lyric line highlighted over a dark cherry background, with playback controls beneath."
                loading="lazy"
                className="w-full rounded-[1.9rem]"
              />
            </div>

            {/* printed lyric card — placeholder text, no commercial lyrics */}
            <div
              className="paper-card absolute -bottom-10 -left-8 w-56 p-4"
              style={{ transform: "rotate(2.5deg)" }}
            >
              <span className="tape -top-3 left-14" aria-hidden="true" />
              <p className="meta opacity-60">Share card · on-device render</p>
              <p className="display mt-3 text-lg leading-tight">
                placeholder line — original text pending
              </p>
              <p className="meta mt-4 opacity-60">Canvas · FileProvider</p>
            </div>

            <p className="annotation absolute -top-16 right-0 hidden w-52 rotate-2 text-sm text-rose lg:block">
              the notification listener drops after a reboot — recovery path was the hard part
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
