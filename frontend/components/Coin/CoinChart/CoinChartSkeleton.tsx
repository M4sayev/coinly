import { cn } from "@/utils/utils";

function CoinChartSkeleton() {
  return (
    <div
      className={cn(
        "flex flex-col justify-around relative",
        "bg-secondary-900 rounded-lg min-h-75 h-full",
        "shadow-lg animate-pulse",
        "[&_span]:bg-secondary-300 [&_span]:rounded  [&_span]:inline-block ",
      )}
    >
      {Array(8)
        .fill(0)
        .map((_, index) => {
          return (
            <div
              key={`char-skeleton-${index}`}
              className="flex items-center gap-5"
            >
              <span className="w-20 h-4 "></span>
              <span className="w-full h-1 "></span>
            </div>
          );
        })}
      <div className="flex justify-around pl-20">
        <span className="w-12 h-3 "></span>
        <span className="w-12 h-3 "></span>
        <span className="w-12 h-3 "></span>
        <span className="w-12 h-3 "></span>
        <span className="w-12 h-3 "></span>
        <span className="w-12 h-3 "></span>
      </div>
    </div>
  );
}

export default CoinChartSkeleton;
