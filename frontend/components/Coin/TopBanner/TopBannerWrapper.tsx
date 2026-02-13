import { Coin, Currency } from "@/types/types";
import TopBannerSkeleton from "./TopBannerSkeleton";
import TopBanner from "./TopBanner";
import LoadingSR from "@/components/A11y/LoadingSR";

interface TopBannerWrapperProps {
  coin: any;
  isLoadingCoin: boolean;
  currency: Currency;
}
function TopBannerWrapper({
  coin,
  isLoadingCoin,
  currency,
}: TopBannerWrapperProps) {
  return (
    <div className="bg-secondary-900 rounded-lg mb-5 shadow-lg text-neutral-100">
      {isLoadingCoin ? (
        <>
          <TopBannerSkeleton />
          <LoadingSR text="loading coin data" />
        </>
      ) : (
        coin && (
          <TopBanner
            currentPrice={
              coin.market_data.current_price[currency.toLowerCase() ?? "btc"]
            }
            name={coin.name}
            symbol={coin.symbol}
            high24={coin.market_data.high_24h[currency.toLowerCase() ?? "btc"]}
            src={coin.image.large}
            currency={currency}
          />
        )
      )}
    </div>
  );
}

export default TopBannerWrapper;
