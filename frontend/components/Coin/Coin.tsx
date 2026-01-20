"use client";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetOneCoinPriceQuery, useGetOneCoinQuery } from "@/state/coinsApi";
import CoinChart from "./CoinChart/CoinChart";
import TopBannerWrapper from "./TopBanner/TopBannerWrapper";

function CoinClient({ coinID }: { coinID: string }) {
  const currency = useAppSelector((state) => state.ui.currency);

  const { data, isLoading } = useGetOneCoinPriceQuery({ coinID, currency });
  const { data: coin, isLoading: isLoadingCoin } = useGetOneCoinQuery({
    coinID,
    currency,
  });

  console.log(data);
  console.log(coin);

  if (!coin && !isLoadingCoin) return <div>coin not found</div>;

  return (
    <div className="max-7xl mx-auto py-10 max-w-6xl">
      <TopBannerWrapper
        coin={coin}
        currency={currency}
        isLoadingCoin={isLoadingCoin}
      />
      <div className="h-20 w-[70%] bg-secondary-900 rounded-lg">
        <CoinChart coinID={coinID} />
      </div>
      <div className="w-1/2 h-1/2 bg-color-secondary-900 rounded-lg">
        {/* descriotion box */}
      </div>
    </div>
  );
}

export default CoinClient;
