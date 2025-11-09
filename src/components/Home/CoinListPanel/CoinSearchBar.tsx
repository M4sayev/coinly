import { Search } from "lucide-react";

function CoinSearchBar() {
  return (
    <section className="text-center w-[80%] md:w-1/2 max-w-[600px] m-auto">
      <h1 className="text-[var(--color-neutral-100)] font-mono mb-2 md:text-2xl md:mb-4  lg:text-3xl lg:mb-8 text-shadow-lg">
        Today&apos;s Cryptocurrency Prices
      </h1>
      <div className="relative block ">
        <Search
          className="absolute w-4 h-4 text-[var(--color-neutral-100)] top-1/2 left-2 -translate-y-1/2 opacity-60 lg:left-3"
          aria-hidden="true"
        />
        <input
          className="text-[var(--color-neutral-100)] border border-[var(--color-neutral-100)] text-xs px-4 pl-8 py-2 w-full rounded-md md:py-3 md:text-sm lg:pl-9 shadow-lg "
          type="text"
          name="cryptoSearch"
          aria-label="Search for a cryptocurrency"
          placeholder="Search for a cryptocurrency"
        />
      </div>
    </section>
  );
}

export default CoinSearchBar;
