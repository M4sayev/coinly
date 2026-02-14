import { render, screen } from "@testing-library/react";
import TopBannerWrapper from "../TopBannerWrapper";
import { mockCoin } from "@/test/mockData";

describe("TopBannerWrapper", () => {
  it("renders skeleton loading and sr when is loading true", () => {
    render(
      <TopBannerWrapper
        coin={[mockCoin]}
        currency="btc"
        isLoadingCoin={true}
      />,
    );

    expect(screen.getByTestId("loading-state-sr")).toBeInTheDocument();
    expect(screen.getByTestId("top-banner-skeleton")).toBeInTheDocument();
  });
  it("renders coin banner", () => {
    render(
      <TopBannerWrapper
        coin={[mockCoin]}
        currency="btc"
        isLoadingCoin={false}
      />,
    );
    expect(screen.getByTestId("top-banner")).toBeInTheDocument();
  });
});
