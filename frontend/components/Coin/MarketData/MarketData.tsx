import TrendSpan from "@/components/UI/TrendSpan/TrendSpan";
import { currencyToSign } from "@/constants/currencies";
import { useAppSelector } from "@/hooks/reduxHooks";
import { formatPercent } from "@/utils/utils";
import MarketDataSkeleton from "./MarketDataSkeleton";
import LoadingSR from "@/components/A11y/LoadingSR";

interface MarketDataProps {
  marketCap: number;
  totalSupply: number;
  athDate: string;
  ath: number;
  athPercentage: number;
  isLoadingCoin: boolean;
}

function MarketData({
  marketCap,
  athPercentage,
  athDate,
  ath,
  isLoadingCoin,
}: MarketDataProps) {
  const currency = useAppSelector((state) => state.ui.currency);
  const sign = currencyToSign(currency);

  if (isLoadingCoin)
    return (
      <>
        <LoadingSR text="loading the market data of the coin" />
        <MarketDataSkeleton />
      </>
    );

  return (
    <section className="p-5 md:p-10 flex-1 bg-(image:--gradient-bg) rounded-lg text-neutral-100 ">
      <h2 className="mb-2 text-lg">Market Stats</h2>
      <ul className="flex flex-col gap-1 justify-evenly">
        <li className="flex justify-between items-center gap-2">
          <span className="text-sm text-neutral-200">Market Cap</span>
          <span className="font-bold text-accent">{`${sign} ${marketCap}`}</span>
        </li>
        <li className="flex justify-between items-center gap-2">
          <span className="text-sm text-neutral-200">All-Time High</span>
          <span className="font-bold text-accent">{`${sign} ${ath}`}</span>
        </li>
        <li className="flex justify-between items-center gap-2">
          <span className="text-sm text-neutral-200">ATH Date</span>
          <time dateTime={athDate} className="font-bold text-neutral-500">
            {new Date(athDate).toDateString()}
          </time>
        </li>
        <li className="flex justify-between items-center gap-2">
          <span className="text-sm text-neutral-200">ATH Percentage</span>
          <TrendSpan value={athPercentage} />
        </li>
      </ul>
    </section>
  );
}

export default MarketData;
