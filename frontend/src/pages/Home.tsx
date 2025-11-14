import Header from "../components/Home/Header/Header";
import CoinSearchBar from "../components/Home/CoinSearchBar/CoinSearchBar";
import { cn } from "../utils/utils";
import { useState, type ChangeEvent } from "react";
import CoinsGrid from "../components/Home/CoinGrid/CoinsGrid";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleResetSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="bg-[image:var(--gradient-bg)]">
      <Header />
      <section className="font-roboto py-10 md:py-20 text-center w-[90%] max-w-[360px] sm:max-w-[450px] md:w-[60%] lg:max-w-[600px] m-auto">
        <h2
          className={cn(
            "text-[var(--color-neutral-100)] font-mono mb-2 text-shadow-lg",
            "sm:mb-4 sm:text-lg md:text-2xl lg:text-3xl lg:mb-8"
          )}
        >
          Today&apos;s Cryptocurrency Prices
        </h2>
        <CoinSearchBar
          value={searchQuery}
          onChange={handleChange}
          onReset={handleResetSearch}
        />
      </section>
      <CoinsGrid />
    </div>
  );
}

export default Home;
