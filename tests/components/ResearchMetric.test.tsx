import { render, screen } from "@testing-library/react";
import { ResearchMetric } from "@/components/research/ResearchMetric";
describe("ResearchMetric", () => { it("renders the value with its context", () => { render(<ResearchMetric value="99.59%" label="Blind external microarray accuracy" context="Measured under the final leakage-controlled pipeline." />); expect(screen.getByText("99.59%")).toBeInTheDocument(); expect(screen.getByText(/leakage-controlled pipeline/i)).toBeInTheDocument(); }); });
