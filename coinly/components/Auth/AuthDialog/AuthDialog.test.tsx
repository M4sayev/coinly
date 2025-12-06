import { render, screen } from "@testing-library/react";
import AuthDialog from "./AuthDialog";
import { createTestStore } from "../../../test/testStore";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";
import React from "react";

vi.mock("@/assets/social-icons/google-icon.svg", () => ({
  default: () => <svg data-testid="google-icon" />,
}));

vi.mock("@/assets/social-icons/facebook-icon.svg", () => ({
  default: () => <svg data-testid="facebook-icon" />,
}));

vi.mock("@/assets/social-icons/apple-icon.svg", () => ({
  default: () => <svg data-testid="apple-icon" />,
}));

describe("AuthDialog", () => {
  let store: ReturnType<typeof createTestStore>;
  beforeEach(() => {
    store = createTestStore({ ui: { isSignUpModalOpen: true } });
    render(
      <Provider store={store}>
        <AuthDialog />
      </Provider>
    );
  });
  it("renders all child components", () => {
    const signUp = screen.getByText(/create account/i);
    expect(signUp).toBeInTheDocument();

    const logIn = screen.getByText(/Forgot Password/i);
    expect(logIn).toBeInTheDocument();

    const resetPassword = screen.getByText(/Back to Log In/i);
    expect(resetPassword).toBeInTheDocument();
  });
  it("sets aria-labelledby correctly", () => {
    const dialog = screen.getByTestId("modal");
    expect(dialog).toHaveAttribute("aria-labelledby", "signup");
    const signUp = screen.getByRole("heading", { name: /sign up/i });

    expect(signUp).toHaveAttribute("id", "signup");
  });
  it("renders signup authSlide first and sets aria-current, inert correctly", () => {
    const singupWrapper = screen.getByTestId("signup-wrapper");
    const loginWrapper = screen.getByTestId("login-wrapper");
    const resetPasswordWrapper = screen.getByTestId("rp-wrapper");

    expect(singupWrapper).not.toHaveAttribute("inert");
    expect(loginWrapper).toHaveAttribute("inert", "");
    expect(resetPasswordWrapper).toHaveAttribute("inert", "");

    expect(singupWrapper).toHaveAttribute("aria-current", "true");
    expect(loginWrapper).not.toHaveAttribute("aria-current");
    expect(resetPasswordWrapper).not.toHaveAttribute("aria-current");
  });

  it("traps focus only in the current authSlide", async () => {
    const user = userEvent.setup();
    const closeBtn = screen.getByRole("button", {
      name: "Close sign up dialog",
    });

    closeBtn.focus();
    expect(document.activeElement).toBe(closeBtn);

    await user.tab({ shift: true });

    await user.tab();

    expect(document.activeElement).toBe(closeBtn);
  });
  it("closes on Click outside of only current slide", async () => {
    const user = userEvent.setup();

    const signupWrapper = screen.getByTestId("signup-wrapper");
    const dialog = screen.getByRole("dialog");

    await user.click(signupWrapper);
    expect(store.getState().ui.isSignUpModalOpen).toBe(true);

    await user.click(dialog);
    expect(store.getState().ui.isSignUpModalOpen).toBe(false);
  });
});
