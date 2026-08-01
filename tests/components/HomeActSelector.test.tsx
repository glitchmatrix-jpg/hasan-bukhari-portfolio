import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { HomeActSelector } from "@/components/game/HomeActSelector";

describe("HomeActSelector", () => {
  it("exposes all worlds as tabs and updates the panel", async () => {
    const user = userEvent.setup();
    render(<HomeActSelector />);

    const researchTab = screen.getByRole("tab", { name: /act ii research/i });
    await user.click(researchTab);

    expect(researchTab).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent(
      /genomics, machine learning, chromatin/i,
    );
    expect(
      screen.getByRole("link", { name: /enter research/i }),
    ).toHaveAttribute("href", "/research");
  });

  it("supports arrow-key tab navigation", async () => {
    const user = userEvent.setup();
    render(<HomeActSelector />);

    const buildTab = screen.getByRole("tab", { name: /act i build/i });
    buildTab.focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: /act ii research/i })).toHaveFocus();
    expect(
      screen.getByRole("tab", { name: /act ii research/i }),
    ).toHaveAttribute("aria-selected", "true");
  });
});
