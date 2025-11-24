import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../state/ui/uiSlice";

export function createTestStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      ui: uiReducer,
    },
    preloadedState,
  });
}
