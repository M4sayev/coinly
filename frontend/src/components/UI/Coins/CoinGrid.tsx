import { HandCoins } from "lucide-react";
import type { Coin } from "../../../services/coinsApi";
import { cn } from "../../../utils/utils";
import CoinCard from "./CoinCard";
import EmptyCoinGrid from "./EmptyCoinGrid";

interface CoinGridProps {
  coins: Coin[];
}
function CoinGrid({ coins }: CoinGridProps) {
  if (!coins.length)
    return (
      <EmptyCoinGrid label="No coins in the grid">
        <div className="flex flex-col items-center py-10 gap-4">
          <HandCoins className="w-10 h-10" aria-hidden="true" />
          <span className="text-lg">No coins for now</span>
        </div>
      </EmptyCoinGrid>
    );
  return (
    <ul
      aria-label="List of crypto coin cards"
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
