"use client";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetOneCoinPriceQuery } from "@/state/coinsApi";

function CoinClient({ coinID }: { coinID: string }) {
  const currency = useAppSelector((state) => state.ui.currency);

  const { data } = useGetOneCoinPriceQuery({ coinID, currency });

  console.log(data);

  return (
    <div className="max-7xl mx-auto py-10 max-w-6xl">
      <div className="h-20 bg-secondary-900 rounded-lg mb-5 text-neutral-100">
        {/* <Image src={}> </Image> */}
        {coinID}
      </div>
      <div className="h-20 w-[70%] bg-secondary-900 rounded-lg"></div>
      <div className="w-1/2 h-1/2 bg-color-secondary-900 rounded-lg"></div>
    </div>
  );
}

export default CoinClient;
