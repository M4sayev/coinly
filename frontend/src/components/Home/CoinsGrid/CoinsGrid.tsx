import CoinCard from "../CoinCard/CoinCard";
import { cn } from "../../../utils/utils";
import { useGetCoinsInfiniteQuery } from "../../../services/coinsApi";
import { useAppSelector } from "../../../hooks/reduxHooks";
import ActionButton from "../../UI/Buttons/ActionButton";
import { BeatLoader } from "react-spinners";
import EmptyGrid from "./EmptyGrid";
import Error from "../../UI/Api/Error";
import Loader from "../../UI/Api/Loader";

interface CoinsGridProps {
  searchQuery: string;
}

function CoinsGrid({ searchQuery }: CoinsGridProps) {
  const currency = useAppSelector((state) => state.ui.currency);

  const { data, isError, error, isLoading, fetchNextPage, isFetching } =
    useGetCoinsInfiniteQuery({
      currency,
      search: searchQuery,
    });

  const allResults = data?.pages.flat() ?? [];

  const hasNextPage = data?.pages[data.pages.length - 1]?.length === 45;

  const handleNextPage = async () => {
    await fetchNextPage();
  };

  if (isError)
    return <Error error={error}>Oopsss..... something went wrong</Error>;

  if (isLoading) return <Loader isLoading={isLoading} />;

  return (
    <>
      {!allResults.length ? (
        <EmptyGrid searchQuery={searchQuery} />
      ) : (
        <>
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
            className={`flex justify-center transition-all ${
              !hasNextPage
                ? "opacity-0 scale-0 pointer-events-none"
                : "opacity-100 scale-100"
            }`}
            aria-busy={isFetching}
            aria-live="polite"
            aria-hidden={!hasNextPage}
          >
            {isFetching ? (
              <BeatLoader color="#1e3a8a" />
            ) : (
              <ActionButton
                variant="secondary"
                onClick={() => handleNextPage()}
              >
                Load More
              </ActionButton>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default CoinsGrid;
