import { screen } from "@testing-library/dom";
import OAuthButtons from "../OAuthButtons";
import { render } from "@testing-library/react";

vi.mock("@/assets/social-icons/google-icon.svg", () => ({
  default: () => <svg data-testid="google-icon" />,
}));

vi.mock("@/assets/social-icons/facebook-icon.svg", () => ({
  default: () => <svg data-testid="facebook-icon" />,
}));

vi.mock("@/assets/social-icons/apple-icon.svg", () => ({
  default: () => <svg data-testid="apple-icon" />,
}));

describe("OAuthButtons", () => {
  it("renders all oauth buttons", () => {
    render(<OAuthButtons />);
    const google = screen.getByRole("button", {
      name: /Continue with Google/i,
    });
    const facebook = screen.getByRole("button", {
      name: /Continue with Facebook/i,
    });
    const apple = screen.getByRole("button", { name: /Continue with Apple/i });

    expect(google).toBeInTheDocument();
    expect(facebook).toBeInTheDocument();
    expect(apple).toBeInTheDocument();
  });
  test("renders divider with correct text", () => {
    render(<OAuthButtons />);
    expect(screen.getByText("Or continue with")).toBeInTheDocument();
  });
});
