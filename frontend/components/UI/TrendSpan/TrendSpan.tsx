import { formatPercent } from "@/utils/utils";
import { TrendingDown, TrendingUp } from "lucide-react";

function TrendSpan({ value }: { value: number }) {
  const isTrending = Number(value) > 0;
  const TrendingIcon = isTrending ? TrendingUp : TrendingDown;

  return (
    <span
      data-testid="price-change-percentage"
      className={`md:text-lg flex items-center gap-1 lg:self-start ${
        isTrending ? "text-green-accent" : "text-red-accent"
      }`}
    >
      <TrendingIcon aria-hidden="true" className="w-5 h-5" />
      {formatPercent(value)}
    </span>
  );
}

export default TrendSpan;
