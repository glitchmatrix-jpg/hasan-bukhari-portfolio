import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import lyrics from "@/assets/heartline-lyrics.png.asset.json";
import proto from "@/assets/heartline-proto.png.asset.json";

export const Route = createFileRoute("/build/heartline")({
  head: () => ({
    meta: [
      { title: "HEARTLINE — native Android lyric companion | Hasan Bukhari" },
      {
        name: "description",
        content:
          "HEARTLINE reads the active Android media session, syncs lyrics to playback, caches tracks offline and renders share cards on-device with Kotlin, Compose and Room.",
      },
      { property: "og:title", content: "HEARTLINE — native Android lyric companion" },
      {
        property: "og:description",
        content:
          "Kotlin, Jetpack Compose, Room, media sessions, foreground services and notification-listener recovery.",
      },
    ],
  }),
  component: Heartline,
});

function Block({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="shell grid-editorial border-t border-border py-14">
      <div className="col-span-4 lg:col-span-4">
        <p className="meta text-cherry">{label}</p>
        <h2 className="display mt-4 text-3xl lg:text-[2.5rem]">{title}</h2>
      </div>
      <div className="col-span-4 mt-5 lg:col-span-7 lg:col-start-6 lg:mt-0">{children}</div>
    </section>
  );
}

function Heartline() {
  return (
    <>
      <SiteNav />
      <main className="pt-14">
        <header className="shell grid-editorial items-center gap-y-10 py-16 lg:py-24">
          <div className="col-span-4 lg:col-span-6">
            <p className="meta text-muted-foreground">Case study · Build</p>
            <h1 className="display mt-5 text-6xl lg:text-[5.5rem]">HEARTLINE</h1>
            <p className="display mt-6 text-2xl lg:text-3xl">
              An Android app that keeps lyrics in time with whatever is playing.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <span className="patch">Native Android</span>
              <span className="patch">Kotlin</span>
              <span className="patch">Jetpack Compose</span>
              <span className="patch">Room</span>
            </div>
          </div>
          <div className="col-span-4 lg:col-span-5 lg:col-start-8">
            <div
              className="grain relative mx-auto max-w-[19rem] overflow-hidden rounded-[2rem] border border-border p-2"
              style={{
                background: "var(--graphite)",
                boxShadow: "0 60px 90px -50px oklch(0 0 0 / 0.95)",
                transform: "rotate(-2deg)",
              }}
            >
              <img
                src={lyrics.url}
                alt="HEARTLINE's live lyric screen with the current line highlighted."
                className="w-full rounded-[1.7rem]"
                width={720}
                height={1560}
              />
            </div>
          </div>
        </header>

        <Block label="01" title="What it does">
          <ul className="measure space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>Detects the active media session on the device.</li>
            <li>Retrieves synchronized lyrics and follows playback position.</li>
            <li>Caches tracks locally so lyrics survive losing the network.</li>
            <li>Shows live lyric notifications outside the app.</li>
            <li>Renders customizable share cards on-device.</li>
          </ul>
        </Block>

        <Block label="02" title="Why it exists">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Lyric apps usually want to be the player. HEARTLINE assumes you already have one, so it
            attaches to whatever is playing instead of asking you to switch. That single decision
            sets the whole architecture: no playback control, everything driven by observation.
          </p>
        </Block>

        <Block label="03" title="What Hasan owned">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Sole developer. Product decisions, Compose UI, persistence layer, service and
            notification work, Canvas rendering, tests, lint configuration and the release pipeline.
          </p>
        </Block>

        <Block label="04" title="Android system architecture">
          <div className="space-y-4">
            {[
              [
                "Observation",
                "Notification listener + MediaSession callbacks report track and position.",
              ],
              ["State", "Room stores tracks, lyric bodies and cache metadata."],
              [
                "Foreground service",
                "Keeps the lyric notification alive while playback continues.",
              ],
              ["Render", "Android Canvas draws share cards; FileProvider shares them safely."],
              ["Media", "MediaStore integration for saving generated images."],
            ].map(([label, value]) => (
              <div key={label} className="border-t border-border pt-3">
                <p className="meta text-muted-foreground">{label}</p>
                <p className="measure mt-1.5 text-sm text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block label="05" title="The difficult part">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Notification-listener access is fragile: it drops after reboots, permission changes and
            process death, and Android does not always tell you. The app needed an explicit recovery
            path — detect the dead binding, rebind, and resync position — rather than assuming the
            connection holds.
          </p>
        </Block>

        <Block label="06" title="Interface gallery">
          <figure>
            <img
              src={proto.url}
              alt="An early desktop prototype of HEARTLINE showing the lyric timing layout."
              loading="lazy"
              className="w-full border border-border"
            />
            <figcaption className="meta mt-3 text-muted-foreground">
              Fig. 02 — Early prototype, kept as process history
            </figcaption>
          </figure>
          <div className="gate mt-6 p-4">
            <p className="meta text-rose">Lyric content boundary</p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Published screenshots use original or synthetic lyric text. No commercial lyrics or
              album artwork appear here.
            </p>
          </div>
        </Block>

        <Block label="07" title="Testing, accessibility, delivery">
          <p className="measure text-sm leading-relaxed text-muted-foreground">
            Accessibility semantics on lyric and control surfaces, unit tests over the timing and
            cache logic, Android lint in the loop, Gradle builds through GitHub Actions, and APK
            artifacts published from CI.
          </p>
          <a
            href="https://github.com/glitchmatrix-jpg/HEARTLINE-Android"
            target="_blank"
            rel="noreferrer"
            className="link-rule meta mt-6 text-muted-foreground"
          >
            GitHub — glitchmatrix-jpg/HEARTLINE-Android
          </a>
        </Block>

        <Block label="08" title="Related project">
          <Link to="/write/flooded" className="link-rule display text-2xl">
            Flooded — the writing side of the same interest
          </Link>
        </Block>
      </main>
      <SiteFooter />
    </>
  );
}
