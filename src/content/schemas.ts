import { z } from "zod";

export const worldSchema = z.enum(["build", "research", "write"]);
export type World = z.infer<typeof worldSchema>;

export const verificationStatusSchema = z.enum([
  "verified",
  "approved-interpretation",
  "needs-confirmation",
  "do-not-publish",
]);

export const visibilitySchema = z.enum([
  "public",
  "public-summary-only",
  "private",
  "restricted",
]);

export const projectStatusSchema = z.enum([
  "active",
  "completed",
  "ongoing-research",
  "manuscript-in-preparation",
  "private",
  "archived",
  "in-development",
]);

export const seoSchema = z.object({
  title: z.string().min(10).max(70),
  description: z.string().min(50).max(170),
  canonicalPath: z.string().startsWith("/").optional(),
  noIndex: z.boolean().default(false),
});

export const assetReferenceSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  src: z.string().startsWith("/assets/"),
  type: z.enum(["image", "video", "animation", "figure", "sprite", "texture", "document"]),
  alt: z.string(),
  caption: z.string().optional(),
  longDescription: z.string().optional(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  publicStatus: z.enum(["approved", "approved-with-edit", "review-required", "restricted"]),
  ownership: z.enum(["owned", "collaborative", "third-party-licensed", "public-domain", "reference-only"]),
  licenseId: z.string().optional(),
  sourceId: z.string().optional(),
  decorative: z.boolean(),
});

export const metricSchema = z.object({
  id: z.string(),
  value: z.string(),
  label: z.string(),
  context: z.string(),
  interpretation: z.string().optional(),
  limitation: z.string().optional(),
  verificationStatus: verificationStatusSchema,
  sourceId: z.string(),
  public: z.boolean(),
  featured: z.boolean().default(false),
}).superRefine((metric, context) => {
  if (metric.public && !["verified", "approved-interpretation"].includes(metric.verificationStatus)) {
    context.addIssue({
      code: "custom",
      message: "Public metrics must be verified or an approved interpretation.",
      path: ["verificationStatus"],
    });
  }
});

export const researchClaimSchema = z.object({
  id: z.string(),
  projectId: z.string(),
  type: z.enum(["question", "method", "result", "interpretation", "limitation", "negative-result", "publication-status"]),
  statement: z.string(),
  plainLanguage: z.string().optional(),
  verificationStatus: verificationStatusSchema,
  sourceId: z.string(),
  public: z.boolean(),
  homepageEligible: z.boolean(),
  caseStudyEligible: z.boolean(),
  caveat: z.string().optional(),
});

export const repositoryLinkSchema = z.object({
  label: z.string(),
  owner: z.string(),
  repository: z.string(),
  url: z.string().url(),
  visibility: z.enum(["public", "private"]),
  platform: z.literal("github"),
  primary: z.boolean(),
  archived: z.boolean().default(false),
  accessibleToVisitor: z.boolean(),
}).superRefine((repository, context) => {
  if (repository.visibility === "private" && repository.accessibleToVisitor) {
    context.addIssue({
      code: "custom",
      message: "Private repositories cannot be exposed as visitor-accessible links.",
      path: ["accessibleToVisitor"],
    });
  }
});

export const projectMetadataSchema = z.object({
  id: z.string(),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: z.string(),
  shortTitle: z.string().optional(),
  world: worldSchema,
  secondaryWorlds: z.array(worldSchema).default([]),
  projectType: z.enum([
    "mobile-app",
    "web-application",
    "game",
    "research-project",
    "research-software",
    "writing-project",
    "community-project",
    "internal-tool",
    "creative-code",
  ]),
  summary: z.string().min(30),
  homepageSummary: z.string().optional(),
  recruiterSummary: z.string().optional(),
  role: z.string(),
  ownership: z.enum(["independent", "lead", "collaborative", "employment", "university-research"]),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  dateDisplay: z.string(),
  status: projectStatusSchema,
  visibility: visibilitySchema,
  featured: z.boolean(),
  featuredRank: z.number().int().positive().optional(),
  archiveOnly: z.boolean().default(false),
  technologies: z.array(z.string()).default([]),
  repositories: z.array(repositoryLinkSchema).default([]),
  demoUrl: z.string().url().optional(),
  releaseUrl: z.string().url().optional(),
  heroAsset: assetReferenceSchema.optional(),
  keyMetrics: z.array(metricSchema).default([]),
  researchClaims: z.array(researchClaimSchema).default([]),
  relatedProjectIds: z.array(z.string()).max(3).default([]),
  seo: seoSchema,
});

export type ProjectMetadata = z.infer<typeof projectMetadataSchema>;

export const resumeDocumentSchema = z.object({
  id: z.string(),
  discipline: z.enum(["computational-biology", "software-engineering"]),
  title: z.string(),
  shortLabel: z.string(),
  audience: z.array(z.string()).min(1),
  sourceFilename: z.string(),
  publicFilename: z.string().endsWith(".pdf"),
  downloadPath: z.string().startsWith("/assets/resumes/"),
  mimeType: z.literal("application/pdf"),
  fileSizeBytes: z.number().int().positive().optional(),
  pageCount: z.number().int().positive(),
  updatedAt: z.string(),
  verified: z.boolean(),
  relatedRoutes: z.array(z.string().startsWith("/")),
  description: z.string(),
});
