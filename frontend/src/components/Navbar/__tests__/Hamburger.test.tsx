import "@testing-library/react";
import { screen, render, fireEvent } from "@testing-library/react";
import Hamburger from "../Hamburger";

describe("Hamburger Button", () => {
  it("sets the aria-expanded correctly", () => {
    const onOpenMobileNav = vi.fn();

    const { rerender } = render(
      <Hamburger isSidebarOpen={false} onOpenMobileNav={onOpenMobileNav} />
    );

    const button = screen.getByRole("button", {
      name: "Open menu",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(button);

    expect(onOpenMobileNav).toHaveBeenCalledTimes(1);

    rerender(
      <Hamburger isSidebarOpen={true} onOpenMobileNav={onOpenMobileNav} />
    );

    expect(button).toHaveAttribute("aria-expanded", "true");
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
