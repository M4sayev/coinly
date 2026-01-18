"use client";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetOneCoinPriceQuery, useGetOneCoinQuery } from "@/state/coinsApi";
import TopBanner from "./TopBanner/TopBanner";
import { createInstance } from "@testing-library/user-event/dist/cjs/setup/setup.js";
import { Coin } from "@/types/types";

function CoinClient({ coinID }: { coinID: string }) {
  const currency = useAppSelector((state) => state.ui.currency);

  const { data } = useGetOneCoinPriceQuery({ coinID, currency });
  const { data: coin } = useGetOneCoinQuery({ coinID, currency });

  console.log(data);
  console.log(coin);

  if (!coin) return;
  const { image, current_price, name, symbol, high_24h } = coin[0];

  return (
    <div className="max-7xl mx-auto py-10 max-w-6xl">
      <div className="bg-secondary-900 rounded-lg mb-5 text-neutral-100">
        <TopBanner
          currentPrice={current_price}
          name={name}
          symbol={symbol}
          high24={high_24h}
          src={image}
          currency={currency}
        />
      </div>
      <div className="h-20 w-[70%] bg-secondary-900 rounded-lg"></div>
      <div className="w-1/2 h-1/2 bg-color-secondary-900 rounded-lg"></div>
    </div>
  );
}

export default CoinClient;
