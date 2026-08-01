import { ResumeTile } from "@/components/projects/ResumeTile";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "R\u00e9sum\u00e9s",
  "Computational biology and software engineering r\u00e9sum\u00e9 paths for Hasan Bukhari.",
  "/resume",
);
export default function ResumePage() {
  return (
    <div className="utility-page utility-page--resume">
      <header>
        <p className="eyebrow">Documents / Two paths</p>
        <h1>R&eacute;sum&eacute;s</h1>
        <p className="utility-page__lead">
          Choose the document that matches the role. Both paths belong to the
          same systems-minded practice.
        </p>
      </header>
      <div className="resume-portal">
        <ResumeTile
          description="For computational biology, bioinformatics, research engineering, data science, and scientific software roles."
          title={"Computational Biology / Bioinformatics R\u00e9sum\u00e9"}
          tone="research"
          updatedAt="Pending file verification"
        />
        <ResumeTile
          description="For software engineering, mobile development, backend systems, product engineering, and interactive software roles."
          title={"Software Engineering R\u00e9sum\u00e9"}
          tone="build"
          updatedAt="Pending file verification"
        />
      </div>
      <p className="document-note">
        The public filenames are locked, but the PDF files, sizes, page counts,
        and update dates are not present in this repository. Downloads remain
        unavailable until the verified documents are added at the approved asset
        paths.
      </p>
    </div>
  );
}
