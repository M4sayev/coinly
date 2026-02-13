import { useState } from "react";

function CoinDescription({ desc }: { desc: string }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
      <h2 className="mb-2 text-lg">Description</h2>
      <p className="text-neutral-200">
        {isCollapsed ? `${desc.slice(0, 480)}...` : desc}
      </p>
      <button type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
        show more
      </button>
    </>
  );
}

export default CoinDescription;
