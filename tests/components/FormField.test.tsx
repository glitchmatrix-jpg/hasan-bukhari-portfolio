import { render, screen } from "@testing-library/react";
import { FormField } from "@/components/forms/FormField";
describe("FormField", () => { it("associates hints and errors", () => { render(<FormField id="email" label="Email" hint="Use a reachable address." error="Enter a valid email." />); const field = screen.getByLabelText("Email"); expect(field).toHaveAttribute("aria-invalid", "true"); expect(field).toHaveAttribute("aria-describedby", "email-hint email-error"); }); });
