import { cn } from "@/utils/utils";

function DetailsSkeleton() {
  return (
    <div
      className={cn(
        "p-5 md:p-10 flex-1 bg-(image:--gradient-bg) rounded-lg text-neutral-100 gap-5",
        "shadow-lg overflow-hidden",
        "[&_span]:bg-secondary-600 [&_span]:rounded  [&_span]:inline-block ",
      )}
    >
      <span className="mb-2 text-lg h-6 w-20"></span>
      <div className="flex flex-col gap-1 justify-around h-[80%]">
        <span className="text-sm text-neutral-200 h-5 w-20"></span>
        <span className="text-sm text-neutral-200 h-5 w-40"></span>
        <span className="text-sm text-neutral-200 h-5 w-55"></span>
        <span className="text-sm text-neutral-200 h-5 w-30"></span>
        <span className="text-sm text-neutral-200 h-5 w-43"></span>
      </div>
    </div>
  );
}

export default DetailsSkeleton;
