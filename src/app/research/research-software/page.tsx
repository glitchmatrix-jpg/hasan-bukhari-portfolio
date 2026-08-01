import { pageMetadata } from "@/lib/metadata";
import Link from "next/link";
export const metadata = pageMetadata(
  "Research Software",
  "Scientific and educational software projects by Hasan Bukhari.",
  "/research/research-software",
);
export default function ResearchSoftwarePage() {
  return (
    <div className="utility-page">
      <header>
        <p className="eyebrow">Research / Tools</p>
        <h1>Research Software</h1>
        <p className="utility-page__lead">
          Tools for literature evidence, genomics, QTL analysis, phylogenetics,
          and scientific learning.
        </p>
      </header>
      <section>
        <h2>Start with the bridge</h2>
        <p>
          <Link href="/build/biolitgraph">BioLitGraph</Link> receives the full
          case study because it connects software architecture to biomedical
          evidence. QTL Analysis Toolkit, Unified Genome Explorer, and
          PhyloPlayground remain concise public-repository entries in the{" "}
          <Link href="/archive">archive</Link>.
        </p>
      </section>
    </div>
  );
}
