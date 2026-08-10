from pathlib import Path

portfolio = Path("src/content/portfolio.ts")
text = portfolio.read_text(encoding="utf-8")
if 'id: "aegis"' not in text:
    anchor = 'export const projects: readonly ProjectRecord[] = [\n  {\n    id: "heartline",'
    aegis = '''export const projects: readonly ProjectRecord[] = [
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
    id: "heartline",'''
    if anchor not in text:
        raise SystemExit("portfolio.ts insertion anchor not found")
    portfolio.write_text(text.replace(anchor, aegis, 1), encoding="utf-8")

visual = Path("src/components/projects/project-visual.tsx")
v = visual.read_text(encoding="utf-8")
if "function AegisVisual" not in v:
    marker = "export function ProjectVisual({ project, compact = false }: ProjectVisualProps) {"
    block = '''function AegisVisual({ compact }: { compact?: boolean }) {
  return (
    <Frame
      label="Project-authored AEGIS architecture · deterministic evidence pipeline"
      className="visual-aegis"
      compact={compact}
    >
      <div className="bg-white p-4 sm:p-6">
        <img
          src={sitePath("/assets/project/aegis-architecture.svg")}
          alt="AEGIS architecture from controlled libraries through monitoring, trusted identity, retained versions, format-aware parsing, deterministic diffing, governance, FastAPI, and the React and Tauri desktop interface."
          loading={compact ? "lazy" : "eager"}
          className="w-full object-contain"
        />
      </div>
    </Frame>
  );
}

'''
    if marker not in v:
        raise SystemExit("project-visual insertion marker not found")
    v = v.replace(marker, block + marker, 1)

if 'case "aegis":' not in v:
    switch_anchor = '  switch (project.id) {\n    case "heartline":'
    replacement = '  switch (project.id) {\n    case "aegis":\n      return <AegisVisual compact={compact} />;\n    case "heartline":'
    if switch_anchor not in v:
        raise SystemExit("project-visual switch anchor not found")
    v = v.replace(switch_anchor, replacement, 1)

visual.write_text(v, encoding="utf-8")
