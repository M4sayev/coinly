vi.mock("../../../services/coinsApi", () => ({
  useGetCoinsInfiniteQuery: vi.fn(),
}));

import { render, screen } from "@testing-library/react";
import HomeCoinsGrid from "./HomeCoinsGrid";
import { useGetCoinsInfiniteQuery } from "../../../services/coinsApi";
import { createTestStore } from "../../../test/testStore";
import { Provider } from "react-redux";
import { mockCoin, mockCoinsApiData } from "../../../test/mockData";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

let mockGetCoins = useGetCoinsInfiniteQuery as ReturnType<typeof vi.fn>;

describe("HomeCoinGrid", () => {
  const store = createTestStore({ ui: { currency: "usd" } });
  const renderHomeGrid = (query = "") => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <HomeCoinsGrid searchQuery={query} />
        </Provider>
      </MemoryRouter>
    );
  };
  it("renders error message component on isError true", () => {
    mockGetCoins.mockReturnValue({
      data: undefined,
      isError: true,
      error: { status: 500 },
      isLoading: false,
      fetchNextPage: vi.fn(),
      isFetching: false,
    });
    renderHomeGrid();

    const error = screen.getByText(
      /We couldn't connect to the server. Please check your connection and try again/i
    );
    expect(screen.queryByTestId("empty-coin-grid")).toBeNull();
    expect(error).toBeInTheDocument();
  });
  it("renders skeleton loader on isLoading true", () => {
    mockGetCoins.mockReturnValue({
      data: undefined,
      isError: false,
      isLoading: true,
      fetchNextPage: vi.fn(),
      isFetching: false,
    });
    renderHomeGrid();

    const loader = screen.getByTestId("skeleton-loader");
    expect(loader).toBeInTheDocument();

    expect(
      screen.queryByText(
        /We couldn't connect to the server. Please check your connection and try again/i
      )
    ).toBeNull();

    expect(screen.queryByTestId("empty-coin-grid")).toBeNull();
  });
  it("Shows an empty grid on when coins found", () => {
    mockGetCoins.mockReturnValue({
      data: undefined,
      isError: false,
      isLoading: false,
      fetchNextPage: vi.fn(),
      isFetching: false,
    });
    renderHomeGrid();

    const loader = screen.queryByTestId("skeleton-loader");
    expect(loader).toBeNull();

    expect(
      screen.queryByText(
        /We couldn't connect to the server. Please check your connection and try again/i
      )
    ).toBeNull();

    expect(screen.queryByTestId("empty-coin-grid")).toBeInTheDocument();
  });
  it("Shows an empty grid on when coins found", () => {
    mockGetCoins.mockReturnValue({
      data: mockCoinsApiData,
      isError: false,
      isLoading: false,
      fetchNextPage: vi.fn(),
      isFetching: false,
    });

    renderHomeGrid();

    const loader = screen.queryByTestId("skeleton-loader");
    expect(loader).toBeNull();

    expect(
      screen.queryByText(
        /We couldn't connect to the server. Please check your connection and try again/i
      )
    ).toBeNull();

    expect(screen.queryByTestId("empty-coin-grid")).toBeNull();

    const coinGrid = screen.getByLabelText(/List of crypto coin cards/i);

    expect(coinGrid).toBeInTheDocument();
  });
  it("shows the loader and hides the button on isFetching true", () => {
    mockGetCoins.mockReturnValue({
      data: mockCoinsApiData,
      isError: false,
      isLoading: false,
      fetchNextPage: vi.fn(),
      isFetching: true,
    });

    renderHomeGrid();

    const skeletonLoader = screen.getByTestId("skeleton-loader");
    expect(skeletonLoader).toBeInTheDocument();

    expect(screen.queryByRole("button", { name: /load more/i })).toBeNull();
  });
  it("shows the loader when loadmore button is clicked", async () => {
    const newMockData = {
      ...mockCoinsApiData,
      pages: mockCoinsApiData.pages.at(-1)?.slice(15),
    };
    mockGetCoins.mockReturnValue(() => ({
      data: newMockData,
      isError: false,
      isLoading: false,
      fetchNextPage: vi.fn(),
      isFetching: false,
    }));

    renderHomeGrid();

    expect(screen.queryByRole("button", { name: /load more/i })).toBeNull();
  });
});
