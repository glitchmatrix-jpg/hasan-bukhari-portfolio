"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { GameWorldFrame } from "@/components/game/GameWorldFrame";

import styles from "./HomeActSelector.module.css";

const worlds = [
  {
    id: "build",
    act: "Act I",
    title: "Build",
    route: "/build",
    action: "Enter Build",
    description:
      "Mobile products, backend systems, games, and research tools built to make complex behavior usable.",
    projects: ["HEARTLINE", "To Ash Again", "Taaqat"],
  },
  {
    id: "research",
    act: "Act II",
    title: "Research",
    route: "/research",
    action: "Enter Research",
    description:
      "Genomics, machine learning, chromatin, and scientific software tested against unfamiliar data and explicit limitations.",
    projects: ["CancerShift", "A17", "Ichthyology"],
  },
  {
    id: "write",
    act: "Act III",
    title: "Write",
    route: "/write",
    action: "Enter Write",
    description:
      "Poetry, narrative design, and creative community built around memory, meaning, and what people carry with them.",
    projects: ["Flooded", "Student Poets Association", "Narrative games"],
  },
  {
    id: "future",
    act: "Act IV",
    title: "What comes next",
    route: "/contact",
    action: "Continue",
    description:
      "New systems, new research questions, new stories—and the people interested in building them together.",
    projects: ["About", "Résumés", "Contact"],
  },
] as const;

type WorldId = (typeof worlds)[number]["id"];

export function HomeActSelector() {
  const [activeWorld, setActiveWorld] = useState<WorldId>("build");
  const baseId = useId();
  const active = worlds.find((world) => world.id === activeWorld) ?? worlds[0];

  function selectByIndex(index: number) {
    const next = worlds[index];
    if (next) setActiveWorld(next.id);
  }

  return (
    <div className={styles.layout}>
      <div>
        <GameWorldFrame activeWorld={active.title} label="World select">
          <div className={`${styles.scene} ${styles[`scene_${active.id}`]}`} aria-hidden="true">
            <span className={styles.moon} />
            <span className={styles.horizonFar} />
            <span className={styles.horizonNear} />
            <span className={styles.marker} />
            <span className={styles.sceneLabel}>{active.act}</span>
          </div>
        </GameWorldFrame>

        <div className={styles.tabs} role="tablist" aria-label="Choose a portfolio world">
          {worlds.map((world, index) => {
            const selected = world.id === active.id;
            return (
              <button
                aria-controls={`${baseId}-${world.id}-panel`}
                aria-selected={selected}
                className={styles.tab}
                id={`${baseId}-${world.id}-tab`}
                key={world.id}
                onClick={() => setActiveWorld(world.id)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight") {
                    event.preventDefault();
                    selectByIndex((index + 1) % worlds.length);
                    event.currentTarget.parentElement
                      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                      [(index + 1) % worlds.length]?.focus();
                  }
                  if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    const previous = (index - 1 + worlds.length) % worlds.length;
                    selectByIndex(previous);
                    event.currentTarget.parentElement
                      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                      [previous]?.focus();
                  }
                  if (event.key === "Home") {
                    event.preventDefault();
                    selectByIndex(0);
                    event.currentTarget.parentElement
                      ?.querySelector<HTMLButtonElement>('[role="tab"]')
                      ?.focus();
                  }
                  if (event.key === "End") {
                    event.preventDefault();
                    const last = worlds.length - 1;
                    selectByIndex(last);
                    event.currentTarget.parentElement
                      ?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
                      [last]?.focus();
                  }
                }}
                role="tab"
                tabIndex={selected ? 0 : -1}
                type="button"
              >
                <span>{world.act}</span>
                <strong>{world.title}</strong>
              </button>
            );
          })}
        </div>
      </div>

      <article
        aria-labelledby={`${baseId}-${active.id}-tab`}
        className={styles.panel}
        id={`${baseId}-${active.id}-panel`}
        role="tabpanel"
        tabIndex={0}
      >
        <p className={styles.act}>{active.act}</p>
        <h3>{active.title}</h3>
        <p>{active.description}</p>
        <ul>
          {active.projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
        <Link className={styles.enterLink} href={active.route}>
          {active.action} <span aria-hidden="true">→</span>
        </Link>
      </article>
    </div>
  );
}
