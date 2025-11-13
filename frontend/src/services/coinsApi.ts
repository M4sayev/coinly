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
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], string>({
      query: (currency) => `market?currency=${currency.toLowerCase()}`,
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApi;
