import { render, screen } from "@testing-library/react";

import Footer from "../Footer";

describe("Footer", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it("renders the copyright text", () => {
    expect(screen.getByText(/2025 Coinly/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Market data provided by CoinGecko./i)
    ).toBeInTheDocument();
  });

  it("renders privacy and terms links", () => {
    expect(
      screen.getByRole("link", { name: /privacy policy/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /terms/i })).toBeInTheDocument();
  });
  it("renders all social icons", async () => {
    const github = screen.getByRole("link", { name: /github/i });
    const instagram = screen.getByRole("link", { name: /instagram/i });
    const linkedin = screen.getByRole("link", { name: /linkedin/i });

    expect(github).toHaveAttribute("href", "https://github.com/M4sayev");
    expect(instagram).toHaveAttribute(
      "href",
      "https://www.instagram.com/_elvin_musaev_"
    );
    expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/elvin-musayev/"
    );
  });
});
