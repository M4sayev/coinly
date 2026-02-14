"use client";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetOneCoinQuery } from "@/state/coinsApi";
import CoinChart from "./CoinChart/CoinChart";
import TopBannerWrapper from "./TopBanner/TopBannerWrapper";
import CoinDescription from "./Description/CoinDescription";
import MarketData from "./MarketData/MarketData";
import Details from "./Details/Details";

function CoinClient({ coinID }: { coinID: string }) {
  const currency = useAppSelector((state) => state.ui.currency);

  const { data: coin, isLoading: isLoadingCoin } = useGetOneCoinQuery({
    coinID,
    currency,
  });

  if (!coin && !isLoadingCoin) return <div>coin not found</div>;

  return (
    <div className="max-7xl mx-auto py-10 max-w-6xl grid gap-5">
      <TopBannerWrapper
        coin={coin}
        currency={currency}
        isLoadingCoin={isLoadingCoin}
      />
      <div className="flex gap-5 flex-col md:flex-row items-stretch">
        <div className="min-h-90 p-5 md:p-10 flex-3 bg-(image:--gradient-bg) rounded-lg relative">
          <CoinChart coinID={coinID} currency={currency} />
        </div>
        <div className="flex-2 flex flex-col gap-5">
          <MarketData
            athDate={
              coin?.market_data.ath_date[currency.toLowerCase() ?? "btc"]
            }
            athPercentage={
              coin?.market_data.ath_change_percentage[
                currency.toLowerCase() ?? "btc"
              ]
            }
            totalSupply={coin?.market_data.total_supply}
            marketCap={
              coin?.market_data.market_cap[currency.toLowerCase() ?? "btc"]
            }
            ath={coin?.market_data.ath[currency.toLowerCase() ?? "btc"]}
          />
          <Details categories={coin?.categories ?? []} />
        </div>
      </div>

      <article className=" p-5 md:p-10 flex-2 bg-(image:--gradient-bg) rounded-lg text-neutral-100 ">
        <CoinDescription desc={coin?.description.en ?? "coin description"} />
      </article>
    </div>
  );
}

export default CoinClient;
