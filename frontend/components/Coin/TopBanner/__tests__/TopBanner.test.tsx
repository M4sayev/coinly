import { render, screen } from "@testing-library/react";
import TopBanner from "../TopBanner";

const mockCoin = {
  id: "test-coin",
  symbol: "tst",
  name: "Test",
  image:
    "https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400",
  current_price: 95040,
  high_24h: 95544,
};

describe("TopBanner", () => {
  it("renders all children correctly", () => {
    const { rerender } = render(
      <TopBanner
        src={mockCoin.image}
        name={mockCoin.name}
        symbol={mockCoin.symbol}
        currentPrice={mockCoin.current_price}
        high24={mockCoin.high_24h}
        currency="btc"
      />,
    );

    const img = screen.getByAltText(/test icon/i);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("height", "40");
    expect(img).toHaveAttribute("width", "40");

    expect(
      screen.getByRole("heading", { name: mockCoin.name }),
    ).toBeInTheDocument();
    expect(screen.getByText(mockCoin.symbol.toUpperCase())).toBeInTheDocument();

    expect(screen.getByText(mockCoin.current_price)).toBeInTheDocument();
    const high24 = screen.getByText(`+95544.00% (24H)`);
    expect(high24).toBeInTheDocument();
    expect(high24).toHaveClass("text-green-accent");

    rerender(
      <TopBanner
        src={mockCoin.image}
        name={mockCoin.name}
        symbol={mockCoin.symbol}
        currentPrice={mockCoin.current_price}
        high24={-mockCoin.high_24h}
        currency="btc"
      />,
    );

    expect(high24).toHaveClass("text-red-accent");
  });
});
