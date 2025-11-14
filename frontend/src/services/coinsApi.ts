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
//http://localhost:5000/api/v1/
export const coinsApi = createApi({
  reducerPath: "coinsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.100.184:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    getCoins: builder.query<Coin[], string>({
      query: (currency) => `market?currency=${currency.toLowerCase()}`,
    }),
  }),
});

export const { useGetCoinsQuery } = coinsApi;
