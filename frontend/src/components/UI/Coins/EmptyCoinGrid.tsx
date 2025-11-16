import { HandCoins } from "lucide-react";

function EmptyCoinGrid() {
  return (
    <div
      className="flex flex-col items-center gap-4 text-[var(--color-accent-dblue)] py-5"
      aria-label="No coins in the grid"
      role="status"
      aria-live="polite"
    >
      <HandCoins className="w-12 h-12" aria-hidden="true" />
      <span className="text-2xl">No coins for now</span>
    </div>
  );
}

export default EmptyCoinGrid;
