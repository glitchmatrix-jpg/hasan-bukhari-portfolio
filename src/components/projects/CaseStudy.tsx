import type { Route } from "next";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { StampedLabel } from "@/components/zine/StampedLabel";
import type { ProjectRecord } from "@/content/portfolio";
import { getProject } from "@/content/portfolio";

function ProjectVisual({ project }: { project: ProjectRecord }) {
  return (
    <div
      className={`case-visual case-visual--${project.world} case-visual--${project.id}`}
      role="img"
      aria-label={`Abstract public-safe visual for ${project.title}`}
    >
      <span className="case-visual__label">{project.title}</span>
      <span className="case-visual__axis" aria-hidden="true" />
      <span
        className="case-visual__signal case-visual__signal--one"
        aria-hidden="true"
      />
      <span
        className="case-visual__signal case-visual__signal--two"
        aria-hidden="true"
      />
    </div>
  );
}

export function CaseStudy({ project }: { project: ProjectRecord }) {
  const related = project.related.map(getProject);
  return (
    <article className={`case-study case-study--${project.world}`}>
      <header className="case-hero">
        <div className="case-hero__copy">
          <StampedLabel tone={project.world}>{project.eyebrow}</StampedLabel>
          <p className="case-hero__status">{project.status}</p>
          <h1>{project.title}</h1>
          <p className="case-hero__question">{project.question}</p>
          <p className="case-hero__summary">{project.summary}</p>
        </div>
        <ProjectVisual project={project} />
      </header>

      <nav className="case-jump" aria-label="On this case study">
        <a href="#evidence">Immediate evidence</a>
        <a href="#deep-reading">Deep reading</a>
        {(project.findings || project.limitations) && (
          <a href="#findings">Findings and limits</a>
        )}
        <a href="#related">Related work</a>
      </nav>

      <section
        className="case-evidence"
        id="evidence"
        aria-labelledby="evidence-title"
      >
        <div>
          <p className="eyebrow">Immediate read</p>
          <h2 id="evidence-title">What to know in sixty seconds</h2>
        </div>
        <dl>
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{project.status}</dd>
          </div>
        </dl>
        <ul>
          {project.facts.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>
        {project.repository && (
          <ButtonLink external href={project.repository.href}>
            {project.repository.label}
          </ButtonLink>
        )}
      </section>

      <div className="case-reading" id="deep-reading">
        {project.sections.map((section, index) => (
          <section
            key={section.title}
            aria-labelledby={`${project.id}-section-${index}`}
          >
            <p className="case-reading__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <h2 id={`${project.id}-section-${index}`}>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </section>
        ))}
      </div>

      {(project.findings || project.limitations) && (
        <section
          className="research-verdict"
          id="findings"
          aria-labelledby="findings-title"
        >
          <div className="research-verdict__findings">
            <p className="eyebrow">Supported by the public record</p>
            <h2 id="findings-title">Findings</h2>
            <ul>
              {project.findings?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="research-verdict__limits">
            <p className="eyebrow">Keep the claim honest</p>
            <h2>Limitations</h2>
            <ul>
              {project.limitations?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <nav
        className="related-projects"
        id="related"
        aria-labelledby="related-title"
      >
        <p className="eyebrow">Continue through the issue</p>
        <h2 id="related-title">Related work</h2>
        <ol>
          {related.map((item, index) => (
            <li key={item.id}>
              <Link href={item.route as Route}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.title}</strong>
                <small>{item.world} â†’</small>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </article>
  );
}
