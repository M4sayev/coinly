import "@testing-library/react";
import { screen, render, fireEvent } from "@testing-library/react";
import Hamburger from "../Hamburger";

describe("Hamburger Button", () => {
  it("sets the aria-expanded correctly", () => {
    const onToggleMobileNav = vi.fn();

    const { rerender } = render(
      <Hamburger isSidebarOpen={false} onToggleMobileNav={onToggleMobileNav} />
    );

    const button = screen.getByRole("button", {
      name: /open mobile sidebar navigation/i,
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);

    expect(onToggleMobileNav).toHaveBeenCalledTimes(1);

    rerender(
      <Hamburger isSidebarOpen={true} onToggleMobileNav={onToggleMobileNav} />
    );

    expect(button).toHaveAttribute("aria-expanded", "true");
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
