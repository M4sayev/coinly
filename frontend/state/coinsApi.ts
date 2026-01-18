import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Coin } from "../../types/shared.types.";

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
  }),
});

export const { useGetCoinsInfiniteQuery } = coinsApi;
