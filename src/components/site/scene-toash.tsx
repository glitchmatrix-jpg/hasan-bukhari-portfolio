import title from "@/assets/toash-title.png.asset.json";
import combat from "@/assets/toash-combat.png.asset.json";

export function SceneToAsh() {
  return (
    <section
      className="relative overflow-hidden border-t border-border py-24 lg:py-32"
      aria-labelledby="toash-title"
    >
      <div className="shell grid-editorial items-start gap-y-10">
        <header className="col-span-4 lg:col-span-12">
          <p className="meta text-muted-foreground">03 / Build — Python · Pygame</p>
          <h3
            id="toash-title"
            className="display mt-5 text-[3.5rem] leading-[0.9] sm:text-7xl lg:text-[7.5rem]"
          >
            To Ash Again
          </h3>
        </header>

        {/* dominant idea: the game world breaks the editorial frame */}
        <div className="relative col-span-4 lg:col-span-7">
          <div
            className="relative border border-border"
            style={{ boxShadow: "0 50px 90px -50px oklch(0 0 0 / 0.95)" }}
          >
            <img
              src={combat.url}
              alt="A combat scene from To Ash Again: a pixel-art platformer level with an enemy mid-attack and a health bar in the corner."
              loading="lazy"
              className="pixelated w-full"
            />
          </div>

          {/* the title screen crosses out of the frame */}
          <div
            className="absolute -bottom-8 -left-4 w-40 border border-border sm:-left-10 sm:w-52"
            style={{ boxShadow: "0 30px 60px -35px oklch(0 0 0 / 0.95)" }}
          >
            <img
              src={title.url}
              alt="The To Ash Again title screen."
              loading="lazy"
              className="pixelated w-full"
            />
          </div>
        </div>

        <div className="col-span-4 lg:col-span-4 lg:col-start-9">
          <p className="display text-2xl lg:text-[1.75rem]">
            A four-act platformer built around two characters, six powers, and a lot of state.
          </p>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            Combat, levels, inventory, dialogue and bosses are separate modules that share one save
            format. The final encounter runs in multiple phases, which is where most of the
            progression logic gets tested.
          </p>

          <ul className="mt-8 divide-y divide-border border-y border-border">
            {[
              ["Acts", "Four"],
              ["Playable characters", "Two"],
              ["Abilities", "Six"],
              ["Inventory", "Three slots"],
              ["Enemies", "Scripted AI"],
              ["Boss", "Multi-phase"],
              ["Tracked files", "~258"],
            ].map(([label, value]) => (
              <li key={label} className="flex items-baseline justify-between py-2.5">
                <span className="meta text-muted-foreground">{label}</span>
                <span className="text-xs text-foreground">{value}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="patch text-rose">Asset provenance under review</span>
            <a
              href="https://github.com/PurplePoet25/ToAshAgain"
              target="_blank"
              rel="noreferrer"
              className="link-rule meta text-muted-foreground"
            >
              GitHub — ToAshAgain
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
