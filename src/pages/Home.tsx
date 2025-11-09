import Header from "../components/Home/Header/Header";
import CoinSearchBar from "../components/Home/CoinSearchBar/CoinSearchBar";
import { cn } from "../utils/utils";
import { useState, type ChangeEvent } from "react";

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
      <section className="font-roboto py-10 md:py-20 text-center w-[80%] md:w-[60%] max-w-[600px] m-auto">
        <h1
          className={cn(
            "text-[var(--color-neutral-100)] font-mono mb-2 text-shadow-lg",
            "sm:mb-4 sm:text-lg md:text-2xl lg:text-3xl lg:mb-8"
          )}
        >
          Today&apos;s Cryptocurrency Prices
        </h1>
        <CoinSearchBar
          value={searchQuery}
          onChange={handleChange}
          onReset={handleResetSearch}
        />
      </section>
    </div>
  );
}

export default Home;
