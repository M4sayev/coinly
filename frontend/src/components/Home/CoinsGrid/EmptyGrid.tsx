import { SearchX } from "lucide-react";
import React from "react";

interface EmptyGridProps {
  searchQuery: string;
}

function EmptyGrid({ searchQuery }: EmptyGridProps) {
  return (
    <div
      className="flex flex-col items-center gap-4 text-[var(--color-accent-dblue)] py-5"
      aria-label={`No matches found with identifier ${searchQuery}`}
    >
      <SearchX aria-hidden="true" className="w-15 h-15" />
      <span className="text-2xl">Not matches for "{searchQuery}"</span>
    </div>
  );
}

export default EmptyGrid;
