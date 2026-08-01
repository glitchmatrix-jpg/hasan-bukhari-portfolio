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
    facts: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "Active media sessions",
      "GitHub Actions",
    ],
    sections: [
      {
        title: "The product",
        body: "HEARTLINE detects active media sessions, retrieves synchronized lyrics, and keeps the experience available through local caching. Live notifications and on-device lyric-card rendering extend the interface beyond the main app.",
      },
      {
        title: "The system",
        body: "The case study centers the Android product architecture: a Compose interface, persistent local data through Room, playback-aware behavior, and automated repository workflows.",
      },
      {
        title: "Publication boundary",
        body: "Public visuals use abstract, copyright-safe interface treatments. Lyrics, album artwork, and artist metadata are not reproduced here until a cleared demonstration set exists.",
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
    question:
      "What does it take to make a narrative world hold together as both story and software?",
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
        title: "A world made of systems",
        body: "To Ash Again is presented first as engineering: character state, abilities, levels, enemies, inventory, saving, cutscenes, bosses, and progression must coordinate without dissolving the authored narrative.",
      },
      {
        title: "Narrative architecture",
        body: "Four acts and two playable characters give the technical systems a dramatic structure. The project therefore transitions deliberately into the Write world without treating narrative as decoration.",
      },
      {
        title: "Asset boundary",
        body: "The production page uses a CSS-built abstract landscape. Original game artwork remains withheld until provenance and redistribution review are complete.",
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
    question:
      "How can a fitness tool remain useful, private, and coherent when the network disappears?",
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
        title: "Recovery before spectacle",
        body: "Taaqat organizes training around a bundled exercise catalog, muscle mapping, and recovery-aware planning rather than requiring a remote service for the core experience.",
      },
      {
        title: "Local continuity",
        body: "Routines, workout logs, analytics, reminders, and import/export form a local-first product loop. The technical emphasis is persistence and resilient everyday use.",
      },
      {
        title: "Visual boundary",
        body: "No personal health profile or production screenshot is shown. The page uses a synthetic recovery map until a cleared screenshot set is available.",
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
      "What changes when a nutrition product begins with local food culture and local data ownership?",
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
        title: "Representation in the data model",
        body: "Nivala begins with a Pakistani food dataset and searchable aliases across English, Urdu, and Roman Urdu. Cultural specificity is part of the product architecture, not a cosmetic localization layer.",
      },
      {
        title: "Private by design",
        body: "Meal logging, recipes, progress tracking, and backup operate around locally held data. The backup path is validated so portability does not depend on exposing a user profile to a public service.",
      },
      {
        title: "Repository boundary",
        body: "The repository is private, so this page intentionally provides no inaccessible repository button. Screens remain synthetic and contain no personal health information.",
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
    question:
      "How can a literature corpus become a navigable evidence structure without losing its sources?",
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
        title: "From articles to entities",
        body: "BioLitGraph ingests biomedical literature through PubMed and PubTator workflows, normalizes entities, and constructs relationships that can be inspected as a network.",
      },
      {
        title: "Evidence stays attached",
        body: "The engineering goal is not merely a graph visualization. Interaction and export preserve a route back to the evidence behind a connection.",
      },
      {
        title: "A bridge between worlds",
        body: "This project belongs to Build because it is a software system and to Research because its usefulness depends on scientific traceability. Both paths remain visible.",
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
      "An independent computational-biology study of whether a multicancer classifier survives changes in study, platform, and patient cohort.",
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
        title: "Evaluation is the study",
        body: "CancerShift is organized around leakage control and external evaluation. Development data and external cohorts remain conceptually distinct so a strong number cannot hide a weak validation design.",
      },
      {
        title: "Across platforms",
        body: "The approved public account covers TCGA, GEO, and CPTAC-GDC data and evaluates transfer across studies and between microarray and RNA-seq settings.",
      },
      {
        title: "What the public record supports",
        body: "Only the two locked external accuracy results are reported. Cohort accession, sample count, selective-accuracy analysis, release URL, and original figures remain omitted pending verification or approval.",
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
        body: "The page documents research practice and technical reporting rather than announcing a biological conclusion. Its visual system uses an abstract correspondence matrix rather than an unpublished lab figure.",
      },
      {
        title: "Public boundary",
        body: "Species-specific findings, chromosome-switch claims, and possible fusion or fission interpretations remain outside the public site until lab and publication approval exist.",
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
      "A poetry collection in development, presented through its artistic premise, material process, and publication boundary rather than an unapproved manuscript dump.",
    question:
      "How can a work in progress be encountered without pretending it is already published?",
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
        title: "The object",
        body: "Flooded is approached as both a poetry collection and a physical object. The case study focuses on artistic premise, cover and material thinking, and the process of shaping a collection.",
      },
      {
        title: "A page without borrowed certainty",
        body: "The project is not called forthcoming because that publication status has not been confirmed. No complete manuscript, private notes, or unapproved drafts appear here.",
      },
      {
        title: "Excerpt boundary",
        body: "No poem excerpt is supplied in the verified content register, so this implementation leaves the writing itself unquoted. The absence is explicit rather than filled with invented lines.",
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
    question:
      "What does it mean to build infrastructure for other people’s creative work?",
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
        title: "Leadership as infrastructure",
        body: "The Student Poets Association and Creative Writing Club creates recurring spaces where student writers can make and share work together. The portfolio emphasis is operational leadership and community-building.",
      },
      {
        title: "Programs",
        body: "Approved public activity includes open mics, public showcases, and collaborative arts programming. The case study does not add attendance numbers, dates, or awards that are not in the verified register.",
      },
      {
        title: "Consent boundary",
        body: "Event photographs and participant imagery remain withheld pending original-file, photographer-rights, and participant-consent review. The page uses a designed public-safe poster field instead.",
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
