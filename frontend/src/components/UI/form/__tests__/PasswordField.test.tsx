import { useForm, type FieldError } from "react-hook-form";
import PasswordField from "../PasswordField";
import type { FormValues } from "../../../../types/form";
import { mockError } from "../../../../test/mockData";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

interface WrapperProps {
  error?: FieldError;
  showForgot?: boolean;
  onForgotPassword?: () => void;
}

function Wrapper({
  error,
  showForgot = false,
  onForgotPassword,
}: WrapperProps) {
  const { register } = useForm<FormValues>({ mode: "onBlur" });

  return (
    <PasswordField
      id="test"
      label="Password label"
      placeholder="Enter your password"
      register={register}
      error={error}
      rules={{ required: true }}
      showForgot={showForgot}
      onForgotPassword={onForgotPassword}
    />
  );
}

describe("PasswordField", () => {
  it("show password button toggles type of input correctly", async () => {
    const user = userEvent.setup();
    render(<Wrapper error={mockError} />);

    const input = screen.getByPlaceholderText(/Enter your password/i);
    expect(input).toHaveAttribute("type", "password");

    const showPasswordButton = screen.getByTestId("password-visibility-button");

    await user.click(showPasswordButton);

    expect(input).toHaveAttribute("type", "text");
  });
  it("correctly toggles aria-label on the show/hide password button clicked", async () => {
    const user = userEvent.setup();
    render(<Wrapper error={mockError} />);

    const showPasswordButton = screen.getByTestId("password-visibility-button");
    expect(showPasswordButton).toHaveAttribute("aria-label", "Show Password");

    await user.click(showPasswordButton);

    expect(showPasswordButton).toHaveAttribute("aria-label", "Hide Password");
  });
  it("renders forgot password button on showForgot true and onForgotPassword exists", () => {
    const onForgotPassword = vi.fn();
    render(
      <Wrapper
        error={mockError}
        showForgot={true}
        onForgotPassword={onForgotPassword}
      />
    );

    const button = screen.getByRole("button", {
      name: /Go to Forgot Password Form/i,
    });
    expect(button).toBeInTheDocument();
  });
  it("does not show forgot password button either onForgotPassword or showForgot is false", () => {
    const onForgotPassword = vi.fn();
    const { rerender } = render(
      <Wrapper error={mockError} showForgot={true} />
    );

    const buttonOne = screen.queryByRole("button", {
      name: /Go to Forgot Password Form/i,
    });
    expect(buttonOne).toBeNull();

    rerender(<Wrapper error={mockError} onForgotPassword={onForgotPassword} />);

    const buttonTwo = screen.queryByRole("button", {
      name: /Go to Forgot Password Form/i,
    });
    expect(buttonTwo).toBeNull();
  });
  it("calls onForgotPassword when forgot password button is clicked", async () => {
    const user = userEvent.setup();
    const onForgotPassword = vi.fn();
    render(<Wrapper showForgot onForgotPassword={onForgotPassword} />);

    const button = screen.getByRole("button", {
      name: /Go to Forgot Password Form/i,
    });
    await user.click(button);
    expect(onForgotPassword).toHaveBeenCalledWith("forgotPassword");
  });
  it("correctly renders the error message and aria-invalid on input", () => {
    render(<Wrapper error={mockError} />);

    const errorParagraph = screen.getByText(/this field is required/i);
    expect(errorParagraph).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Enter your password/i);
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("adds correct id, name, type, placeholder, for attributes", () => {
    render(<Wrapper />);

    const input = screen.getByPlaceholderText(/Enter your password/i);
    const label = screen.getByTestId("password-label");

    expect(input).toHaveAttribute("aria-invalid", "false");

    expect(input).toHaveAttribute("type", "password");
    expect(input).toHaveAttribute("id", "test");
    expect(input).toHaveAttribute("name", "test");
    expect(input).toHaveAttribute("placeholder", "Enter your password");

    expect(label).toHaveAttribute("for", "test");
    expect(label).toHaveTextContent(/Password label/i);
  });

  it("handles aria-describedby properly", () => {
    render(<Wrapper error={mockError} />);

    const input = screen.getByPlaceholderText(/Enter your password/i);
    expect(input).toHaveAttribute("aria-describedby", "test-error");

    const errorParagraph = screen.getByText(/this field is required/i);
    expect(errorParagraph).toHaveAttribute("id", "test-error");
  });

  it("does not set aria-describedby", () => {
    render(<Wrapper />);

    const input = screen.getByPlaceholderText(/Enter your password/i);
    expect(input).not.toHaveAttribute("aria-describedby");
  });

  it("initially shows EyeOff icon when password is hidden", () => {
    render(<Wrapper />);
    const button = screen.getByTestId("password-visibility-button");
    expect(button).toHaveAttribute("aria-label", "Show Password");
  });

  it("can be toggle password be focused", async () => {
    const user = userEvent.setup();
    render(<Wrapper />);

    const button = screen.getByTestId("password-visibility-button");

    button.focus();
    expect(button).toHaveFocus();

    await user.keyboard("{Enter}");
    const input = screen.getByPlaceholderText(/Enter your password/i);
    expect(input).toHaveAttribute("type", "text");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
