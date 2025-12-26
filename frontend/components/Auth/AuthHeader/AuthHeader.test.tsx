import { fireEvent, render, screen } from "@testing-library/react";
import AuthHeader from "./AuthHeader";

describe("AuthHeader", () => {
  const onClose = vi.fn();
  let rerender: (ui: React.ReactNode) => void;
  beforeEach(() => {
    rerender = render(
      <AuthHeader
        titleId="signup"
        onCloseDialog={onClose}
        authSlide="sign up"
        showArrow={false}
        promptText="bebra test"
      />
    ).rerender;
  });
  it("sets titleId correctly", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toHaveAttribute("id", "signup");
  });
  it("renders all child components with proper texts, aria-labels", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("sign up");
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-label",
      "Close sign up dialog"
    );
    expect(screen.queryByText("bebra test")).not.toBeNull();
  });
  it("toggles arrow on showArrow correctly", () => {
    const svg = document.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveClass("hidden");

    rerender(
      <AuthHeader
        titleId="signup"
        onCloseDialog={onClose}
        authSlide="sign up"
        showArrow={true}
        promptText="bebra test"
      />
    );

    const svgTwo = document.querySelector("svg");
    expect(svgTwo).not.toHaveClass("hidden");
  });
  it("calls onClose when CloseButton is clicked", () => {
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(onClose).toBeCalledTimes(1);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
