import { SearchX } from "lucide-react";

interface EmptySearchProps {
  searchQuery: string;
}

function EmptySearch({ searchQuery }: EmptySearchProps) {
  return (
    <div
      className="flex flex-col items-center gap-4 text-[var(--color-accent-dblue)] py-5"
      aria-label={`No matches found with identifier ${searchQuery}`}
      role="status"
      aria-live="polite"
    >
      <SearchX aria-hidden="true" className="w-15 h-15" />
      <span className="text-2xl">Not matches for "{searchQuery}"</span>
    </div>
  );
}

export default EmptySearch;
