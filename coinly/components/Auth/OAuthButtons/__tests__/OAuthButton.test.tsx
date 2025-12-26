import { fireEvent, render, screen } from "@testing-library/react";
import type { Mock } from "vitest";
import { type Procedure } from "@vitest/spy";
import GoogleIcon from "@/assets/social-icons/google-icon.svg";
import OAuthButton from "../OAuthButton";
import { oauthBtnBaseClass } from "../../../../constants/OAuthProviders";

vi.mock("@/assets/social-icons/google-icon.svg", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: (props: any) => <svg data-testid="google-icon" {...props} />,
}));

describe("OAuthButton", () => {
  let onClick: Mock<Procedure>;
  let button: HTMLElement;
  beforeEach(() => {
    onClick = vi.fn();
    render(
      <OAuthButton
        onClick={onClick}
        ariaLabel="oauth btn"
        Icon={GoogleIcon}
        className="custom-class"
      />
    );
    button = screen.getByRole("button");
  });
  it("renders the correct aria-label", () => {
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "oauth btn");
  });

  it("calls onClose when clicked", () => {
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
  it("applies additional className correctly", () => {
    const svg = document.querySelector("svg");
    expect(svg).toHaveClass(`${oauthBtnBaseClass} custom-class`);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
