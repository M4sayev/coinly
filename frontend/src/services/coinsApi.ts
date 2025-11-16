import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Coin {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: string;
  market_cap: number;
}

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.100.184:5000/api/v1/",
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
  }),
});

export const { useGetCoinsInfiniteQuery } = coinsApi;
