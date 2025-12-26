import { render, screen } from "@testing-library/react";
import TermsAndPolicyLink from "../TernsAndPolicyLink";
import type { Mock } from "vitest";
import type { Procedure } from "@vitest/spy";
import userEvent from "@testing-library/user-event";

describe("TermsAndPolicyLink", () => {
  let onClick: Mock<Procedure>;
  beforeEach(() => {
    onClick = vi.fn();
    render(<TermsAndPolicyLink text="test" to="test-page" onClick={onClick} />);
  });
  it("sets the aria-label correctly", () => {
    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("aria-label", "View our test");
  });
  it("calls the onClick on click", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("link");
    await user.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
  it("sets the href properly", () => {
    const button = screen.getByRole("link");
    expect(button).toHaveAttribute("href", "test-page");
  });
  it("injects text properly", () => {
    const button = screen.getByRole("link");
    expect(button).toHaveTextContent("test");
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
