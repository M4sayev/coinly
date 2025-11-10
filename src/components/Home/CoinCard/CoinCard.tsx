import type { MouseEvent } from "react";
import { cn } from "../../../utils/utils";

function CoinCard() {
  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };
  return (
    <div
      onMouseMove={handleOnMouseMove}
      className={cn(
        "card",
        "relative bg-[var(--color-secondary-600)] rounded-md",
        "h-[250px] w-full cursor-pointer border border-[var(--color-accent-dblue)] shadow-lg overflow-hidden",
        "before:absolute before:top-0 before:h-full before:w-full before:z-10",
        "before:left-0 before:bg-[image:var(--card-gradient)] before:content-[''] before:opacity-0 before:transition-all before:duration-300",
        "hover:before:opacity-100"
      )}
    ></div>
  );
}

export default CoinCard;
