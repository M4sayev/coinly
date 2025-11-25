import { fireEvent, render, screen } from "@testing-library/react";
import type { Mock } from "vitest";
import { type Procedure } from "@vitest/spy";
import OAuthButton from "../OAuthButton";
import GoogleIcon from "../../../../assets/social-icons/google-icon.svg?react";
import { oauthBtnBaseClass } from "../../../../constants/OAuthProviders";

describe("CloseButton", () => {
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
