"use client";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetOneCoinQuery } from "@/state/coinsApi";
import CoinChart from "./CoinChart/CoinChart";
import TopBannerWrapper from "./TopBanner/TopBannerWrapper";
import CoinDescription from "./Description/CoinDescription";

function CoinClient({ coinID }: { coinID: string }) {
  const currency = useAppSelector((state) => state.ui.currency);

  const { data: coin, isLoading: isLoadingCoin } = useGetOneCoinQuery({
    coinID,
    currency,
  });

  console.log(coin);

  if (!coin && !isLoadingCoin) return <div>coin not found</div>;

  return (
    <div className="max-7xl mx-auto py-10 max-w-6xl">
      <TopBannerWrapper
        coin={coin}
        currency={currency}
        isLoadingCoin={isLoadingCoin}
      />
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="min-h-90 max-h-110 p-5 md:p-10 flex-2 bg-secondary-900 rounded-lg">
          <CoinChart coinID={coinID} currency={currency} />
        </div>
        <article className=" p-5 md:p-10 flex-1 bg-secondary-900 rounded-lg text-neutral-100 ">
          <CoinDescription desc={coin?.description.en ?? "coin description"} />
        </article>
      </div>
      <div className="w-1/2 h-1/2 bg-color-secondary-900 rounded-lg">
        {/* descriotion box */}
      </div>
    </div>
  );
}

export default CoinClient;
