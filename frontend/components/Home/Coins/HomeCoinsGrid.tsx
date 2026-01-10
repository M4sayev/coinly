import { useGetCoinsInfiniteQuery } from "../../../state/coinsApi";
import { useAppSelector } from "../../../hooks/reduxHooks";
import Error from "../../UI/Api/Error";
import LoadMoreButton from "../../UI/Buttons/LoadMoreButton";
import { TriangleAlert } from "lucide-react";
import EmptyCoinGrid from "../../UI/Coins/EmptyCoinGrid";
import SkeletonGrid from "../../UI/Coins/SkeletonGrid";
import CoinGrid from "../../UI/Coins/CoinGrid";
import CrossedDollar from "../../../assets/crossed-dollar.svg";

interface HomeCoinsGridProps {
  searchQuery: string;
}

function HomeCoinsGrid({ searchQuery }: HomeCoinsGridProps) {
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
    return (
      <Error error={error}>
        <div className="flex flex-col items-center py-15 gap-4">
          <TriangleAlert aria-hidden="true" className="w-10 h-10" />
          <span className=" text-lg text-center  max-w-1/2">
            We couldn&apos;t connect to the server. Please check your connection
            and try again.
          </span>
        </div>
      </Error>
    );

  if (isLoading) return <SkeletonGrid />;

  if (!allResults || !allResults.length)
    return (
      <EmptyCoinGrid label={`No matches found with identifier ${searchQuery}`}>
        <div className="flex flex-col items-center pb-6 gap-4">
          <CrossedDollar aria-hidden="true" className="w-22 h-22" />
          <span className=" text-lg text-center">
            No matches for &quot;{searchQuery}&quot;
          </span>
        </div>
      </EmptyCoinGrid>
    );

  return (
    <>
      <CoinGrid coins={allResults} />
      <LoadMoreButton
        isFetching={isFetching}
        hasNextPage={hasNextPage}
        onClick={handleNextPage}
        ariaLabel="Load more crypto coins cards"
        Loader={<SkeletonGrid count={10} />}
      />
    </>
  );
}

export default HomeCoinsGrid;
