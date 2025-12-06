import { fireEvent, render, screen } from "@testing-library/react";
import LoadMoreButton from "../LoadMoreButton";
import type { Mock } from "vitest";
import type { Procedure } from "@vitest/spy";

describe("LoadMoreButton", () => {
  let onClick: Mock<Procedure>;
  beforeEach(() => {
    onClick = vi.fn();
  });

  const renderLoadMoreButton = (isFetching = false, hasNextPage = true) => {
    render(
      <LoadMoreButton
        isFetching={isFetching}
        onClick={onClick}
        hasNextPage={hasNextPage}
      />
    );
  };
  it("conditionally renders the loader", () => {
    renderLoadMoreButton(true, true);

    const loader = screen.getByTestId("load-more-loader");
    expect(loader).toBeInTheDocument();
  });
  it("conditionally renders the active button", () => {
    renderLoadMoreButton(false, true);

    const button = screen.getByTestId("action-button");
    expect(button).toBeInTheDocument();
  });
  it("calls the onClick when button is clicked", () => {
    renderLoadMoreButton(false, true);

    const button = screen.getByTestId("action-button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(onClick).toBeCalledTimes(1);
  });
  it("sets the button disabled attribute correctly", () => {
    renderLoadMoreButton(false, false);
    const button = screen.getByTestId("action-button");
    expect(button).toBeDisabled();
  });

  it("hides the component on when there is no next page", () => {
    renderLoadMoreButton(false, false);

    const container = screen.getByTestId("load-more-container");
    expect(container).toBeInTheDocument();

    expect(container).toHaveClass("opacity-0 scale-0 pointer-events-none");
    expect(container).toHaveAttribute("aria-hidden", "true");
  });

  it("sets aria-busy aria-hidden correctly", () => {
    renderLoadMoreButton(true, true);
    const container = screen.getByTestId("load-more-container");

    expect(container).toHaveAttribute("aria-busy", "true");
    expect(container).toHaveAttribute("aria-hidden", "false");
  });

  it("renders a custom loader if provided", () => {
    const CustomLoader = () => <div data-testid="custom-loader" />;
    render(
      <LoadMoreButton
        isFetching={true}
        hasNextPage={true}
        onClick={onClick}
        Loader={<CustomLoader />}
      />
    );

    expect(screen.getByTestId("custom-loader")).toBeInTheDocument();
    expect(screen.queryByTestId("load-more-loader")).not.toBeInTheDocument();
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });
});
