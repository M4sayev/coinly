import { cn } from "../../../utils/utils";

interface SkeletonGridProps {
  count?: number;
}

function SkeletonGrid({ count = 45 }: SkeletonGridProps) {
  const items = Array.from({ length: count }, (_, i) => i);
  return (
    <ul
      data-testid="skeleton-loader"
      role="presentation"
      aria-hidden="true"
      className={cn(
        "font-roboto mx-auto mb-5 grid gap-4 justify-center w-[90%] max-w-[400px] grid-cols-1",
        "md:grid-cols-[repeat(auto-fill,_minmax(300px,_300px))] md:px-10 md:max-w-none",
        "lg:grid-cols-[repeat(auto-fill,_minmax(360px,_360px))] "
      )}
    >
      {items.map((item) => {
        return (
          <li key={`Skeleton-item-${item}`}>
            <div
              className={cn(
                "p-5 bg-[var(--color-secondary-600)] rounded-xl text-[var(--color-neutral-100)]",
                "border border-[var(--color-accent-dblue)] shadow-lg animate-pulse",
                "[&_span]:bg-[#1e212833] [&_span]:rounded  [&_span]:inline-block "
              )}
            >
              <div className="flex gap-3 items-center mb-3">
                <span className="w-12 h-11 [&_span]:animate-pulse"></span>
                <div className="w-full overflow-hidden flex flex-col gap-2">
                  <span className="w-1/3 h-5.5"></span>
                  <span className="w-1/7 h-3"></span>
                </div>
              </div>
              <div className="flex justify-between mb-6 lg:flex-col lg:items-center">
                <span className="w-[60%] h-7 mt-1 mb-3"></span>
                <span className="w-1/4 h-6 lg:self-start"></span>
              </div>
              <div className="flex justify-between">
                <span className="w-1/3 h-3"></span>
                <span className="w-1/8 h-3"></span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default SkeletonGrid;
