import { MemoryRouter } from "react-router-dom";

import { createTestStore } from "../../../../test/testStore";
import { Provider } from "react-redux";
import CoinCard from "../CoinCard";
import { render, screen } from "@testing-library/react";
import { mockCoin } from "../../../../test/mockData";

const renderCoinCard = (
  coin = mockCoin,
  preloadedState = { ui: { currency: "usd" } }
) => {
  const store = createTestStore(preloadedState);
  return render(
    <MemoryRouter>
      <Provider store={store}>
        <CoinCard {...coin} />
      </Provider>
    </MemoryRouter>
  );
};

describe("CoinCard", () => {
  beforeEach(() => {
    renderCoinCard();
  });
  it("renders name, symbol, price, market cap properly", () => {
    const card = screen.getByTestId("coin-card");

    expect(card).toBeInTheDocument();

    expect(screen.getByText(/bitcoin/i)).toBeInTheDocument();
    expect(screen.getByText(/BTC/i)).toBeInTheDocument();
    expect(screen.getByText("42000")).toBeInTheDocument();
    expect(screen.getByText(/900.0M/i)).toBeInTheDocument();
  });

  it("renders correct trending color", () => {
    const priceChangePercentage = screen.getByTestId("price-change-percentage");

    expect(priceChangePercentage).toHaveClass("text-green-accent");
  });

  it("renders correct treding icon", () => {
    const priceChangePercentage = screen.getByTestId("price-change-percentage");

    expect(priceChangePercentage).toContainHTML("trending-up");
  });

  it("renders the correct currency from the redux store", () => {
    const currency = screen.getByTestId("coin-card-currency");

    expect(currency).toBeInTheDocument();
    expect(currency).toHaveTextContent("$");
  });

  it("renders the image and the alt tag", () => {
    const img = screen.getByAltText(/bitcoin icon/i);
    expect(img).toBeInTheDocument();
  });
});
