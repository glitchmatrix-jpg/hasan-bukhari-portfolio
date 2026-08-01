import { IdentityStage } from "@/components/identity/IdentityStage";
import { HomeMotion } from "@/components/motion/HomeMotion";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import Link from "next/link";
import type { CSSProperties } from "react";

import styles from "./home.module.css";

const basePath =
  process.env.GITHUB_PAGES === "true" ? "/hasan-bukhari-portfolio" : "";

const archive = [
  {
    number: "05",
    name: "Taaqat",
    note: "Offline-first fitness",
    href: "/build/taaqat",
  },
  {
    number: "06",
    name: "Nivala",
    note: "Pakistani food data",
    href: "/build/nivala",
  },
  {
    number: "07",
    name: "A17",
    note: "Chromatin contact maps",
    href: "/research/a17",
  },
  {
    number: "08",
    name: "BioLitGraph",
    note: "Evidence networks",
    href: "/build/biolitgraph",
  },
  {
    number: "09",
    name: "Ichthyology",
    note: "Comparative genomics",
    href: "/research/ichthyology",
  },
  {
    number: "10",
    name: "Student Poets Association",
    note: "Community infrastructure",
    href: "/write/student-poets-association",
  },
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function HomePage() {
  return (
    <>
      <SmoothScroll />
      <HomeMotion>
        <div className={styles.page}>
          <section className={styles.hero} aria-labelledby="home-title">
            <span className={styles.signal}>Signal 001 / identity</span>
            <div className={styles.patch} aria-hidden="true">
              HB
            </div>
            <div className={styles.heroObject} data-parallax>
              <IdentityStage
                poster={`${basePath}/assets/v2/identity-object-v1.png`}
              />
            </div>
            <div className={styles.heroCopy}>
              <p className={styles.kicker} data-hero-line>
                Build / Research / Write
              </p>
              <h1 id="home-title" data-hero-line>
                Software engineer. Computational biologist. Builder of strange
                little worlds.
              </h1>
              <p className={styles.heroSupport} data-hero-line>
                I make tools for bodies, data, music, and memory.
              </p>
              <div className={styles.actions} data-hero-line>
                <a className={styles.primaryAction} href="#selected-work">
                  See selected work
                </a>
                <Link className={styles.secondaryAction} href="/resume">
                  Résumé
                </Link>
                <a
                  className={styles.secondaryAction}
                  href="mailto:hasan.bukhari25@gmail.com"
                >
                  Email
                </a>
              </div>
            </div>
          </section>

          <div id="selected-work" className={styles.anchor} />

          <section
            className={`${styles.scene} ${styles.darkScene} ${styles.heartline}`}
            aria-labelledby="heartline-title"
          >
            <span className={styles.sceneNumber}>
              01 / Build / Native Android
            </span>
            <div className={styles.sceneCopy} data-reveal>
              <p className={styles.kicker}>HEARTLINE</p>
              <h2 id="heartline-title">Lyrics that stay.</h2>
              <p className={styles.statement}>
                A lyric companion that follows the song—even when the connection
                does not.
              </p>
              <dl className={styles.proof}>
                <div>
                  <dt>Platform</dt>
                  <dd>Native Android</dd>
                </div>
                <div>
                  <dt>Behavior</dt>
                  <dd>Playback-aware</dd>
                </div>
                <div>
                  <dt>Continuity</dt>
                  <dd>Offline cache</dd>
                </div>
              </dl>
              <Link className={styles.sceneLink} href="/build/heartline">
                View the case study <Arrow />
              </Link>
            </div>
            <div
              className={styles.phoneStage}
              data-parallax
              aria-label="HEARTLINE interface demonstration"
            >
              <div className={styles.phone}>
                <div className={styles.phoneTop}>
                  <b>HEARTLINE</b>
                  <span>Active playback</span>
                </div>
                <div className={styles.albumArt} aria-hidden="true">
                  <span>H</span>
                </div>
                <div className={styles.lyricPanel}>
                  <small>Rights-safe demonstration</small>
                  <strong>
                    Live lyrics.
                    <br />
                    No borrowed words.
                  </strong>
                  <span>Synced line / 02:17</span>
                </div>
                <div className={styles.playerBar}>
                  <span>‹</span>
                  <span>▶</span>
                  <span>›</span>
                </div>
              </div>
              <div className={styles.phoneCard}>
                <small>HEARTLINE</small>
                <strong>Available offline</strong>
              </div>
            </div>
          </section>

          <section
            className={`${styles.scene} ${styles.lightScene} ${styles.cancer}`}
            aria-labelledby="cancershift-title"
          >
            <span className={styles.sceneNumber}>
              02 / Research / External evaluation
            </span>
            <div className={styles.researchCopy} data-reveal>
              <p className={styles.kicker}>CancerShift</p>
              <h2 id="cancershift-title">Change the dataset.</h2>
              <p className={styles.statement}>
                A classifier is only convincing after the dataset changes.
              </p>
              <p className={styles.disclaimer}>
                Independent computational-biology research. Not represented as
                peer reviewed.
              </p>
              <Link className={styles.sceneLink} href="/research/cancershift">
                Read the research <Arrow />
              </Link>
            </div>
            <figure className={styles.researchPaper} data-reveal>
              <figcaption>
                <b>Blind external evaluation</b>
                <span>Accuracy / %</span>
              </figcaption>
              <div
                className={styles.bars}
                role="img"
                aria-label="99.59 percent blind external microarray accuracy and 98.24 percent external RNA-seq accuracy"
              >
                <div
                  className={styles.bar}
                  style={{ "--bar": "99.59%" } as CSSProperties}
                >
                  <strong>99.59</strong>
                  <span>
                    Blind external
                    <br />
                    microarray
                  </span>
                </div>
                <div
                  className={styles.bar}
                  style={{ "--bar": "98.24%" } as CSSProperties}
                >
                  <strong>98.24</strong>
                  <span>
                    External
                    <br />
                    RNA-seq
                  </span>
                </div>
              </div>
              <p>
                Accuracy alone does not establish clinical utility. Cohort
                labels and original figures remain withheld pending
                verification.
              </p>
            </figure>
          </section>

          <section
            className={`${styles.scene} ${styles.darkScene} ${styles.game}`}
            aria-labelledby="taa-title"
          >
            <span className={styles.sceneNumber}>
              03 / Build + Write / Pygame
            </span>
            <h2 id="taa-title" className={styles.gameTitle} data-reveal>
              To Ash Again
            </h2>
            <div className={styles.gameFrame} data-parallax>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/assets/v2/taa-provenance-placeholder.svg`}
                alt="Publication boundary placeholder for To Ash Again game art pending provenance approval"
              />
            </div>
            <div className={styles.gameCopy} data-reveal>
              <p className={styles.statement}>
                A four-act story built out of character state, powers, enemies,
                saves, and consequences.
              </p>
              <dl className={styles.proof}>
                <div>
                  <dt>Structure</dt>
                  <dd>Four acts</dd>
                </div>
                <div>
                  <dt>Play</dt>
                  <dd>Two characters</dd>
                </div>
                <div>
                  <dt>System</dt>
                  <dd>Six abilities</dd>
                </div>
              </dl>
              <Link className={styles.sceneLink} href="/build/to-ash-again">
                Enter the case study <Arrow />
              </Link>
            </div>
          </section>

          <section
            className={`${styles.scene} ${styles.lightScene} ${styles.flooded}`}
            aria-labelledby="flooded-title"
          >
            <span className={styles.sceneNumber}>04 / Write / Poetry</span>
            <div
              className={styles.bookStage}
              data-parallax
              aria-label="Provisional Flooded book-object direction"
            >
              <div className={styles.book}>
                <span>FLOODED</span>
                <small>HASAN BUKHARI</small>
              </div>
              <span className={styles.bookNote}>
                Original object photography pending
              </span>
            </div>
            <div
              className={`${styles.sceneCopy} ${styles.floodedCopy}`}
              data-reveal
            >
              <p className={styles.kicker}>Flooded</p>
              <h2 id="flooded-title">Still becoming.</h2>
              <p className={styles.statement}>
                A poetry collection still becoming an object.
              </p>
              <p className={styles.disclaimer}>
                No poem is quoted until an exact excerpt is approved.
              </p>
              <Link className={styles.sceneLink} href="/write/flooded">
                Open the writing study <Arrow />
              </Link>
            </div>
          </section>

          <section
            className={`${styles.scene} ${styles.archive}`}
            aria-labelledby="archive-title"
          >
            <div className={styles.archiveHead} data-reveal>
              <p className={styles.kicker}>The quieter archive</p>
              <h2 id="archive-title">More signals.</h2>
            </div>
            <div className={styles.archiveList}>
              {archive.map((item) => (
                <Link
                  key={item.name}
                  className={styles.archiveItem}
                  href={item.href}
                  data-reveal
                >
                  <span>{item.number}</span>
                  <strong>{item.name}</strong>
                  <span>{item.note}</span>
                  <Arrow />
                </Link>
              ))}
            </div>
          </section>

          <section
            className={`${styles.scene} ${styles.human}`}
            aria-labelledby="human-title"
          >
            <span className={styles.sceneNumber}>Human layer / community</span>
            <div
              className={styles.humanCollage}
              data-parallax
              aria-hidden="true"
            >
              <div className={styles.portraitPlaceholder}>
                Portrait
                <br />
                pending
              </div>
              <div className={styles.spaPatch}>SPA</div>
              <div className={styles.handNote}>
                Founder &amp; President
                <br />
                University of Southern Mississippi
              </div>
            </div>
            <div className={styles.humanCopy} data-reveal>
              <p className={styles.kicker}>About / Student Poets Association</p>
              <h2 id="human-title">Make room for people.</h2>
              <p className={styles.statement}>
                I founded a student writing community built through open mics,
                showcases, and collaborative arts programming.
              </p>
              <Link className={styles.sceneLink} href="/about">
                About Hasan <Arrow />
              </Link>
            </div>
          </section>

          <section
            className={`${styles.scene} ${styles.resume}`}
            aria-labelledby="resume-title"
          >
            <div data-reveal>
              <p className={styles.kicker}>Professional paths</p>
              <h2 id="resume-title">
                Two résumés.
                <br />
                One person.
              </h2>
            </div>
            <div className={styles.resumeCards} data-reveal>
              <Link href="/resume">
                <span>01</span>
                <strong>Software engineering</strong>
                <small>View profile / PDF pending</small>
                <Arrow />
              </Link>
              <Link href="/resume">
                <span>02</span>
                <strong>Computational biology</strong>
                <small>View profile / PDF pending</small>
                <Arrow />
              </Link>
            </div>
          </section>

          <section className={styles.closing} aria-labelledby="contact-title">
            <p className={styles.kicker}>Last page / no pitch deck</p>
            <h2 id="contact-title" data-reveal>
              Make something
              <br />
              worth keeping.
            </h2>
            <div className={styles.contactLinks} data-reveal>
              <a href="mailto:hasan.bukhari25@gmail.com">
                hasan.bukhari25@gmail.com <Arrow />
              </a>
              <a href="https://www.linkedin.com/in/hasan-bukhari">
                LinkedIn <Arrow />
              </a>
            </div>
            <p className={styles.colophon}>
              Hasan Bukhari / Build · Research · Write
            </p>
          </section>
        </div>
      </HomeMotion>
    </>
  );
}
