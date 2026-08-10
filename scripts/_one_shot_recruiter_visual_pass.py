from pathlib import Path

page_path = Path("src/app/page.tsx")
page = page_path.read_text(encoding="utf-8")

if 'import { RecruiterSnapshot } from "@/components/home/RecruiterSnapshot";' not in page:
    page = page.replace(
        'import { HomeActSelector } from "@/components/game/HomeActSelector";\n',
        'import { HomeActSelector } from "@/components/game/HomeActSelector";\nimport { RecruiterSnapshot } from "@/components/home/RecruiterSnapshot";\n',
        1,
    )

editorial_marker = '''      <section
        className={`${styles.section} ${styles.editorial}`}
'''
if '<RecruiterSnapshot />' not in page:
    if editorial_marker not in page:
        raise SystemExit("Editorial section marker not found")
    page = page.replace(editorial_marker, '      <RecruiterSnapshot />\n\n' + editorial_marker, 1)

page = page.replace(
    'aria-label="Abstract public-safe placeholder for the HEARTLINE mobile interface"',
    'aria-label="Abstract public-safe HEARTLINE mobile interface study"',
)
page = page.replace(
    'aria-label="Abstract blue book-cover placeholder for Flooded"',
    'aria-label="Abstract blue book-cover study for Flooded"',
)
page = page.replace(
    'aria-label="Public-safe placeholder for the Taaqat recovery dashboard"',
    'aria-label="Synthetic public-safe Taaqat recovery dashboard study"',
)
page = page.replace(
    'aria-label="Public-safe placeholder for the Nivala nutrition dashboard"',
    'aria-label="Synthetic public-safe Nivala nutrition dashboard study"',
)
page = page.replace(
    'aria-label="Event photograph placeholder pending photographer and participant rights review"',
    'aria-label="Designed community illustration used instead of participant photography"',
)

page = page.replace(
    '''              >
                Recovery dashboard asset pending
              </div>''',
    '''              >
                <span className={styles.mockLabel}>Recovery map / synthetic demo</span>
                <strong className={styles.mockMetric}>72%</strong>
                <span className={styles.mockSubline}>Ready today · Push 81 · Pull 76 · Legs 64</span>
                <div className={styles.mockBars} aria-hidden="true">
                  <span style={{ width: "81%" }} />
                  <span style={{ width: "76%" }} />
                  <span style={{ width: "64%" }} />
                </div>
              </div>''',
    1,
)
page = page.replace(
    '''              >
                Synthetic-data screenshot pending
              </div>''',
    '''              >
                <span className={styles.mockLabel}>Today / synthetic demo</span>
                <strong className={styles.mockMetric}>1,840</strong>
                <span className={styles.mockSubline}>kcal · Daal · Roti · Chai · Chicken karahi</span>
                <div className={styles.mockLedger} aria-hidden="true">
                  <span>Protein 108g</span>
                  <span>Fiber 31g</span>
                  <span>Local backup ✓</span>
                </div>
              </div>''',
    1,
)

page_path.write_text(page, encoding="utf-8")

css_path = Path("src/app/home.module.css")
css = css_path.read_text(encoding="utf-8")
css = css.replace(
    'content: "PUBLIC-SAFE VISUAL / FINAL ASSET PENDING";',
    'content: "PUBLIC-SAFE STUDY / ORIGINAL ASSET WITHHELD";',
)
css = css.replace(
    'content: "ORIGINAL EVENT PHOTOGRAPH PENDING RIGHTS REVIEW";',
    'content: "COMMUNITY STUDY / PARTICIPANT IMAGERY WITHHELD";',
)

old_product = '''.productMock {
  display: grid;
  place-items: center;
  min-height: 18rem;
  border: 3px solid currentColor;
  font-family: var(--font-mono);
  background: rgb(255 255 255 / 22%);
}
'''
new_product = '''.productMock {
  display: grid;
  gap: 1rem;
  align-content: center;
  min-height: 18rem;
  padding: clamp(1.25rem, 3vw, 2rem);
  border: 3px solid currentColor;
  font-family: var(--font-mono);
  background:
    linear-gradient(135deg, rgb(255 255 255 / 28%), transparent 60%),
    repeating-linear-gradient(0deg, transparent 0 2.25rem, rgb(9 9 9 / 8%) 2.25rem calc(2.25rem + 1px));
}

.mockLabel,
.mockSubline {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.mockMetric {
  font-family: var(--font-display);
  font-size: clamp(4rem, 8vw, 7rem);
  line-height: 0.8;
}

.mockBars {
  display: grid;
  gap: 0.45rem;
}

.mockBars span {
  display: block;
  height: 0.7rem;
  border: 2px solid currentColor;
  background: currentColor;
}

.mockLedger {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
}

.mockLedger span {
  padding-top: 0.65rem;
  border-top: 2px solid currentColor;
  font-size: 0.7rem;
}
'''
if old_product not in css:
    raise SystemExit("productMock CSS block not found")
css = css.replace(old_product, new_product, 1)

css = css.replace(
    '''  .metricGrid,
  .productPair,
  .deeperGrid,
  .resumeGrid {''',
    '''  .metricGrid,
  .productPair,
  .deeperGrid,
  .resumeGrid,
  .mockLedger {''',
    1,
)

css_path.write_text(css, encoding="utf-8")
