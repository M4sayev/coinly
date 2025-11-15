import CoinCard from "../CoinCard/CoinCard";
import { cn } from "../../../utils/utils";
import { useGetCoinsInfiniteQuery } from "../../../services/coinsApi";
import { useAppSelector } from "../../../hooks/reduxHooks";
import ActionButton from "../../UI/ActionButton";

function CoinsGrid() {
  const currency = useAppSelector((state) => state.ui.currency);
  const { data, isLoading, fetchNextPage } = useGetCoinsInfiniteQuery({
    currency,
  });

  const allResults = data?.pages.flat() ?? [];

  const handleNextPage = async () => {
    await fetchNextPage();
  };

  if (isLoading && !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul
        className={cn(
          "font-roboto mx-auto mb-5 grid gap-4 justify-center w-[90%] max-w-[400px] grid-cols-1",
          "md:grid-cols-[repeat(auto-fill,_minmax(300px,_300px))] md:px-10 md:max-w-none",
          "lg:grid-cols-[repeat(auto-fill,_minmax(360px,_360px))] "
        )}
      >
        {allResults.map((coin) => (
          <li key={coin.id}>
            <CoinCard {...coin} />
          </li>
        ))}
      </ul>
      <div className="flex justify-center">
        {
          <ActionButton variant="secondary" onClick={() => handleNextPage()}>
            load more
          </ActionButton>
        }
      </div>
    </div>
  );
}

export default CoinsGrid;
