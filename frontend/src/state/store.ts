import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";
import { coinsApi } from "../services/coinsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    [coinsApi.reducerPath]: coinsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coinsApi.middleware),
});

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];

export type RootState = ReturnType<AppStore["getState"]>;

setupListeners(store.dispatch);
