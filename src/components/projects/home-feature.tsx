import { getProject } from "@/content/portfolio";
import { ProjectVisual } from "@/components/projects/project-visual";

export function HomeFeature({
  projectId,
  index,
  reverse = false,
}: {
  projectId: string;
  index: string;
  reverse?: boolean;
}) {
  const project = getProject(projectId);

  return (
    <section
      className={`home-feature motion-reveal world-${project.world} border-t border-border py-20 lg:py-28`}
      aria-labelledby={`home-${project.id}`}
    >
      <span aria-hidden="true" className="home-feature__index">
        {index}
      </span>
      <div className="shell grid-editorial items-center gap-y-12">
        <div
          className={`col-span-4 lg:col-span-7 ${reverse ? "lg:col-start-6" : "lg:col-start-1"}`}
        >
          <ProjectVisual project={project} compact />
        </div>

        <div
          className={`col-span-4 lg:col-span-4 ${
            reverse ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-9"
          }`}
        >
          <p className="meta world-mark">
            {index} / {project.eyebrow}
          </p>
          <h2 id={`home-${project.id}`} className="display mt-5 text-5xl lg:text-6xl">
            {project.title}
          </h2>
          <p className="display mt-6 text-2xl leading-snug">{project.question}</p>
          <p className="measure mt-5 text-sm leading-relaxed text-muted-foreground">
            {project.summary}
          </p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {project.facts.slice(0, 4).map((fact) => (
              <li key={fact} className="stamp">
                {fact}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <a href={project.route} className="action-solid">
              Read the case study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
