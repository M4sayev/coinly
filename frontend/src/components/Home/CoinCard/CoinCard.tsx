import type { MouseEvent } from "react";
import { cn, formatBigNumber } from "../../../utils/utils";
import type { Coin } from "../../../services/coinsApi";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { currencyToSign } from "../../../constants/currencies";

function CoinCard({
  symbol,
  current_price,
  image,
  name,
  price_change_percentage_24h,
  market_cap,
}: Coin) {
  const isTrending = Number(price_change_percentage_24h) > 0;
  const TrendingIcon = isTrending ? TrendingUp : TrendingDown;

  const currency = useAppSelector((state) => state.ui.currency);

  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <article
      onMouseMove={handleOnMouseMove}
      className={cn(
        "card",
        "relative bg-[var(--color-secondary-600)] rounded-xl",
        " w-full cursor-pointer border border-[var(--color-accent-dblue)] shadow-lg overflow-hidden",
        "before:absolute before:top-0 before:h-full before:w-full before:z-0",
        "before:left-0 before:bg-[image:var(--card-gradient)] before:content-[''] before:opacity-0 before:transition-all before:duration-300",
        "hover:before:opacity-100 text-[var(--color-neutral-100)] p-4"
      )}
    >
      <header className="flex gap-3 items-center mb-3">
        <img className="w-10 h-10" src={image} alt={`${name} icon`} />
        <div className="w-full overflow-hidden">
          <h3 className="text-lg sm:text-xl font-mono font-bold text-nowrap">
            {name}
          </h3>
          <span className="text-[var(--color-neutral-200)] text-xs ">
            {symbol.toUpperCase()}
          </span>
        </div>
      </header>
      <section className="flex justify-between mb-6 lg:flex-col lg:items-center">
        <h4 className="font-extrabold text-lg md:text-2xl font-mono">
          {current_price}
          <span className="text-[var(--color-neutral-200)] ml-1 ">
            {currencyToSign(currency)}
          </span>
        </h4>
        <span
          className={`md:text-lg flex items-center gap-1 lg:self-start ${
            isTrending ? "text-green-accent" : "text-red-accent"
          }`}
        >
          <TrendingIcon aria-hidden="true" className="w-5 h-5" />
          {parseFloat(price_change_percentage_24h).toFixed(2)}%
        </span>
      </section>
      <footer className="flex justify-between">
        <span className="text-[var(--color-neutral-200)] text-xs capitalize">
          market cap
        </span>
        <span className="text-xs font-bold">{formatBigNumber(market_cap)}</span>
      </footer>
    </article>
  );
}

export default CoinCard;
