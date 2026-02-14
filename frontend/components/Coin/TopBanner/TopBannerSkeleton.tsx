import { cn } from "@/utils/utils";

function TopBannerSkeleton() {
  return (
    <div
      data-testid="top-banner-skeleton"
      className={cn(
        "py-3 md:py-6 px-4 md:px-5 rounded-lg",
        "shadow-lg",
        "[&_span]:bg-secondary-600 [&_span]:rounded  [&_span]:inline-block ",
      )}
    >
      <div className="flex gap-3 items-center">
        <span className="w-10 h-10 [&_span]:animate-pulse"></span>
        <div className="w-full overflow-hidden flex flex-col gap-2">
          <div className="flex justify-between">
            <span className="w-1/8 h-5"></span>
            <span className="w-1/8 h-5"></span>
          </div>
          <div className="flex justify-between">
            <span className="w-1/11 h-3"></span>
            <span className="w-1/5 h-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBannerSkeleton;
