import { ButtonLink } from "@/components/ui/ButtonLink";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "About Hasan Bukhari and the connection between software, computational biology, games, writing, and community.",
  "/about",
);
export default function AboutPage() {
  return (
    <article className="utility-page utility-page--about">
      <header>
        <p className="eyebrow">Personnel file / One practice</p>
        <h1>About</h1>
        <p className="utility-page__lead">
          Hasan Bukhari is a computer science student at the University of
          Southern Mississippi working across software engineering,
          computational biology, game development, and poetry.
        </p>
      </header>
      <section>
        <h2>Systems, signals, stories</h2>
        <p>
          He builds native Android and Flutter products, backend and research
          systems, and interactive games; conducts independent genomics and
          chromatin research; and leads the Student Poets Association. His work
          is united by an interest in complex systems, human-centered design,
          scientific honesty, and turning difficult ideas into experiences
          people can understand and use.
        </p>
      </section>
      <section className="utility-page__paths" aria-labelledby="paths-title">
        <h2 id="paths-title">Follow a thread</h2>
        <div>
          <ButtonLink href="/build">Build</ButtonLink>
          <ButtonLink href="/research" variant="secondary">
            Research
          </ButtonLink>
          <ButtonLink href="/write" variant="secondary">
            Write
          </ButtonLink>
        </div>
      </section>
      <aside>
        <p>
          The site does not publish an origin story, current focus, education
          date, honors, or employment timeline beyond the facts in the locked
          public register. Those details can be added when the source-of-truth
          record is available in-repository.
        </p>
      </aside>
    </article>
  );
}
