import Link from "next/link";

import { HomeActSelector } from "@/components/game/HomeActSelector";
import { ProjectSpread } from "@/components/projects/ProjectSpread";
import { ResumeTile } from "@/components/projects/ResumeTile";
import { ResearchMetric } from "@/components/research/ResearchMetric";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AlbumTracklist } from "@/components/zine/AlbumTracklist";
import { StampedLabel } from "@/components/zine/StampedLabel";

import styles from "./home.module.css";

const tracks = [
  {
    number: "01",
    title: "Build",
    description: "Products, systems, games, and tools",
    href: "#heartline",
  },
  {
    number: "02",
    title: "Research",
    description: "Genomics, machine learning, chromatin, and validation",
    href: "#cancershift",
  },
  {
    number: "03",
    title: "Write",
    description: "Poetry, narrative, and creative community",
    href: "#flooded",
  },
  {
    number: "04",
    title: "Archive",
    description: "Supporting projects and experiments",
    href: "#archive",
  },
  {
    number: "05",
    title: "Résumés",
    description: "Two professional paths through one body of work",
    href: "#resumes",
  },
] as const;

const archiveItems = [
  [
    "01",
    "BioLitGraph",
    "Biomedical literature mining and evidence graphs",
    "/build/biolitgraph",
  ],
  [
    "02",
    "QTL Analysis Toolkit",
    "Research software",
    "/research/research-software",
  ],
  [
    "03",
    "Unified Genome Explorer",
    "Local-first genomics tooling",
    "/research/research-software",
  ],
  [
    "04",
    "PhyloPlayground",
    "Scientific education and visualization",
    "/research/research-software",
  ],
  ["05", "Observatorium", "Supporting software project", "/archive"],
  ["06", "Moonwater Angler", "Game engineering archive", "/archive"],
] as const;

export default function HomePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={`${styles.inner} ${styles.heroGrid}`}>
          <div className={`${styles.heroCopy} motion-hero-copy`}>
            <p className={styles.issueLabel}>Hasan Bukhari — Issue 01</p>
            <h1 className={styles.heroTitle} id="home-title">
              <span>Hasan</span>
              <span>Bukhari</span>
            </h1>
            <p className={styles.kicker}>Build · Research · Write</p>
            <p className={styles.heroStatement}>
              I build systems, study signals, and write about what survives.
            </p>
            <p className={styles.heroSupport}>
              Software engineer, computational biology researcher, game
              developer, writer, and student leader at the University of
              Southern Mississippi.
            </p>
            <div className={styles.actions}>
              <ButtonLink href="#editorial">Explore the issue</ButtonLink>
              <ButtonLink href="#resumes" variant="secondary">
                View résumés
              </ButtonLink>
              <ButtonLink href="#contact" variant="text">
                Contact
              </ButtonLink>
            </div>
          </div>

          <div
            className={`${styles.heroArt} motion-hero-art`}
            aria-hidden="true"
          >
            <span className={styles.artMap} />
            <span className={styles.artPhone} />
            <span className={styles.artBook} />
            <span className={styles.artSprite} />
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.editorial}`}
        id="editorial"
        aria-labelledby="editorial-title"
      >
        <div className={styles.reading}>
          <p className={styles.eyebrow}>Editor&apos;s note</p>
          <h2 className={styles.editorialText} id="editorial-title">
            Software, research, games, and writing are not separate practices to
            me.
          </h2>
          <p className={styles.editorialBody}>
            Each begins with the same question: how do complex systems become
            understandable, useful, or alive? I work across mobile products,
            computational biology, interactive systems, poetry, and creative
            community with the same commitments—clear structure, honest
            evidence, and human meaning.
          </p>
          <p className={styles.editorialBody}>
            <Link href="/about">Read the full introduction →</Link>
          </p>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.trackSection}`}
        aria-labelledby="tracklist-title"
      >
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Issue index</p>
            <h2 id="tracklist-title">Contents / Tracklist</h2>
          </div>
          <AlbumTracklist tracks={tracks} />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.worldSection}`}
        aria-labelledby="worlds-title"
      >
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Interactive insert 01</p>
            <h2 id="worlds-title">Enter the worlds</h2>
            <p>
              Four acts. Three disciplines. One body of work. The scene is
              atmospheric; every destination remains ordinary, accessible HTML.
            </p>
          </div>
          <HomeActSelector />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.feature} ${styles.featureHeartline}`}
        id="heartline"
        aria-label="HEARTLINE featured project"
      >
        <div className={styles.inner}>
          <ProjectSpread
            href="/build/heartline"
            label="Feature 01 / Build"
            linkLabel="Read the HEARTLINE case study"
            media={
              <div
                className={`${styles.mediaPlate} ${styles.phonePlate}`}
                data-label="HEARTLINE"
                role="img"
                aria-label="Abstract public-safe study representing the HEARTLINE mobile interface"
              />
            }
            metadata={[
              "Native Android",
              "Kotlin",
              "Jetpack Compose",
              "Room",
              "GitHub Actions",
            ]}
            summary="A native Android lyric companion that follows active playback, retrieves synchronized lyrics, works offline, powers live lyric notifications, and creates shareable lyric cards on-device."
            title="HEARTLINE"
            world="build"
          />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.feature} ${styles.featureCancer}`}
        id="cancershift"
        aria-label="CancerShift featured research"
      >
        <div className={styles.inner}>
          <ProjectSpread
            href="/research/cancershift"
            label="Feature 02 / Research"
            linkLabel="Read the CancerShift research case study"
            media={
              <div
                className={`${styles.mediaPlate} ${styles.researchPlate}`}
                data-label="CancerShift"
                role="img"
                aria-label="Simplified study flow from development data to external microarray and RNA-seq evaluation"
              >
                <div className={styles.researchFlow}>
                  <div className={styles.researchNode}>Development cohorts</div>
                  <div className={styles.researchNode}>
                    Blind external microarray
                  </div>
                  <div className={styles.researchNode}>External RNA-seq</div>
                </div>
              </div>
            }
            metadata={[
              "TCGA",
              "GEO",
              "CPTAC-GDC",
              "Leakage control",
              "Cross-platform validation",
            ]}
            metric={
              <div className={styles.metricGrid}>
                <ResearchMetric
                  value="99.59%"
                  label="Blind external microarray accuracy"
                  context="Verified result from the final leakage-controlled pipeline."
                />
                <ResearchMetric
                  value="98.24%"
                  label="External RNA-seq accuracy"
                  context="Verified external RNA-seq evaluation result."
                />
              </div>
            }
            summary="Does a cancer classifier still work when the study, sequencing platform, and patient cohort change? CancerShift tests that question through external, cross-platform evaluation."
            title="CancerShift"
            world="research"
          />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.feature} ${styles.featureGame}`}
        id="to-ash-again"
        aria-label="To Ash Again featured project"
      >
        <div className={styles.inner}>
          <ProjectSpread
            href="/build/to-ash-again"
            label="Feature 03 / Build + Narrative"
            linkLabel="Enter the To Ash Again case study"
            media={
              <div
                className={`${styles.mediaPlate} ${styles.gamePlate}`}
                data-label="To Ash Again"
                role="img"
                aria-label="Abstract pixel-art red landscape representing To Ash Again"
              >
                <span className={styles.mountain} aria-hidden="true" />
                <span className={styles.player} aria-hidden="true" />
              </div>
            }
            metadata={[
              "Python",
              "Pygame",
              "Four acts",
              "Two playable characters",
              "Six abilities",
              "~258 tracked files",
            ]}
            summary="A four-act narrative platformer built as a modular system of characters, abilities, levels, enemies, cutscenes, inventory, saving, bosses, and progression."
            title="To Ash Again"
            world="build"
          />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.feature} ${styles.featureA17}`}
        id="a17"
        aria-label="A17 featured research"
      >
        <div className={styles.inner}>
          <ProjectSpread
            href="/research/a17"
            label="Feature 04 / Research"
            linkLabel="Understand structure versus scale"
            media={
              <div
                className={`${styles.mediaPlate} ${styles.researchPlate}`}
                data-label="A17"
                role="img"
                aria-label="Abstract contact-map comparison illustrating structure and scale"
              >
                <div className={styles.researchFlow}>
                  <div className={styles.researchNode}>
                    Seven epigenomic tracks
                  </div>
                  <div className={styles.researchNode}>
                    Residual neural network
                  </div>
                  <div className={styles.researchNode}>Chromosome holdouts</div>
                </div>
              </div>
            }
            metadata={[
              "Hi-C",
              "Seven-track residual model",
              "Frozen decisions",
              "Locked test set",
              "Manuscript in preparation",
            ]}
            summary="Can epigenomic signals predict chromatin contact maps on chromosomes the model never saw during development? Relative structure transferred more consistently than absolute contact-map scale."
            title="A17"
            world="research"
          />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.feature} ${styles.featureFlooded}`}
        id="flooded"
        aria-label="Flooded writing project"
      >
        <div className={styles.inner}>
          <ProjectSpread
            href="/write/flooded"
            label="Interlude / Write"
            linkLabel="Enter the writing section"
            media={
              <div
                className={styles.mediaPlate}
                data-label="Flooded"
                role="img"
                aria-label="Abstract public-safe book-cover study for Flooded"
              />
            }
            metadata={[
              "Poetry",
              "Physical object",
              "Collection in development",
            ]}
            summary="Flooded is a poetry collection in development. The public page will center its artistic premise, physical form, process, and only excerpts explicitly approved for publication."
            title="Flooded"
            world="write"
          />
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.feature} ${styles.featureProducts}`}
        id="local-first"
        aria-labelledby="products-title"
      >
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Local-first products</p>
            <h2 id="products-title">Taaqat + Nivala</h2>
            <p>
              Two Flutter products shaped around offline use, local persistence,
              and data that remains close to the person using it.
            </p>
          </div>
          <div className={styles.productPair}>
            <article className={styles.productCard}>
              <StampedLabel tone="build">Build / Fitness</StampedLabel>
              <h3>Taaqat</h3>
              <div
                className={styles.productMock}
                role="img"
                aria-label="Public-safe study of the Taaqat recovery dashboard"
              >
                Offline recovery dashboard study
              </div>
              <p>
                An offline-first fitness platform with 172 bundled exercises,
                muscle mapping, recovery-aware planning, persistent routines,
                workout logging, analytics, reminders, and import/export.
              </p>
              <ButtonLink href="/build/taaqat">
                Read the Taaqat case study
              </ButtonLink>
            </article>
            <article className={styles.productCard}>
              <StampedLabel tone="build">Build / Nutrition</StampedLabel>
              <h3>Nivala</h3>
              <div
                className={styles.productMock}
                role="img"
                aria-label="Public-safe study of the Nivala nutrition dashboard"
              >
                Nutrition dashboard study · synthetic demo data
              </div>
              <p>
                A privacy-first nutrition tracker built around 278 Pakistani
                foods with English, Urdu, and Roman Urdu aliases, meal logging,
                recipes, progress tracking, and validated local backup.
              </p>
              <p className={styles.meta}>Private repository</p>
              <ButtonLink href="/build/nivala">
                Read the Nivala case study
              </ButtonLink>
            </article>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.archive}`}
        id="archive"
        aria-labelledby="archive-title"
      >
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Supporting constellation</p>
            <h2 id="archive-title">The archive</h2>
            <p>
              Supporting projects remain discoverable without competing with the
              flagship narrative.
            </p>
          </div>
          <ol className={styles.archiveList}>
            {archiveItems.map(([number, title, description, href]) => (
              <li key={`${number}-${title}`}>
                <Link href={href}>
                  <span aria-hidden="true">{number}</span>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </Link>
              </li>
            ))}
          </ol>
          <p>
            <ButtonLink href="/archive" variant="secondary">
              Explore the complete archive
            </ButtonLink>
          </p>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.human}`}
        id="community"
        aria-labelledby="community-title"
      >
        <div className={`${styles.inner} ${styles.humanGrid}`}>
          <div
            className={styles.photoFallback}
            role="img"
            aria-label="Public-safe community study; participant imagery withheld"
          />
          <div className={styles.humanCopy}>
            <StampedLabel tone="write">Human / Community</StampedLabel>
            <h2 id="community-title">
              Outside the code, I build creative communities.
            </h2>
            <p>
              Hasan is the Founder and President of the Student Poets
              Association and Creative Writing Club at the University of
              Southern Mississippi.
            </p>
            <p>
              The organization creates open mics, public showcases,
              collaborative arts programming, and a place for student writers to
              make work together.
            </p>
            <ButtonLink href="/write/student-poets-association">
              Explore the Student Poets Association
            </ButtonLink>
          </div>
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.resumeSection}`}
        id="resumes"
        aria-labelledby="resumes-title"
      >
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Professional documents</p>
            <h2 id="resumes-title">Two paths. One body of work.</h2>
            <p>
              Choose the rÃ©sumÃ© that matches the role. Both lead back to the
              same systems-minded practice.
            </p>
          </div>
          <div className={styles.resumeGrid}>
            <ResumeTile
              description="For computational biology, bioinformatics, research engineering, data science, and scientific software roles."
              href="/resume#computational-biology"
              title="Computational Biology / Bioinformatics RÃ©sumÃ©"
              tone="research"
              updatedAt="August 2026"
            />
            <ResumeTile
              description="For software engineering, mobile development, backend systems, product engineering, and interactive software roles."
              href="/resume#software-engineering"
              title="Software Engineering RÃ©sumÃ©"
              tone="build"
              updatedAt="August 2026"
            />
          </div>
        </div>
      </section>

      <section
        className={styles.exit}
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className={`${styles.inner} ${styles.exitGrid}`}>
          <div>
            <p className={styles.eyebrow}>Exit scene / Act IV</p>
            <h2 id="contact-title">The issue ends here. The work does not.</h2>
          </div>
          <div className={styles.contactSheet}>
            <p className={styles.meta}>
              Hasan Bukhari · Build · Research · Write
            </p>
            <a href="mailto:hasan.bukhari25@gmail.com">
              hasan.bukhari25@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/hasan-bukhari"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href="https://github.com/PurplePoet25"
              rel="noreferrer"
              target="_blank"
            >
              GitHub — PurplePoet25{" "}
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href="https://github.com/glitchmatrix-jpg"
              rel="noreferrer"
              target="_blank"
            >
              GitHub — glitchmatrix-jpg{" "}
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <Link href="/contact">Open the contact page →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
