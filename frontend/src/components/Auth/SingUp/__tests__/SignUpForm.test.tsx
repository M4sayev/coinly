import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpForm from "../SignUpForm";
import { MemoryRouter } from "react-router-dom";

describe("SignUpForm", () => {
  it("renders all child components", () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByTestId("password-label")).toBeInTheDocument();

    expect(screen.getByTestId("terms-n-policy")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /create account/i })
    ).toBeInTheDocument();
  });
  it("submits form with valid data", async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText("yourname@example.com");
    const passwordInput = screen.getByPlaceholderText("Enter your password");
    const submitButton = screen.getByRole("button", {
      name: /create account/i,
    });

    await user.type(emailInput, "test@example.com");
    await user.type(passwordInput, "password123");

    const termsAndPolicy = screen.getByTestId("terms-n-policy");
    await user.click(termsAndPolicy);

    await user.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith({
      "signup-email-field": "test@example.com",
      "signup-password-field": "password123",
      "agree-to-terms-field": true,
    });
  });
});
