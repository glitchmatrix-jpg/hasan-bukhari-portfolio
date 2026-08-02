import spaLogo from "@/assets/spa-logo.jpg.asset.json";
import posterMonth from "@/assets/spa-poster-month.png.asset.json";
import posterOpenMic from "@/assets/spa-poster-openmic.png.asset.json";

export function HumanSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-24 lg:py-32"
      aria-labelledby="about-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(70% 60% at 20% 30%, var(--cola), transparent 70%)",
        }}
      />

      <div className="shell grid-editorial relative items-center gap-y-14">
        {/* dominant idea: a pinned board of real event artifacts */}
        <div className="col-span-4 lg:col-span-6">
          <div className="relative mx-auto max-w-[30rem]">
            <div
              className="gate flex aspect-4/3 flex-col justify-end p-6"
              aria-label="Reserved space for an original photograph of Hasan hosting an event"
            >
              <p className="meta text-rose">Original photograph pending</p>
              <p className="mt-2 max-w-[15rem] text-xs leading-relaxed text-muted-foreground">
                This frame is reserved for a photo of Hasan running an SPA event. Nothing goes here
                until the image is his own and everyone in the room has agreed to appear.
              </p>
            </div>

            <div
              className="absolute -bottom-12 -right-4 w-40 sm:w-48"
              style={{
                transform: "rotate(3deg)",
                boxShadow: "0 30px 60px -35px oklch(0 0 0 / 0.95)",
              }}
            >
              <span className="tape -top-3 left-10" aria-hidden="true" />
              <img
                src={posterOpenMic.url}
                alt="An open-mic poster designed for the Student Poets Association."
                loading="lazy"
                className="w-full"
              />
            </div>

            <div
              className="absolute -left-6 top-8 hidden w-32 lg:block"
              style={{ transform: "rotate(-4deg)" }}
            >
              <img
                src={posterMonth.url}
                alt="A poster for a National Poetry Month programme run by the Student Poets Association."
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-5 lg:col-start-8">
          <div className="flex items-center gap-4">
            <img
              src={spaLogo.url}
              alt="Student Poets Association mark."
              loading="lazy"
              className="size-14 rounded-full object-cover"
            />
            <p className="meta text-muted-foreground">
              Student Poets Association · President and founder
            </p>
          </div>

          <h3 id="about-title" className="display mt-7 text-5xl lg:text-[3.75rem]">
            Some things are built by getting people into the same room.
          </h3>

          <p className="measure mt-6 text-sm leading-relaxed text-muted-foreground">
            I started the Student Poets Association and Creative Writing Club at USM because there
            was no regular place to read work out loud. It runs on open mics, showcases and
            collaborative sessions, plus the unglamorous part: booking rooms, printing posters, and
            making sure first-time readers get a slot.
          </p>

          <p className="annotation mt-8 max-w-[22rem] text-lg text-rose">
            The first open mic had nine people. That was enough to keep going.
          </p>
        </div>
      </div>
    </section>
  );
}
