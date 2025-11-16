import { useGetCoinsInfiniteQuery } from "../../../services/coinsApi";
import { useAppSelector } from "../../../hooks/reduxHooks";
import EmptySearch from "./EmptySearch";
import Error from "../../UI/Api/Error";
import Loader from "../../UI/Api/Loader";
import CoinGrid from "../../UI/Coins/CoinGrid";
import LoadMoreButton from "../../UI/Buttons/LoadMoreButton";

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
    return <Error error={error}>Oopsss..... something went wrong</Error>;

  if (isLoading) return <Loader isLoading={isLoading} />;

  if (!allResults.length) return <EmptySearch searchQuery={searchQuery} />;

  return (
    <>
      <CoinGrid coins={allResults} />
      <LoadMoreButton
        isFetching={isFetching}
        hasNextPage={hasNextPage}
        onClick={handleNextPage}
      />
    </>
  );
}

export default HomeCoinsGrid;
