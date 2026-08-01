import { ResumeTile } from "@/components/projects/ResumeTile";
import { render, screen } from "@testing-library/react";
describe("ResumeTile", () => {
  it("provides a descriptive PDF link", () => {
    render(
      <ResumeTile
        title="Software Engineering Résumé"
        description="For product roles."
        href="/assets/resumes/software.pdf"
        updatedAt="August 2026"
        tone="build"
      />,
    );
    expect(
      screen.getByRole("link", {
        name: /download software engineering résumé/i,
      }),
    ).toHaveAttribute("href", "/assets/resumes/software.pdf");
  });
});
