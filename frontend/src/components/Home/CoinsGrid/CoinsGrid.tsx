import CoinCard from "../CoinCard/CoinCard";
import { cn } from "../../../utils/utils";
import { useGetCoinsInfiniteQuery } from "../../../services/coinsApi";
import { useAppSelector } from "../../../hooks/reduxHooks";
import ActionButton from "../../UI/ActionButton";
import { BeatLoader, ClipLoader } from "react-spinners";

interface CoinsGridProps {
  searchQuery: string;
}

function CoinsGrid({ searchQuery }: CoinsGridProps) {
  const currency = useAppSelector((state) => state.ui.currency);
  const { data, isLoading, fetchNextPage, isFetching } =
    useGetCoinsInfiniteQuery({
      currency,
      search: searchQuery,
    });

  const allResults = data?.pages.flat() ?? [];

  const handleNextPage = async () => {
    await fetchNextPage();
  };

  if (isLoading && !data) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="text-[var(--color-accent-dblue)] font-mono grid place-items-center h-1/2"
      >
        <ClipLoader color="#1e3a8a" loading={isLoading} />
      </div>
    );
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
      <div
        className="flex justify-center"
        aria-busy={isFetching}
        aria-live="polite"
      >
        {isFetching ? (
          <BeatLoader color="#1e3a8a" />
        ) : (
          <ActionButton variant="secondary" onClick={() => handleNextPage()}>
            Load More
          </ActionButton>
        )}
      </div>
    </div>
  );
}

export default CoinsGrid;
