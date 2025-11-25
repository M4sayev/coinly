import { fireEvent, render, screen } from "@testing-library/react";
import ForgotPasswordHeader from "../ForgotPasswordHeader";
import type { Mock } from "vitest";
import type { Procedure } from "@vitest/spy";

describe("ForgotPasswordHeader", () => {
  let onClose: Mock<Procedure>;
  beforeEach(() => {
    onClose = vi.fn();
    render(<ForgotPasswordHeader onClose={onClose} />);
  });
  it("renders h2 with a proper id", () => {
    expect(screen.getByRole("heading")).toHaveAttribute(
      "id",
      "forgot-password"
    );
  });
  it("calls onClose when action button is clicked", () => {
    const button = screen.getByRole("button", {
      name: /Close Forgot Password dialog/i,
    });
    fireEvent.click(button);

    expect(onClose).toBeCalledTimes(1);
  });
});
