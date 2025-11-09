import { CircleX, Search } from "lucide-react";
import { cn } from "../../../utils/utils";
import { type ChangeEvent } from "react";

interface CoinSearchBarProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

function CoinSearchBar({ value, onChange, onReset }: CoinSearchBarProps) {
  const isClearVisible = value ? true : false;
  return (
    <label className="relative block ">
      <Search
        className="absolute w-4 h-4 text-[var(--color-neutral-100)] top-1/2 left-2 -translate-y-1/2 opacity-60 lg:left-3"
        aria-hidden="true"
      />
      <input
        className={cn(
          "text-[var(--color-neutral-100)] text-xs px-4 pl-8 py-2 w-full shadow-lg",
          "border border-[var(--color-neutral-100)] rounded-md ",
          "sm:py-3 sm:text-sm lg:pl-9"
        )}
        type="text"
        name="cryptoSearch"
        aria-label="Search for a cryptocurrency"
        placeholder="Search for a cryptocurrency"
        value={value}
        onChange={onChange}
      />
      <button
        type="button"
        tabIndex={isClearVisible ? 0 : -1}
        className={cn(
          isClearVisible
            ? "opacity-full pointer-events-auto"
            : "opacity-0 pointer-events-none",
          "absolute top-1/2 right-3 -translate-y-1/2",
          "transition-all duration-200 ease-in"
        )}
        aria-label="Clear the searched cryptocurrency name"
        onClick={onReset}
      >
        <CircleX
          className="w-4 h-4 2 md:w-4.5 md:h-4.5 text-[var(--color-neutral-100)] opacity-60"
          aria-hidden="true"
        />
      </button>
    </label>
  );
}

export default CoinSearchBar;
