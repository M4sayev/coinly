import CoinCard from "../CoinCard/CoinCard";
import { cn } from "../../../utils/utils";
import { useGetCoinsQuery } from "../../../services/coinsApi";
import { useAppSelector } from "../../../hooks/reduxHooks";

function CoinsGrid() {
  const currency = useAppSelector((state) => state.ui.currency);
  const { data, error, isLoading } = useGetCoinsQuery(currency);

  let newData: typeof data;
  if (!isLoading) newData = data?.slice(0, 20);

  return (
    <div className="pb-10">
      <div
        className={cn(
          "font-roboto m-auto grid gap-4 justify-center w-[90%] max-w-[400px] grid-cols-1",
          "md:grid-cols-[repeat(auto-fill,_minmax(300px,_300px))] md:px-10 md:max-w-none",
          "lg:grid-cols-[repeat(auto-fill,_minmax(360px,_360px))] "
        )}
      >
        {isLoading
          ? "loading"
          : newData?.map((coin) => <CoinCard key={coin.id} {...coin} />)}
      </div>
    </div>
  );
}

export default CoinsGrid;
