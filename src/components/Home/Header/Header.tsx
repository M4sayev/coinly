import React from "react";
import { cn } from "../../../utils/utils";
import Particles from "../../UI/Particles";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { coinImages } from "../../../constants/coinImages";

function Header() {
  const currency = useAppSelector((state) => state.ui.currency);
  const CoinMobile =
    coinImages[currency.toLowerCase()] || coinImages["bitcoin"];

  return (
    <header className="relative font-roboto min-h-screen text-[var(--color-neutral-100)] h-full bg-[image:var(--gradient-bg)] flex items-center justify-center overflow-hidden">
      <Particles
        img={currency}
        className="w-full h-auto absolute p-15 hidden lg:block"
      />
      <div className="max-w-7xl mx-auto w-full h-140 flex items-center justify-center lg:justify-between gap-10 px-4 py-12">
        <div className="absolute lg:relative flex justify-center z-0 max-w-lg gap-4 lg:ml-10 w-full h-full">
          <CoinMobile
            stroke="#668affff"
            fill="none"
            className="coin-mobile w-full h-full opacity-10 lg:hidden"
          />
        </div>
        <div className="relative text-center  lg:text-left px-4 lg:max-w-1/2">
          <h1 className="font-mono text-4xl md:text-5xl font-bold mb-6 ">
            Track the future of finance
          </h1>
          <p
            className={cn(
              "text-[var(--color-neutral-200)] relative",
              "before:left-1/2 before:-translate-1/2 before:absolute before:-bottom-5 lg:before:left-8 before:w-16 before:h-1 before:bg-[image:var(--gradient-accent)] before:opacity-30 before:rounded"
            )}
          >
            Follow coins by adding to watchlist
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
