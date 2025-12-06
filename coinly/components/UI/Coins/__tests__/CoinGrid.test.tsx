import { render, screen } from "@testing-library/react";
import CoinGrid from "../CoinGrid";
import { createTestStore } from "../../../../test/testStore";
import { Provider } from "react-redux";
import { mockCoin } from "../../../../test/mockData";

describe("CoinGrid", () => {
  it("renders an empty grid on coins length equal to zero", () => {
    render(<CoinGrid coins={[]} />);

    const emptyGrid = screen.getByTestId("empty-coin-grid");
    expect(emptyGrid).toBeInTheDocument();
  });
  it("renders the coin grid on the length different from zero", () => {
    const store = createTestStore();
    render(
      <Provider store={store}>
        <CoinGrid coins={[mockCoin]} />
      </Provider>
    );

    const grid = screen.getByRole("list", {
      name: /List of crypto coin cards/i,
    });
    expect(grid).toBeInTheDocument();
  });
});
