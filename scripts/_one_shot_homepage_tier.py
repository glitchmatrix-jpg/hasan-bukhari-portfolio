from pathlib import Path

page_path = Path("src/app/page.tsx")
page = page_path.read_text(encoding="utf-8")

old_biolit = '''  [
    "01",
    "BioLitGraph",
    "Biomedical literature mining and evidence graphs",
    "/build/biolitgraph",
  ],
'''
if old_biolit not in page:
    raise SystemExit("Expected BioLitGraph archive entry not found")
page = page.replace(old_biolit, "", 1)

for old, new in {
    '"02",\n    "QTL Analysis Toolkit"': '"01",\n    "QTL Analysis Toolkit"',
    '"03",\n    "Unified Genome Explorer"': '"02",\n    "Unified Genome Explorer"',
    '"04",\n    "PhyloPlayground"': '"03",\n    "PhyloPlayground"',
    '["05", "Observatorium"': '["04", "Observatorium"',
    '["06", "Moonwater Angler"': '["05", "Moonwater Angler"',
}.items():
    page = page.replace(old, new, 1)

marker = '''      <section
        className={`${styles.section} ${styles.archive}`}
        id="archive"
        aria-labelledby="archive-title"
      >'''
if marker not in page:
    raise SystemExit("Archive section marker not found")

deeper = '''      <section
        className={`${styles.section} ${styles.deeperWork}`}
        id="deeper-work"
        aria-labelledby="deeper-work-title"
      >
        <div className={styles.inner}>
          <div className={styles.sectionHeader}>
            <p className={styles.eyebrow}>Selected deeper work</p>
            <h2 id="deeper-work-title">Three systems worth a closer look.</h2>
            <p>
              Beyond the flagship sequence: a desktop governance system,
              evidence-linked scientific software, and ongoing computational
              genomics research.
            </p>
          </div>
          <div className={styles.deeperGrid}>
            <Link className={styles.deeperCard} href="/build/aegis">
              <span className={styles.deeperIndex}>01 / Build</span>
              <strong>AEGIS</strong>
              <span>Controlled document intelligence &amp; governance</span>
              <p>
                Local-first Windows software for deterministic change evidence,
                trusted baselines, human governance, and auditable document history.
              </p>
              <small>Python · FastAPI · React · TypeScript · Tauri · SQLite →</small>
            </Link>
            <Link className={styles.deeperCard} href="/build/biolitgraph">
              <span className={styles.deeperIndex}>02 / Build ↔ Research</span>
              <strong>BioLitGraph</strong>
              <span>Biomedical literature graphs with evidence attached</span>
              <p>
                Scientific software that normalizes biomedical entities into
                explorable networks while preserving a route back to source papers.
              </p>
              <small>PubMed · PubTator · NetworkX · Evidence export →</small>
            </Link>
            <Link className={styles.deeperCard} href="/research/ichthyology">
              <span className={styles.deeperIndex}>03 / Research</span>
              <strong>Fundulus Genomics</strong>
              <span>Chromosome-scale comparative genomics</span>
              <p>
                Ongoing lab research using synteny and correspondence matrices to
                compare chromosome-scale assemblies without overstating unfinished findings.
              </p>
              <small>Python · Synteny · 24 pseudochromosomes · Research reporting →</small>
            </Link>
          </div>
        </div>
      </section>

'''
page = page.replace(marker, deeper + marker, 1)
page_path.write_text(page, encoding="utf-8")

css_path = Path("src/app/home.module.css")
css = css_path.read_text(encoding="utf-8")
css_marker = ".archive {\n"
if css_marker not in css:
    raise SystemExit("Archive CSS marker not found")

css_block = '''.deeperWork {
  color: var(--color-global-dirty-cream);
  background: linear-gradient(155deg, #160b12, #111827 58%, #071827);
}

.deeperGrid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
}

.deeperCard {
  display: grid;
  align-content: start;
  gap: 1rem;
  min-height: 25rem;
  padding: clamp(1.4rem, 3vw, 2.3rem);
  border: 3px solid currentColor;
  color: inherit;
  text-decoration: none;
  background: rgb(9 9 9 / 28%);
  box-shadow: 7px 7px 0 rgb(0 0 0 / 30%);
  transition: transform var(--motion-fast) ease-out;
}

.deeperCard:hover {
  transform: translateY(-4px);
}

.deeperCard strong {
  margin-top: auto;
  font-family: var(--font-display);
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 0.85;
  text-transform: uppercase;
}

.deeperCard > span:not(.deeperIndex),
.deeperCard small,
.deeperIndex {
  font-family: var(--font-mono);
}

.deeperCard > span:not(.deeperIndex) {
  font-weight: 700;
}

.deeperCard p {
  margin: 0;
  line-height: 1.55;
}

.deeperCard small {
  margin-top: auto;
  line-height: 1.5;
}

.deeperIndex {
  font-size: 0.75rem;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}

'''
css = css.replace(css_marker, css_block + css_marker, 1)
css = css.replace(
    "  .metricGrid,\n  .productPair,\n  .resumeGrid {",
    "  .metricGrid,\n  .productPair,\n  .deeperGrid,\n  .resumeGrid {",
    1,
)
css_path.write_text(css, encoding="utf-8")
