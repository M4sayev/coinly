import { render, screen } from "@testing-library/react";
import Logo from "./Logo";

vi.mock("@/assets/logo.svg", () => ({
  default: (props: any) => <svg data-testid="logo-icon" {...props} />,
}));

describe("Logo", () => {
  it("renders aria-label, to correctly", () => {
    render(<Logo ariaLabel="Go to test page" linkTo="/about" />);

    const link = screen.getByLabelText(/Go to test page/i);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/about");

    const svg = link.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });
  it("renders only the SVG without a link when linkTo is not provided", () => {
    render(<Logo ariaLabel="Logo only" />);

    const link = screen.queryByRole("link");
    expect(link).toBeNull();

    const svg = document.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies additional className correctly", () => {
    render(<Logo ariaLabel="Logo" className="custom-class" />);

    const svg = document.querySelector("svg");
    expect(svg).toHaveClass("h-8 w-8 custom-class");
  });
});
