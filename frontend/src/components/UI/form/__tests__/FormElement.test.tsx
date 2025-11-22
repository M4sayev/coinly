import { render, screen } from "@testing-library/react";
import FormElement from "../FormElement";
import { useForm, type FieldError } from "react-hook-form";
import type { FormValues } from "../../../../types/form";

function Wrapper({ error }: { error?: FieldError }) {
  const { register } = useForm<FormValues>({ mode: "onBlur" });

  return (
    <FormElement
      id="test"
      type="text"
      label="test"
      placeholder="test"
      register={register}
      error={error}
      rules={{ required: true }}
    />
  );
}

describe("FormElement", () => {
  it("correctly renders the error message", () => {
    const error: FieldError = {
      type: "required",
      message: "This field is required",
    };

    render(<Wrapper error={error} />);

    const errorParagraph = screen.getByText(/this field is required/i);
    expect(errorParagraph).toBeInTheDocument();
  });

  it("correctly sets the aria-invalid", () => {
    const error: FieldError = {
      type: "required",
      message: "This field is required",
    };

    render(<Wrapper error={error} />);

    const input = screen.getByRole("textbox", { name: /test/i });
    expect(input).toHaveAttribute("aria-invalid", "true");
  });
});
