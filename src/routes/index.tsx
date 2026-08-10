import { createFileRoute } from "@tanstack/react-router";

import { HomeFeature } from "@/components/projects/home-feature";
import { Archive } from "@/components/site/archive";
import { CurrentDesk } from "@/components/site/current-desk";
import { Hero } from "@/components/site/hero";
import { HumanSection } from "@/components/site/human-section";
import { Resumes } from "@/components/site/resumes";
import { SelectedWorkIndex } from "@/components/site/selected-work-index";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hasan Bukhari — Build · Research · Write" },
      {
        name: "description",
        content:
          "Hasan Bukhari builds software, studies biological signals, and writes poems and games.",
      },
      { property: "og:title", content: "Hasan Bukhari — Build · Research · Write" },
      {
        property: "og:description",
        content:
          "Computer science at Southern Miss: HEARTLINE, CancerShift, To Ash Again, Flooded, and supporting work.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <Hero />
        <SelectedWorkIndex />

        <HomeFeature projectId="heartline" index="01" />
        <HomeFeature projectId="cancershift" index="02" reverse />
        <HomeFeature projectId="to-ash-again" index="03" />
        <HomeFeature projectId="flooded" index="04" reverse />

        <HumanSection />
        <Archive />
        <CurrentDesk />
        <Resumes />
      </main>
      <SiteFooter />
    </>
  );
}
