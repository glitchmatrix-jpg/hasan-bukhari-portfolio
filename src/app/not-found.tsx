import Link from "next/link";

export default function NotFound() {
  return (
    <div className="utility-page">
      <header>
        <p className="eyebrow">404 / Missing page</p>
        <h1>This page left the issue.</h1>
        <p className="utility-page__lead">
          The route does not exist, but the work is still here. Return to the
          portfolio or jump directly into Build, Research, or the résumé paths.
        </p>
      </header>
      <div className="utility-actions">
        <Link href="/">Return home →</Link>
        <Link href="/build">Build</Link>
        <Link href="/research">Research</Link>
        <Link href="/resume">Résumés</Link>
      </div>
    </div>
  );
}
