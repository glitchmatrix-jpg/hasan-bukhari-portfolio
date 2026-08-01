import { AlbumTracklist } from "@/components/zine/AlbumTracklist";
import { render, screen } from "@testing-library/react";
describe("AlbumTracklist", () => {
  it("renders accessible track links", () => {
    render(
      <AlbumTracklist
        tracks={[
          {
            number: "01",
            title: "Build",
            description: "Products and systems",
            href: "/build",
          },
        ]}
      />,
    );
    expect(
      screen.getByRole("link", { name: /build products and systems/i }),
    ).toHaveAttribute("href", "/build");
  });
});
