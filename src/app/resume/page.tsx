import { ResumeTile } from "@/components/projects/ResumeTile";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(
  "Résumés",
  "Software engineering, machine learning, and computational biology résumé paths for Hasan Bukhari.",
  "/resume",
);

export default function ResumePage() {
  return (
    <div className="utility-page utility-page--resume">
      <header>
        <p className="eyebrow">Documents / Three paths</p>
        <h1>Résumés</h1>
        <p className="utility-page__lead">
          Choose the document that matches the role. Three professional paths,
          one body of work.
        </p>
      </header>
      <div className="resume-portal">
        <ResumeTile
          description="For software engineering, mobile development, backend systems, product engineering, and interactive software roles."
          fileSize="131 KB"
          href="/resumes/Hasan_Bukhari_Software_Engineering_Resume.pdf"
          label="Engineering résumé"
          title="Software Engineering Résumé"
          tone="build"
          updatedAt="August 10, 2026"
        />
        <ResumeTile
          description="For machine learning, research engineering, scientific computing, data science, and applied AI roles."
          fileSize="130 KB"
          href="/resumes/Hasan_Bukhari_Machine_Learning_Resume.pdf"
          label="ML / Research résumé"
          title="Machine Learning / Research Engineering Résumé"
          tone="research"
          updatedAt="August 10, 2026"
        />
        <ResumeTile
          description="For computational biology, bioinformatics, genomics, scientific software, and research roles."
          fileSize="129 KB"
          href="/resumes/Hasan_Bukhari_Bioinformatics_Resume.pdf"
          label="Bioinformatics résumé"
          title="Computational Biology / Bioinformatics Résumé"
          tone="research"
          updatedAt="August 10, 2026"
        />
      </div>
      <p className="document-note">
        Each résumé is a targeted one-page PDF. Choose the path that best
        matches the role; the underlying project record is shared across all
        three.
      </p>
    </div>
  );
}
