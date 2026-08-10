import Link from "next/link";

import styles from "./RecruiterSnapshot.module.css";

const featured = [
  { href: "/build/heartline", label: "HEARTLINE" },
  { href: "/research/cancershift", label: "CancerShift" },
  { href: "/research/a17", label: "A17" },
  { href: "/build/to-ash-again", label: "To Ash Again" },
] as const;

export function RecruiterSnapshot() {
  return (
    <section className={styles.snapshot} aria-labelledby="snapshot-title">
      <div className={styles.inner}>
        <div className={styles.masthead}>
          <p className={styles.kicker}>Fast read / before the rabbit hole</p>
          <h2 id="snapshot-title">Software Engineering + Computational Biology</h2>
          <p>
            Hasan Bukhari · University of Southern Mississippi · Build, research,
            and scientific software.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.block}>
            <span className={styles.label}>Featured work</span>
            <div className={styles.links}>
              {featured.map((item) => (
                <Link href={item.href} key={item.href}>
                  {item.label} ↗
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.label}>Three résumé paths</span>
            <Link className={styles.primaryLink} href="/resume">
              SWE · ML / Research · Bioinformatics →
            </Link>
          </div>

          <div className={styles.block}>
            <span className={styles.label}>Find me</span>
            <div className={styles.links}>
              <a
                href="https://github.com/glitchmatrix-jpg"
                rel="noreferrer"
                target="_blank"
              >
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/hasan-bukhari"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn ↗
              </a>
              <Link href="/contact">Contact →</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
