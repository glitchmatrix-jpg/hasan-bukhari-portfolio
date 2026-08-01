import Link from "next/link";

interface PhaseNoticeProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PhaseNotice({ eyebrow, title, description }: PhaseNoticeProps) {
  return (
    <section className="scaffold" aria-labelledby="phase-title">
      <p className="eyebrow">{eyebrow}</p>
      <h1 id="phase-title">{title}</h1>
      <p>{description}</p>
      <p>
        <Link href="/">Return to Issue 01</Link>
      </p>
    </section>
  );
}
