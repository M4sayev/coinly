import { cn, formatBigNumber, formatPercent } from "../../../utils/utils";
import type { Coin } from "../../../services/coinsApi";
import { TrendingDown, TrendingUp } from "lucide-react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { currencyToSign } from "../../../constants/currencies";
import TrailWrapper from "../TrailWrapper/TrailWrapper";
import { Link } from "react-router-dom";

function CoinCard({
  id,
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

  return (
    <Link to={`/coin/${id}`}>
      <article
        className={cn(
          "bg-[var(--color-secondary-600)] rounded-xl text-[var(--color-neutral-100)]",
          "cursor-pointer border border-[var(--color-accent-dblue)] shadow-lg"
        )}
        aria-labelledby="coin-card-name"
        data-testid="coin-card"
      >
        <TrailWrapper size="800" className="p-4">
          <header className="flex gap-3 items-center mb-3">
            <img className="w-10 h-10" src={image} alt={`${name} icon`} />
            <div className="w-full overflow-hidden">
              <h3
                id="coin-card-name"
                className="text-lg sm:text-xl font-mono font-bold text-nowrap"
              >
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
              <span
                data-testid="coin-card-currency"
                className="text-[var(--color-neutral-200)] ml-1 "
              >
                {currencyToSign(currency)}
              </span>
            </h4>
            <span
              data-testid="price-change-percentage"
              className={`md:text-lg flex items-center gap-1 lg:self-start ${
                isTrending ? "text-green-accent" : "text-red-accent"
              }`}
            >
              <TrendingIcon aria-hidden="true" className="w-5 h-5" />
              {formatPercent(parseFloat(price_change_percentage_24h))}
            </span>
          </section>
          <footer className="flex justify-between">
            <span className="text-[var(--color-neutral-200)] text-xs capitalize">
              market cap
            </span>
            <span className="text-xs font-bold">
              {formatBigNumber(market_cap)}
            </span>
          </footer>
        </TrailWrapper>
      </article>
    </Link>
  );
}

export default CoinCard;
