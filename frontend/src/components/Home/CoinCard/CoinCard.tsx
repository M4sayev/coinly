import type { MouseEvent } from "react";
import { cn } from "../../../utils/utils";
import type { Coin } from "../../../services/coinsApi";

function CoinCard({
  symbol,
  current_price,
  image,
  name,
  price_change_percentage_24h,
  market_cap,
}: Coin) {
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
        "relative bg-[var(--color-secondary-600)] rounded-md",
        "h-[250px] w-full cursor-pointer border border-[var(--color-accent-dblue)] shadow-lg overflow-hidden",
        "before:absolute before:top-0 before:h-full before:w-full before:z-0",
        "before:left-0 before:bg-[image:var(--card-gradient)] before:content-[''] before:opacity-0 before:transition-all before:duration-300",
        "hover:before:opacity-100 text-white"
      )}
    >
      <header>
        <img className="w-8 h-8" src={image} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{symbol}</p>
        </div>
      </header>
      <section>
        <div>{current_price}</div>
        <div>{price_change_percentage_24h}%</div>
      </section>
      <footer>
        <p>market cap</p>
        <div>{market_cap}</div>
      </footer>
    </article>
  );
}

export default CoinCard;
