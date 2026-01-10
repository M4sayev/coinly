import type { PropsWithChildren } from "react";

interface EmptyCoinGridProps extends PropsWithChildren {
  label?: string;
}

function EmptyCoinGrid({ label, children }: EmptyCoinGridProps) {
  return (
    <div
      data-testid="empty-coin-grid"
      className="flex flex-col items-center gap-4 text-accent-dblue text-shadow-lg py-5"
      aria-label={label}
      role="status"
      aria-live="polite"
    >
      {children}
    </div>
  );
}

export default EmptyCoinGrid;
