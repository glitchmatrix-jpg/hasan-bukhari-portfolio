import type { World } from "./portfolio";

export interface WorldRecord {
  id: World;
  index: string;
  title: string;
  eyebrow: string;
  summary: string;
  route: `/${World}`;
  next: World;
}

export const profile = {
  name: "Hasan Bukhari",
  pronouns: "he/him",
  origin: "Karachi, Pakistan",
  location: "Hattiesburg, Mississippi",
  university: "University of Southern Mississippi",
  degree: "B.S. in Computer Science",
  minor: "Biological Sciences · Political Science",
  expectedGraduation: "December 2028",
  gpa: "4.00",
  statement: "I build software, study biological signals, and write poems and games.",
} as const;

export const worlds: readonly WorldRecord[] = [
  {
    id: "build",
    index: "01",
    title: "Build",
    eyebrow: "Android · Flutter · Python · scientific software",
    summary:
      "Native Android, offline-first mobile tools, a Pygame platformer, and software for working with biomedical evidence.",
    route: "/build",
    next: "research",
  },
  {
    id: "research",
    index: "02",
    title: "Research",
    eyebrow: "Computational biology · genomics",
    summary:
      "Independent model evaluation and undergraduate genomics work, with findings kept beside their limits.",
    route: "/research",
    next: "write",
  },
  {
    id: "write",
    index: "03",
    title: "Write",
    eyebrow: "Poetry · games · community",
    summary:
      "A poetry collection in development, narrative game work, and the student writing community I founded at Southern Miss.",
    route: "/write",
    next: "build",
  },
] as const;

export const publicLinks = [
  {
    label: "Email",
    value: "hasan.bukhari25@gmail.com",
    href: "mailto:hasan.bukhari25@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/hasan-bukhari",
    href: "https://www.linkedin.com/in/hasan-bukhari",
    external: true,
  },
  {
    label: "GitHub · mobile",
    value: "glitchmatrix-jpg",
    href: "https://github.com/glitchmatrix-jpg",
    external: true,
  },
  {
    label: "GitHub · games and research",
    value: "PurplePoet25",
    href: "https://github.com/PurplePoet25",
    external: true,
  },
] as const;

export function getWorld(id: World) {
  const world = worlds.find((item) => item.id === id);
  if (!world) throw new Error(`Unknown world: ${id}`);
  return world;
}
