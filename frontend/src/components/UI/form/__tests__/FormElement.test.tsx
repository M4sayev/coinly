import { render, screen } from "@testing-library/react";
import FormElement from "../FormElement";
import { useForm, type FieldError } from "react-hook-form";
import type { FormValues } from "../../../../types/form";
import { mockError } from "../../../../test/mockData";

function Wrapper({ error }: { error?: FieldError }) {
  const { register } = useForm<FormValues>({ mode: "onBlur" });

  return (
    <FormElement
      id="test"
      type="text"
      label="test label"
      placeholder="test placeholder"
      register={register}
      error={error}
      rules={{ required: true }}
    />
  );
}

describe("FormElement", () => {
  it("correctly renders the error message", () => {
    render(<Wrapper error={mockError} />);

    const errorParagraph = screen.getByText(/this field is required/i);
    expect(errorParagraph).toBeInTheDocument();
  });

  it("correctly sets the aria-invalid", () => {
    render(<Wrapper error={mockError} />);

    const input = screen.getByRole("textbox", { name: /test/i });
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("adds correct id, name, type, placeholder, for attributes", () => {
    render(<Wrapper />);

    const input = screen.getByRole("textbox", { name: /test/i });
    const label = screen.getByText(/test label/i);

    expect(input).toHaveAttribute("aria-invalid", "false");

    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("id", "test");
    expect(input).toHaveAttribute("name", "test");
    expect(input).toHaveAttribute("placeholder", "test placeholder");

    expect(label).toHaveAttribute("for", "test");
    expect(label).toHaveTextContent(/test label/i);
  });

  it("handles aria-describedby properly", () => {
    render(<Wrapper error={mockError} />);

    const input = screen.getByRole("textbox", { name: /test/i });
    expect(input).toHaveAttribute("aria-describedby", "test-error");

    const errorParagraph = screen.getByText(/this field is required/i);
    expect(errorParagraph).toHaveAttribute("id", "test-error");
  });

  it("does not set aria-describedby", () => {
    render(<Wrapper />);

    const input = screen.getByRole("textbox", { name: /test/i });
    expect(input).not.toHaveAttribute("aria-describedby");
  });
});
