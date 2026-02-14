"use client";
import CoinChart from "@/components/Coin/CoinChart/CoinChart";

function Watchlist() {
  // test to see if how the chart looks
  return (
    <main>
      <CoinChart coinID="ethereum" currency="btc" />
    </main>
  );
}

export default Watchlist;
