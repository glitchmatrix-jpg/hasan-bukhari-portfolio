export type World = "build" | "research" | "write";

export interface ProjectRecord {
  id: string;
  title: string;
  route: string;
  world: World;
  eyebrow: string;
  summary: string;
  question: string;
  status: string;
  role: string;
  facts: readonly string[];
  sections: readonly { title: string; body: string }[];
  findings?: readonly string[];
  limitations?: readonly string[];
  repository?: { label: string; href: string };
  related: readonly string[];
}

export const projects: readonly ProjectRecord[] = [
  {
    id: "aegis",
    title: "AEGIS",
    route: "/build/aegis",
    world: "build",
    eyebrow: "Build / Desktop Systems + Governance",
    summary:
      "A local-first Windows platform for controlled-document monitoring, deterministic change evidence, human governance, and auditable release engineering.",
    question:
      "How do you prove exactly what changed in a controlled document without letting the software invent evidence?",
    status: "Public repository · 1.0.0 release candidate",
    role: "Independent systems and product engineering",
    facts: [
      "Python + FastAPI",
      "React + TypeScript + Tauri",
      "SHA-256 retained versions",
      "Word · PDF · Excel · PowerPoint · Text · CSV",
      "55 regression / adversarial tests",
    ],
    sections: [
      {
        title: "Evidence before interpretation",
        body: "AEGIS separates deterministic evidence from human governance. It establishes trusted baselines, retains immutable source versions, verifies them with SHA-256, and reports additions, removals, and replacements with format-aware locations. Reviewers—not an AI layer—decide what those changes mean.",
      },
      {
        title: "Watch without fabricating state",
        body: "Real-time filesystem observation is paired with reconciliation scans. Missing libraries, unreadable files, and ambiguous rename or move cases become explicit monitoring exceptions instead of invented deletions or guessed identities. The reliability rule is simple: uncertainty must remain uncertainty.",
      },
      {
        title: "A desktop system, not a script",
        body: "FastAPI provides the local AEGIS Core while React and TypeScript provide the desktop interface inside Tauri. The release pipeline packages the Python core as a sidecar, produces NSIS and MSI Windows bundles, and writes SHA-256 checksums for release artifacts.",
      },
      {
        title: "Current 1.0 boundary",
        body: "The release candidate supports Word, text-based PDF, Excel, PowerPoint, text, Markdown, and CSV evidence. OCR for scanned PDFs, SharePoint or Graph integration, hosted multi-user collaboration, legacy binary Office formats, and complete extraction of every advanced Office object are intentionally outside the 1.0 evidence core.",
      },
    ],
    findings: [
      "The audited pre-GitHub source snapshot passes 55 backend regression and adversarial tests.",
      "Native Windows validation has produced the Python sidecar plus React/Tauri NSIS and MSI bundles.",
    ],
    limitations: [
      "The repository describes AEGIS as a 1.0.0 release candidate rather than a published Gold release.",
      "Final installed-app multi-format, OneDrive, backup/restore, screenshot, checksum, and clean-machine release gates remain before the Gold tag.",
      "Image-only scanned PDFs require OCR and are not treated as valid text evidence in 1.0.",
    ],
    repository: {
      label: "View AEGIS on GitHub",
      href: "https://github.com/glitchmatrix-jpg/AEGIS",
    },
    related: ["heartline", "biolitgraph", "taaqat"],
  },
  {
    id: "heartline",
    title: "HEARTLINE",
    route: "/build/heartline",
    world: "build",
    eyebrow: "Build / Native Android",
    summary:
      "A native Android lyric companion that follows active playback, retrieves synchronized lyrics, works offline, powers live lyric notifications, and creates shareable lyric cards on-device.",
    question:
      "How can lyrics feel native to the listening session instead of living in a separate search flow?",
    status: "Public repository",
    role: "Independent product engineering",
    facts: ["Kotlin", "Jetpack Compose", "Room", "Active media sessions", "GitHub Actions"],
    sections: [
      {
        title: "The product",
        body: "HEARTLINE detects active media sessions, retrieves synchronized lyrics, and keeps the experience available through local caching. Live notifications and on-device lyric-card rendering extend the interface beyond the main app.",
      },
      {
        title: "The system",
        body: "Compose handles the interface. Room keeps tracks available offline. Foreground services, notification-listener recovery, FileProvider sharing, Canvas rendering, MediaStore, tests, lint, Gradle, and GitHub Actions carry the rest.",
      },
      {
        title: "Public demonstration",
        body: "The public demonstration uses the real interface with a fictional local demo track. Commercial lyrics, album artwork, and artist metadata have been removed.",
      },
    ],
    repository: {
      label: "View HEARTLINE on GitHub",
      href: "https://github.com/glitchmatrix-jpg/HEARTLINE-Android",
    },
    related: ["taaqat", "nivala", "to-ash-again"],
  },
  {
    id: "to-ash-again",
    title: "To Ash Again",
    route: "/build/to-ash-again",
    world: "build",
    eyebrow: "Build / Game + Narrative",
    summary:
      "A four-act narrative platformer built as a modular system of characters, abilities, levels, enemies, cutscenes, inventory, saving, bosses, and progression.",
    question: "How do you keep a four-act game from collapsing under its own state?",
    status: "Public repository; completion status not asserted",
    role: "Independent game development",
    facts: [
      "Python",
      "Pygame",
      "Four acts",
      "Two playable characters",
      "Six abilities",
      "Approximately 258 tracked files",
    ],
    sections: [
      {
        title: "Four acts, one shared state",
        body: "Two playable characters, six abilities, three inventory slots, enemy AI, dialogue, cutscenes, saving, and progression all meet inside one four-act game.",
      },
      {
        title: "The difficult join",
        body: "Combat, level, dialogue, and boss systems stay modular, but they share save-state and progression logic. The final encounter runs across multiple phases.",
      },
      {
        title: "Public demonstration",
        body: "The public page uses project-authored title art, gameplay, and an Act IV environment from the original build.",
      },
    ],
    repository: {
      label: "View To Ash Again on GitHub",
      href: "https://github.com/PurplePoet25/ToAshAgain",
    },
    related: ["heartline", "flooded", "student-poets-association"],
  },
  {
    id: "taaqat",
    title: "Taaqat",
    route: "/build/taaqat",
    world: "build",
    eyebrow: "Build / Offline-first Fitness",
    summary:
      "An offline-first Flutter fitness platform with a bundled exercise library, muscle mapping, recovery-aware planning, persistent routines, workout logging, analytics, reminders, and import/export.",
    question: "Can a fitness app still do its job with no account and no network?",
    status: "Public repository",
    role: "Independent product engineering",
    facts: [
      "Flutter",
      "Offline-first",
      "172 bundled exercises",
      "Local persistence",
      "Import / export",
    ],
    sections: [
      {
        title: "What works offline",
        body: "Taaqat bundles 172 exercises, interactive SVG muscle mapping, workout planning, filtering, logging, rest alerts, and recovery-aware recommendations.",
      },
      {
        title: "What stays local",
        body: "Routines, workout logs, progress analytics, reminders, and JSON import/export remain available through local persistence.",
      },
      {
        title: "Public demonstration",
        body: "The diagram is synthetic. No personal health profile or unverified production capture appears.",
      },
    ],
    repository: {
      label: "View Taaqat on GitHub",
      href: "https://github.com/glitchmatrix-jpg/taaqat",
    },
    related: ["nivala", "heartline", "biolitgraph"],
  },
  {
    id: "nivala",
    title: "Nivala",
    route: "/build/nivala",
    world: "build",
    eyebrow: "Build / Privacy-first Nutrition",
    summary:
      "A privacy-first nutrition tracker built around 278 Pakistani foods with English, Urdu, and Roman Urdu aliases, meal logging, recipes, progress tracking, and validated local backup.",
    question:
      "What happens when a nutrition tracker starts with Pakistani food instead of adding it later?",
    status: "Private repository",
    role: "Independent product engineering",
    facts: [
      "Flutter",
      "278 Pakistani foods",
      "English / Urdu / Roman Urdu aliases",
      "Local data",
      "Backup validation",
    ],
    sections: [
      {
        title: "Start with the food",
        body: "Nivala bundles 278 Pakistani foods with searchable English, Urdu, and Roman Urdu aliases.",
      },
      {
        title: "Keep the diary local",
        body: "Calorie and macronutrient planning, preparation adjustments, meal logging, recipes, body-weight tracking, optional glucose tracking, and validated backup all run around locally held data.",
      },
      {
        title: "Private repository",
        body: "There is no public repository link. The visual is synthetic and contains no personal nutrition or health data.",
      },
    ],
    related: ["taaqat", "heartline", "biolitgraph"],
  },
  {
    id: "biolitgraph",
    title: "BioLitGraph",
    route: "/build/biolitgraph",
    world: "build",
    eyebrow: "Build ↔ Research / Scientific Software",
    summary:
      "A biomedical literature-mining system that turns normalized entities and source evidence into explorable networks.",
    question: "How do you turn papers into a graph without losing the paper behind each edge?",
    status: "Public repository",
    role: "Independent scientific software",
    facts: [
      "PubMed",
      "PubTator",
      "Entity normalization",
      "Network construction",
      "Evidence export",
    ],
    sections: [
      {
        title: "From papers to entities",
        body: "BioLitGraph searches PubMed, retrieves paper metadata and PubTator annotations, normalizes entities, and builds their relationships into a network.",
      },
      {
        title: "Keep the evidence attached",
        body: "Every connection keeps a route back to source evidence, and the system can export those evidence tables.",
      },
      {
        title: "Software for research",
        body: "It is a Flask and NetworkX software system built for scientific traceability, with a local demonstration mode when external services are unavailable.",
      },
    ],
    repository: {
      label: "View BioLitGraph on GitHub",
      href: "https://github.com/PurplePoet25/BioLitGraph",
    },
    related: ["cancershift", "a17", "ichthyology"],
  },
  {
    id: "cancershift",
    title: "CancerShift",
    route: "/research/cancershift",
    world: "research",
    eyebrow: "Research / Cross-platform Evaluation",
    summary:
      "An independent computational-biology study testing whether a multicancer classifier transfers across studies, platforms, and cohorts.",
    question:
      "Does a cancer classifier still work when the study, sequencing platform, and patient cohort change?",
    status: "Independent research project; not represented as peer reviewed",
    role: "Independent computational-biology research",
    facts: [
      "TCGA",
      "GEO",
      "CPTAC-GDC",
      "Leakage control",
      "Cross-study evaluation",
      "Cross-platform evaluation",
    ],
    sections: [
      {
        title: "The test is the point",
        body: "Development cohorts and external evaluations stay separate. The reported number comes from data the model did not train on.",
      },
      {
        title: "Two external evaluations",
        body: "The work uses TCGA, GEO, and CPTAC-GDC cohorts and tests transfer in separate microarray and RNA-seq evaluations.",
      },
      {
        title: "What is public",
        body: "The public page reports 99.59% accuracy on a blind external microarray cohort and 98.24% on external RNA-seq data. Unverified accessions, sample counts, and original figures stay out.",
      },
    ],
    findings: [
      "99.59% accuracy on a blind external microarray cohort.",
      "98.24% accuracy on external RNA-seq data.",
    ],
    limitations: [
      "The project is independent research and is not described as peer reviewed, published, or accepted.",
      "The approved metrics do not by themselves establish clinical utility.",
      "Unverified cohort identifiers, sample counts, selective-accuracy claims, and original figures are not published here.",
    ],
    related: ["a17", "biolitgraph", "ichthyology"],
  },
  {
    id: "a17",
    title: "Predicting Chromatin Contact Maps from Epigenomic Signals",
    route: "/research/a17",
    world: "research",
    eyebrow: "Research / A17 Model",
    summary:
      "A17 is a seven-track residual neural network studied with chromosome-level holdouts, frozen decisions, and a locked test set.",
    question:
      "Can epigenomic signals predict chromatin contact maps on chromosomes the model never saw during development?",
    status: "Manuscript in preparation",
    role: "Computational-biology research",
    facts: [
      "Hi-C",
      "Seven epigenomic tracks",
      "Residual neural network",
      "Chromosome holdouts",
      "Locked test set",
    ],
    sections: [
      {
        title: "Strict transfer",
        body: "A17 predicts Hi-C contact maps from seven epigenomic tracks. Chromosome-level holdouts separate development from evaluation, while frozen decisions and a locked test set constrain post-hoc tuning.",
      },
      {
        title: "Structure versus scale",
        body: "The approved interpretation is deliberately qualified: relative structure generalized more consistently than absolute contact-map scale.",
      },
      {
        title: "Negative results belong",
        body: "Failed target-blind calibration and other negative results are part of the public methodological story. Oracle analyses are not presented as predictive validation.",
      },
    ],
    findings: [
      "Relative contact-map structure generalized more consistently than absolute scale.",
      "The evaluation preserved strict chromosome-level holdouts and a locked test set.",
    ],
    limitations: [
      "The manuscript is in preparation; the work is not described as published, accepted, peer reviewed, or under review.",
      "Target-blind calibration did not resolve the scale problem.",
      "Detailed unpublished figures and locked-test material are withheld pending review.",
    ],
    related: ["cancershift", "ichthyology", "biolitgraph"],
  },
  {
    id: "ichthyology",
    title: "Comparative Fundulus Genomics",
    route: "/research/ichthyology",
    world: "research",
    eyebrow: "Research / Ongoing Lab Work",
    summary:
      "Ongoing undergraduate research comparing chromosome-scale Fundulus assemblies through synteny, chromosome correspondence, and technical reporting.",
    question:
      "How can chromosome-scale assemblies from two related species be compared without overstating an unfinished result?",
    status: "Ongoing undergraduate lab research",
    role: "Undergraduate researcher, USM Ichthyology Lab",
    facts: [
      "Comparative genomics",
      "Two related species",
      "24 pseudochromosome labels",
      "Synteny",
      "Correspondence matrices",
    ],
    sections: [
      {
        title: "Scope",
        body: "The approved public scope is comparative analysis of chromosome-scale Fundulus assemblies from two related species, using 24 pseudochromosome labels, synteny, and alignment-based correspondence matrices.",
      },
      {
        title: "Work in progress",
        body: "The public page shows the comparison method and technical reporting work. An abstract correspondence matrix stands in for unpublished lab figures.",
      },
      {
        title: "What stays in the lab",
        body: "Species-specific findings and possible fusion or fission interpretations stay out until the lab approves them.",
      },
    ],
    findings: [
      "The current public record supports the research scope and methods, not a species-specific result.",
    ],
    limitations: [
      "The work is ongoing.",
      "Unpublished biological conclusions are not stated.",
      "Original figures are withheld without lab or principal-investigator permission.",
    ],
    related: ["a17", "cancershift", "biolitgraph"],
  },
  {
    id: "flooded",
    title: "Flooded",
    route: "/write/flooded",
    world: "write",
    eyebrow: "Write / Poetry",
    summary:
      "A poetry collection in development, with a physical book and full cover-wrap already part of the process.",
    question: "How do you show an unfinished poetry collection without pretending it is published?",
    status: "Poetry collection in development",
    role: "Writer and designer",
    facts: [
      "Poetry",
      "Collection in development",
      "Physical-object practice",
      "No unapproved excerpts",
    ],
    sections: [
      {
        title: "What exists",
        body: "Flooded exists as a poetry collection in progress, a physical book reference, and a full cover-wrap reference.",
      },
      {
        title: "What is not settled",
        body: "There is no verified publication date, publisher, availability, reception, theme statement, quotation, or approved excerpt.",
      },
      {
        title: "No borrowed lines",
        body: "No poem appears until Hasan approves the exact text. The page leaves that space empty instead of inventing a line.",
      },
    ],
    related: ["to-ash-again", "student-poets-association", "heartline"],
  },
  {
    id: "student-poets-association",
    title: "Student Poets Association",
    route: "/write/student-poets-association",
    world: "write",
    eyebrow: "Write / Community Leadership",
    summary:
      "A student creative-writing community at the University of Southern Mississippi built through open mics, public showcases, collaborative arts programming, and sustained club operations.",
    question: "What does it take to keep making room for other student writers?",
    status: "Active student leadership",
    role: "Founder and President",
    facts: [
      "University of Southern Mississippi",
      "Open mics",
      "Public showcases",
      "Collaborative arts programming",
      "Club operations",
    ],
    sections: [
      {
        title: "The role",
        body: "Hasan founded and leads the Student Poets Association and Creative Writing Club at Southern Miss.",
      },
      {
        title: "Programs",
        body: "The public record supports open mics, public showcases, collaborative arts programming, and club operations. It does not supply attendance, dates, or awards.",
      },
      {
        title: "People stay in control",
        body: "The public page uses the real association logo, event posters with social-media chrome removed, and a presenting image of Hasan. Group photographs stay out until participant permission is confirmed.",
      },
    ],
    related: ["flooded", "to-ash-again", "ichthyology"],
  },
] as const;

export function getProject(id: string) {
  const project = projects.find((item) => item.id === id);
  if (!project) throw new Error(`Unknown project: ${id}`);
  return project;
}
