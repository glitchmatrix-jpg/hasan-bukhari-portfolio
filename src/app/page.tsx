export default function HomePage() {
  return (
    <section className="scaffold" aria-labelledby="scaffold-title">
      <p className="eyebrow">HASAN BUKHARI — ISSUE 01</p>
      <h1 id="scaffold-title">Build · Research · Write</h1>
      <p>
        The production interface is intentionally withheld while the asset and content gates are completed.
        This scaffold verifies the application shell, design tokens, content schemas, accessibility baseline,
        and testing infrastructure without introducing a disposable template.
      </p>
      <nav aria-label="Primary destinations">
        <ul className="scaffold-links">
          <li><a href="/build">Build</a></li>
          <li><a href="/research">Research</a></li>
          <li><a href="/write">Write</a></li>
          <li><a href="/resume">Résumés</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </section>
  );
}
