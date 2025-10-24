import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];

export type RootState = ReturnType<AppStore["getState"]>;
