import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/site/site-nav";
import { Hero } from "@/components/site/hero";
import { SceneHeartline } from "@/components/site/scene-heartline";
import { SceneCancerShift } from "@/components/site/scene-cancershift";
import { SceneToAsh } from "@/components/site/scene-toash";
import { SceneFlooded } from "@/components/site/scene-flooded";
import { Archive } from "@/components/site/archive";
import { HumanSection } from "@/components/site/human-section";
import { Resumes } from "@/components/site/resumes";
import { SiteFooter } from "@/components/site/site-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasan Bukhari — Build · Research · Write" },
      {
        name: "description",
        content:
          "Android and backend software, leakage-controlled multicancer classification, a four-act Pygame platformer, and a poetry collection in progress.",
      },
      { property: "og:title", content: "Hasan Bukhari — Build · Research · Write" },
      {
        property: "og:description",
        content:
          "Computer science student at Southern Miss. HEARTLINE, CancerShift, To Ash Again, Flooded.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />

        <section className="shell py-16 lg:py-20" aria-label="Introduction to the work">
          <p className="display text-3xl sm:text-5xl lg:text-6xl" id="work">
            Four things that explain the rest.
          </p>
        </section>

        <SceneHeartline />
        <SceneCancerShift />
        <SceneToAsh />
        <SceneFlooded />
        <Archive />
        <HumanSection />
        <Resumes />
      </main>
      <SiteFooter />
    </>
  );
}
