import { getProject } from "@/content/portfolio";
import { ProjectVisual } from "@/components/projects/project-visual";
import { sitePath } from "@/lib/site-path";

export function HumanSection() {
  const project = getProject("student-poets-association");

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-border py-24 lg:py-32"
      aria-labelledby="about-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(70% 60% at 20% 30%, var(--cola), transparent 70%)",
        }}
      />

      <div className="shell grid-editorial relative items-center gap-y-14">
        <div className="col-span-4 lg:col-span-6">
          <ProjectVisual project={project} compact />
        </div>

        <div className="col-span-4 lg:col-span-5 lg:col-start-8">
          <p className="meta text-rose">Student Poets Association · Founder and President</p>

          <h3 id="about-title" className="display mt-7 text-5xl lg:text-[3.75rem]">
            Some things are built by getting people into the same room.
          </h3>

          <p className="measure mt-6 text-sm leading-relaxed text-muted-foreground">
            At Southern Miss, I founded and lead the Student Poets Association and Creative Writing
            Club. The work is open mics, public showcases, collaborative arts programming, and the
            club operations that make those events possible.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={sitePath("/write/student-poets-association")} className="action-solid">
              Read the community study
            </a>
            <a href={sitePath("/about")} className="action">
              About Hasan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
