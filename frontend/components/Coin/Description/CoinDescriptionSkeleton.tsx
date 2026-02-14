import { cn } from "@/utils/utils";

function CoinDescriptionSkeleton() {
  return (
    <div
      className={cn(
        "flex-1 bg-(image:--gradient-bg) rounded-lg text-neutral-100 gap-5",
        "shadow-lg overflow-hidden",
        "[&_span]:bg-secondary-600 [&_span]:rounded  [&_span]:inline-block ",
      )}
    >
      <span className="mb-2 text-lg h-6 w-20"></span>
      <span className="text-sm text-neutral-200 h-5 w-full"></span>
      <span className="text-sm text-neutral-200 h-5 w-full"></span>
      <span className="text-sm text-neutral-200 h-5 w-full"></span>
      <span className="text-sm text-neutral-200 h-5 w-20"></span>
    </div>
  );
}

export default CoinDescriptionSkeleton;
