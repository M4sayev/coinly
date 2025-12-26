import { fireEvent, render, screen } from "@testing-library/react";
import CloseButton from "../CloseButton";
import type { Mock } from "vitest";
import { type Procedure } from "@vitest/spy";

describe("CloseButton", () => {
  let onClose: Mock<Procedure>;
  let button: HTMLElement;
  beforeEach(() => {
    onClose = vi.fn();
    render(<CloseButton onClose={onClose} ariaLabel="close the modal" />);
    button = screen.getByRole("button", { name: /close the modal/i });
  });
  it("renders the correct aria-label", () => {
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-label", "close the modal");
  });

  it("calls onClose when clicked", () => {
    fireEvent.click(button);
    expect(onClose).toBeCalledTimes(1);
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
