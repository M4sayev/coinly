import { BeatLoader } from "react-spinners";
import ActionButton from "./ActionButton";

interface LoadMoreButtonProps {
  hasNextPage: boolean;
  isFetching: boolean;
  onClick: () => void;
  ariaLabel?: string;
  actionText?: string;
  Loader?: React.ReactNode;
}

function LoadMoreButton({
  isFetching,
  hasNextPage,
  onClick,
  ariaLabel = "Load More",
  actionText = "Load More",
  Loader = <BeatLoader data-testid="load-more-loader" aria-hidden="true" />,
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
      data-testid="load-more-container"
    >
      {isFetching ? (
        Loader
      ) : (
        <ActionButton
          variant="secondary"
          onClick={onClick}
          disabled={!hasNextPage}
          aria-label={ariaLabel}
        >
          {actionText}
        </ActionButton>
      )}
    </div>
  );
}

export default LoadMoreButton;
