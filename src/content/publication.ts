export type PublicationStatus = "public-safe" | "user-supplied" | "gated";

export interface PublicationRecord {
  id: string;
  label: string;
  status: PublicationStatus;
  publicUse: string;
  source: string;
}

export const publicationRegister: readonly PublicationRecord[] = [
  {
    id: "identity-relic",
    label: "Chrome HEARTLINE relic",
    status: "public-safe",
    publicUse: "Homepage identity image and static motion fallback.",
    source: "Generated specifically for this portfolio in the Lovable prototype.",
  },
  {
    id: "biolitgraph-egfr",
    label: "BioLitGraph EGFR knowledge graph",
    status: "public-safe",
    publicUse: "Supporting evidence image with readable caption and alt text.",
    source: "Website mega pack; project-authored demonstration output.",
  },
  {
    id: "resume-software",
    label: "Software engineering résumé",
    status: "user-supplied",
    publicUse: "Direct PDF download requested by Hasan.",
    source: "HasanCVRESUME-CS-8-1-26.pdf.",
  },
  {
    id: "resume-biology",
    label: "Computational biology résumé",
    status: "user-supplied",
    publicUse: "Direct PDF download requested by Hasan.",
    source: "HasanCVRESUME-BI-8-1-26.pdf.",
  },
  {
    id: "heartline-capture",
    label: "HEARTLINE commercial-lyrics capture",
    status: "gated",
    publicUse: "Replaced by a code-native demonstration until cleared content exists.",
    source: "Website mega pack.",
  },
  {
    id: "to-ash-art",
    label: "To Ash Again screenshots",
    status: "gated",
    publicUse: "Replaced by an abstract code-native scene pending asset provenance review.",
    source: "Website mega pack.",
  },
  {
    id: "flooded-photography",
    label: "Flooded book and cover photography",
    status: "gated",
    publicUse:
      "Replaced by a code-native book object pending design and photography rights confirmation.",
    source: "Website mega pack.",
  },
  {
    id: "health-and-genome-captures",
    label: "Taaqat, Nivala, and Unified Genome Explorer captures",
    status: "gated",
    publicUse: "Replaced by synthetic diagrams until displayed data is confirmed synthetic.",
    source: "Website mega pack.",
  },
  {
    id: "spa-artifacts",
    label: "Student Poets Association posters and photography",
    status: "gated",
    publicUse:
      "Replaced by a code-native poster field pending creator and participant permissions.",
    source: "Website mega pack.",
  },
] as const;

export const shippedPublicationAssets = publicationRegister.filter(
  (record) => record.status !== "gated",
);
