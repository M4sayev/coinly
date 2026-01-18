import type { Coin, Currency } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type MarketCoin = {
  prices: [number, number][];
  market_caps: [number, number][];
  total_volumes: [number, number][];
};

type CoinMarketQuery = {
  coinID: string;
  currency?: Currency;
  timeInterval?: number;
};

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.100.184:3000/coins",
  }),
  endpoints: (builder) => ({
    getCoins: builder.infiniteQuery<
      Coin[],
      { currency: string; search?: string },
      number
    >({
      infiniteQueryOptions: {
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          if (lastPage.length === 0) return undefined;
          return lastPageParam + 1;
        },
      },

      query: ({ queryArg, pageParam }) =>
        `market?currency=${queryArg.currency.toLowerCase()}&search=${
          queryArg.search ?? ""
        }&page=${pageParam}`,
    }),
    getOneCoinPrice: builder.query<MarketCoin, CoinMarketQuery, unknown>({
      query: ({ coinID, currency = "btc", timeInterval = 1 }) => ({
        url: `/${coinID}/analytics?currency=${currency}&timeInterval=${timeInterval}`,
      }),
    }),
  }),
});

export const { useGetCoinsInfiniteQuery, useGetOneCoinPriceQuery } = coinsApi;
