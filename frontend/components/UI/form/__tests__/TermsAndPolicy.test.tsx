import { useForm, type FieldError } from "react-hook-form";
import type { FormValues } from "../../../../types/form";
import TermsAndPolicy from "../TermsAndPolicy";
import { render, screen } from "@testing-library/react";
import { mockError } from "../../../../test/mockData";

function Wrapper({ error }: { error?: FieldError }) {
  const { register } = useForm<FormValues>({ mode: "onBlur" });
  return (
    <TermsAndPolicy id="test" name="test" register={register} error={error} />
  );
}

describe("TermsAndPolicy", () => {
  it("attaches proper id, type, name, correctly", () => {
    render(<Wrapper />);

    const label = screen.getByTestId("terms-n-policy");
    expect(label).toBeInTheDocument();

    const input = screen.getByRole("checkbox");
    expect(input).toBeInTheDocument();

    expect(input).toHaveAttribute("id", "test");
    expect(input).toHaveAttribute("name", "test");
  });
  it("sets aria-invalid correctly", () => {
    const { rerender } = render(<Wrapper />);

    const input = screen.getByRole("checkbox");
    expect(input).toHaveAttribute("aria-invalid", "false");

    rerender(<Wrapper error={mockError} />);

    expect(input).toHaveAttribute("aria-invalid", "true");
  });
  it("correctly renders the error message", () => {
    render(<Wrapper error={mockError} />);

    const errorParagraph = screen.getByText(/this field is required/i);
    expect(errorParagraph).toBeInTheDocument();
  });
  it("handles aria-describedby properly", () => {
    const { rerender } = render(<Wrapper />);

    const input = screen.getByRole("checkbox");
    expect(input).not.toHaveAttribute("aria-describedby");

    rerender(<Wrapper error={mockError} />);
    expect(input).toHaveAttribute("aria-describedby", "test-error");

    const errorParagraph = screen.getByText(/this field is required/i);
    expect(errorParagraph).toHaveAttribute("id", "test-error");
  });
});
