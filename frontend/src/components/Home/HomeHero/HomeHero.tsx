import { cn } from "../../../utils/utils";
import Particles from "../../UI/Particles";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { coinImages } from "../../../constants/coinImages";

function HomeHero() {
  const currency = useAppSelector((state) => state.ui.currency);
  const CoinMobile =
    coinImages[currency.toLowerCase()] || coinImages["bitcoin"];

  return (
    <section className="relative font-roboto min-h-screen text-[var(--color-neutral-100)] h-full flex items-center justify-center overflow-hidden max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto w-full h-140 flex items-center gap-5 justify-center lg:justify-between px-4 pb-10 pt-[64px]">
        {/* Particle coin desktop */}
        <Particles
          img={currency}
          aria-hidden="true"
          className="absolute w-full h-full top-0 left-0 hidden lg:block aspect-square py-10"
        />
        {/* Mobile background drifting coin  */}
        <div className="absolute lg:relative flex justify-center z-0 max-w-lg gap-4 lg:ml-10 w-full h-full">
          <CoinMobile
            aria-hidden="true"
            stroke="#668affff"
            fill="none"
            className="coin-mobile w-full h-full opacity-10 lg:hidden motion-reduce:lg:block"
          />
        </div>
        {/* Hero text */}
        <div className="relative text-center lg:text-left px-4 lg:max-w-1/2 text-shadow-lg">
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
    </section>
  );
}

export default HomeHero;
