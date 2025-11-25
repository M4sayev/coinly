import type { FieldError } from "react-hook-form";
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

export const mockError: FieldError = {
  type: "required",
  message: "This field is required",
};

export const mockCoinsApiData = {
  pages: [
    Array.from({ length: 45 }, (_, index) => {
      const newCoin = { ...mockCoin, id: index + 1 };
      return newCoin;
    }),
  ],
};
