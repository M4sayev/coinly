import { Currency } from "./types";

type MarketCoinValue = [number, number][];

export type MarketCoin = {
  prices: MarketCoinValue;
  market_caps: MarketCoinValue;
  total_volumes: MarketCoinValue;
};

export type CoinMarketQuery = {
  coinID: string;
  currency?: Currency;
  timeInterval?: number;
};

export type CoinSearchParams = { coinID: string; currency?: Currency };

export type CoinsParams = { currency: string; search?: string };
