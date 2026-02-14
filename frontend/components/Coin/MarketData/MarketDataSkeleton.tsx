import { cn } from "@/utils/utils";

function MarketDataSkeleton() {
  return (
    <div
      className={cn(
        "p-5 md:p-10 flex-1 bg-(image:--gradient-bg) rounded-lg text-neutral-100 gap-5",
        "shadow-lg ",
        "[&_span]:bg-secondary-600 [&_span]:rounded  [&_span]:inline-block ",
      )}
    >
      <span className="mb-2 text-lg h-5 w-20"></span>
      <div className="flex flex-col gap-1 justify-evenly h-[80%]">
        <div className="flex justify-between items-center gap-2">
          <span className="text-sm text-neutral-200 h-4 w-15"></span>
          <span className="font-bold text-accent h-4 w-20"></span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-sm text-neutral-200 h-4 w-15"></span>
          <span className="font-bold text-accent h-4 w-20"></span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-sm text-neutral-200 h-4 w-15"></span>
          <span className="font-bold text-neutral-500 h-4 w-20"></span>
        </div>
        <div className="flex justify-between items-center gap-2">
          <span className="text-sm h-4 w-15"></span>
          <span className="h-4 w-20"></span>
        </div>
      </div>
    </div>
  );
}

export default MarketDataSkeleton;
