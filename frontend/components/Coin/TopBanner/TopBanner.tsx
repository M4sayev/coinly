import { currencyToSign } from "@/constants/currencies";
import { Currency } from "@/types/types";
import { formatPercent } from "@/utils/utils";
import Image from "next/image";

interface TopBannerProps {
  src: string;
  name: string;
  symbol: string;
  currentPrice: number;
  high24: number;
  currency: Currency;
}
function TopBanner({
  src,
  name,
  currentPrice,
  high24,
  symbol,
  currency,
}: TopBannerProps) {
  const isHigh = high24 > 0;
  return (
    <section className="flex justify-between items-center py-2 md:py-5 px-4 md:px-5">
      <div className="flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          className="w-10 h-10"
          src={src}
          alt={`${name} icon`}
        />
        <div className="w-full overflow-hidden flex flex-col justify-between gap-1">
          <h3 className="text-lg sm:text-xl md:text-2xl font-mono font-bold text-nowrap">
            {name}
          </h3>
          <span className="text-neutral-200 text-xs ">
            {symbol.toUpperCase()}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end justify-between">
        <p className="text-accent font-extrabold text-lg md:text-2xl font-mono">
          <span className="mr-2 ">{currencyToSign(currency)}</span>
          {currentPrice}
        </p>
        <span
          className={`text-xs flex font-bold items-center gap-1  ${
            isHigh ? "text-green-accent" : "text-red-accent"
          }`}
        >
          {`${isHigh ? "+" : ""}${formatPercent(high24)} (24H)`}
        </span>
      </div>
    </section>
  );
}

export default TopBanner;
