import CoinCard from "../CoinCard/CoinCard";
import { cn } from "../../../utils/utils";

function CoinsGrid() {
  return (
    <div className="pb-10">
      <div
        className={cn(
          "m-auto grid gap-4 justify-center w-[90%] max-w-[400px] grid-cols-1",
          "md:grid-cols-[repeat(auto-fill,_minmax(300px,_300px))] md:px-10 md:max-w-none",
          "lg:grid-cols-[repeat(auto-fill,_minmax(360px,_360px))] "
        )}
      >
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
        <CoinCard />
      </div>
    </div>
  );
}

export default CoinsGrid;
