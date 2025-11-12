import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  image: string;
}

export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.coingecko.com/api/v3/",
    prepareHeaders: (headers) => {
      headers.set("x-cg-pro-api-key", "");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], string>({
      query: (currency) =>
        `coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=1&sparkline=false`,
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApi;
