import { fireEvent, render, screen } from "@testing-library/react";
import type { Procedure } from "@vitest/spy";
import type { Mock } from "vitest";
import ActionButton from "../ActionButton";
import type { ReactNode } from "react";

describe("ActionButton", () => {
  let onClick: Mock<Procedure>;
  let button: HTMLElement;
  let rerender: (ui: ReactNode) => void;
  beforeEach(() => {
    onClick = vi.fn();
    rerender = render(
      <ActionButton onClick={onClick} type="button" variant="primary" />
    ).rerender;
    button = screen.getByTestId("action-button");
  });
  it("calls the onClick on click", () => {
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
  it("correctly disables the button", () => {
    rerender(
      <ActionButton
        onClick={onClick}
        type="button"
        variant="secondary"
        disabled={true}
      />
    );
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(0);
  });
  it("renders the correct variant", () => {
    expect(button).toHaveAttribute("data-variant", "primary");
    expect(button).toHaveClass("bg-accent-dblue text-white");

    rerender(
      <ActionButton onClick={onClick} type="button" variant="secondary" />
    );

    expect(button).toHaveAttribute("data-variant", "secondary");
    expect(button).toHaveClass(
      "bg-transparent text-accent border-accent border-1"
    );
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
