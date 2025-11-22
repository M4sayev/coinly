import type { Coin } from "../services/coinsApi";

export const mockCoin: Coin = {
  id: "bitcoin",
  symbol: "btc",
  name: "Bitcoin",
  current_price: 42000,
  image: "btc.png",
  price_change_percentage_24h: "5.4",
  market_cap: 900000000,
};
