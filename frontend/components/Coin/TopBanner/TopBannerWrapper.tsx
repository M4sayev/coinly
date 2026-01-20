import { Coin, Currency } from "@/types/types";
import TopBannerSkeleton from "./TopBannerSkeleton";
import TopBanner from "./TopBanner";
import LoadingSR from "@/components/A11y/LoadingSR";

interface TopBannerWrapperProps {
  coin: Coin[] | undefined;
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
            currentPrice={coin[0].current_price}
            name={coin[0].name}
            symbol={coin[0].symbol}
            high24={coin[0].high_24h}
            src={coin[0].image}
            currency={currency}
          />
        )
      )}
    </div>
  );
}

export default TopBannerWrapper;
