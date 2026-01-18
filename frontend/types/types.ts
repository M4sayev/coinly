export type Currency = "btc" | "azn" | "eur" | "usd";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: string;
  market_cap: number;
}
