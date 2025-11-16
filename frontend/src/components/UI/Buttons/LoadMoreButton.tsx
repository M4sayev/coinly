import ActionButton from "./ActionButton";
import SkeletonGrid from "../Coins/SkeletonGrid";

interface LoadMoreButtonProps {
  hasNextPage: boolean;
  isFetching: boolean;
  onClick: () => void;
  label?: string;
}

function LoadMoreButton({
  isFetching,
  hasNextPage,
  onClick,
  label = "Load More",
}: LoadMoreButtonProps) {
  return (
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
        <SkeletonGrid count={10} />
      ) : (
        <ActionButton variant="secondary" onClick={onClick}>
          {label}
        </ActionButton>
      )}
    </div>
  );
}

export default LoadMoreButton;
