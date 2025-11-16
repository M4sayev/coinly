import type { Coin } from "../../../services/coinsApi";
import { cn } from "../../../utils/utils";
import CoinCard from "./CoinCard";
import EmptyCoinGrid from "./EmptyCoinGrid";

interface CoinGridProps {
  coins: Coin[];
}
function CoinGrid({ coins }: CoinGridProps) {
  if (!coins.length) return <EmptyCoinGrid />;
  return (
    <ul
      className={cn(
        "font-roboto mx-auto mb-5 grid gap-4 justify-center w-[90%] max-w-[400px] grid-cols-1",
        "md:grid-cols-[repeat(auto-fill,_minmax(300px,_300px))] md:px-10 md:max-w-none",
        "lg:grid-cols-[repeat(auto-fill,_minmax(360px,_360px))] "
      )}
    >
      {coins.map((coin) => (
        <li key={coin.id}>
          <CoinCard {...coin} />
        </li>
      ))}
    </ul>
  );
}

export default CoinGrid;
