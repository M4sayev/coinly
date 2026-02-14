import LoadingSR from "@/components/A11y/LoadingSR";
import { useState } from "react";
import CoinDescriptionSkeleton from "./CoinDescriptionSkeleton";

function CoinDescription({
  desc,
  isLoading,
}: {
  desc: string;
  isLoading: boolean;
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  if (isLoading)
    return (
      <>
        <LoadingSR text="loading the coin description" />
        <CoinDescriptionSkeleton />
      </>
    );
  return (
    <>
      <h2 className="mb-2 text-lg">Description</h2>
      <p className="text-neutral-200">
        {isCollapsed ? `${desc.slice(0, 480)}...` : desc}
      </p>
      <button
        className="underline"
        type="button"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        show more
      </button>
    </>
  );
}

export default CoinDescription;
