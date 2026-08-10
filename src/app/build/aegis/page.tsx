import { CaseStudy } from "@/components/projects/CaseStudy";
import type { ProjectRecord } from "@/content/portfolio";
import { pageMetadata } from "@/lib/metadata";

const project: ProjectRecord = {
  id: "aegis",
  title: "AEGIS",
  route: "/build/aegis",
  world: "build",
  eyebrow: "Build / Windows Systems Engineering",
  summary:
    "A local-first Windows platform for controlled-document intelligence: trusted baselines, deterministic multi-format change evidence, governed review, retained versions, and tamper-evident audit history.",
  question:
    "How do you detect exactly what changed in controlled documents without inventing evidence when the source is uncertain?",
  status: "Public repository · 1.0.0 release candidate",
  role: "Independent systems and product engineering",
  facts: [
    "Python + FastAPI",
    "React + TypeScript + Tauri",
    "SQLite + SQLAlchemy + Alembic",
    "Word · PDF · Excel · PowerPoint · Text · CSV",
    "SHA-256 version integrity",
    "55 regression / adversarial tests",
  ],
  sections: [
    {
      title: "Evidence before intelligence",
      body: "AEGIS separates two responsibilities that are easy to blur. The evidence layer deterministically establishes what changed, where it changed, and which retained versions support that conclusion. Governance remains human: reviewers classify changes, record decisions and comments, create actions, and own the outcome. No AI is required to decide whether a document changed.",
    },
    {
      title: "A trusted-state monitoring loop",
      body: "The system watches multiple local, network, or locally synchronized OneDrive libraries, combines real-time filesystem observation with full reconciliation scans, creates explicit trusted baselines, preserves document identity across safe rename and move scenarios, and retains immutable source versions with SHA-256 verification. When a library disappears, a file becomes unreadable, or identity is ambiguous, AEGIS reports uncertainty instead of fabricating deletions or guessed state.",
    },
    {
      title: "Format-aware deterministic diffing",
      body: "A parser registry turns supported Word, PDF, Excel, PowerPoint, text, Markdown, and CSV documents into evidence with human-readable locations such as heading or clause, page, worksheet and cell, slide and shape, or line. The diff layer reports additions, removals, and replacements while preserving the route back to the retained before-and-after documents.",
    },
    {
      title: "Governance becomes an auditable system",
      body: "Detected changes flow into review, decisions, comments, actions, ownership, lifecycle state, analytics, and evidence export. Audit events are append-only and hash-chained, while dashboards drill back to the exact underlying record. The goal is not another document viewer; it is a controlled loop from observation to evidence to accountable action.",
    },
    {
      title: "Desktop release engineering",
      body: "The FastAPI core is packaged as a PyInstaller sidecar and shipped through a React and TypeScript Tauri desktop shell. The Windows release pipeline runs source QA, frontend build and npm audit, Rust dependency validation, native NSIS and MSI packaging, and SHA-256 checksum generation. AEGIS remains local-first: runtime databases, retained versions, backups, and logs live in the user's local data directory rather than requiring a hosted document service.",
    },
  ],
  findings: [
    "The deterministic evidence core covers Word, PDF, Excel, PowerPoint, text/Markdown, and CSV documents in the current 1.0 scope.",
    "The release test suite covers normal monitoring plus source disappearance, ambiguous identity, parser failures, backup traversal, audit tampering, governance, analytics, and the full detect-to-govern-to-analyze journey.",
    "The design explicitly preserves the previous trusted state when evidence cannot be established reliably.",
  ],
  limitations: [
    "AEGIS 1.0 does not include SharePoint or Microsoft Graph integration, server-hosted collaboration, SSO/RBAC, or OCR for scanned PDFs.",
    "Legacy .doc, .xls, and .ppt parsing and complete extraction of every advanced Office object are outside the 1.0 deterministic evidence core.",
    "The repository describes 1.0.0 as a release candidate; the portfolio does not represent it as a published Gold release until that tag exists.",
  ],
  repository: {
    label: "View AEGIS on GitHub",
    href: "https://github.com/glitchmatrix-jpg/AEGIS",
  },
  related: ["heartline", "biolitgraph", "taaqat"],
};

export const metadata = pageMetadata(
  project.title,
  project.summary,
  "/build/aegis",
);

export default function Page() {
  return <CaseStudy project={project} />;
}
