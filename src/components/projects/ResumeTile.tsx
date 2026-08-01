import { ButtonLink } from "@/components/ui/ButtonLink";
import { StampedLabel } from "@/components/zine/StampedLabel";

interface Props {
  title: string;
  description: string;
  href?: string;
  updatedAt: string;
  fileSize?: string;
  tone: "build" | "research";
}
export function ResumeTile({
  description,
  fileSize,
  href,
  title,
  tone,
  updatedAt,
}: Props) {
  return (
    <article className={`resume-tile resume-tile--${tone}`}>
      <StampedLabel tone={tone}>
        {tone === "research" ? "Research résumé" : "Engineering résumé"}
      </StampedLabel>
      <h2 className="resume-tile__title">{title}</h2>
      <p>{description}</p>
      <dl className="resume-tile__metadata">
        <div>
          <dt>Format</dt>
          <dd>PDF</dd>
        </div>
        <div>
          <dt>Updated</dt>
          <dd>{updatedAt}</dd>
        </div>
        {fileSize ? (
          <div>
            <dt>Size</dt>
            <dd>{fileSize}</dd>
          </div>
        ) : null}
      </dl>
      {href ? (
        <ButtonLink href={href}>Download {title}</ButtonLink>
      ) : (
        <p role="status">
          <strong>Download pending verified PDF</strong>
        </p>
      )}
    </article>
  );
}
