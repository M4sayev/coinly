import { Currency } from "@/types/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light";

interface uiState {
  isSignUpModalOpen: boolean;
  isSidebarOpen: boolean;
  currency: Currency;
  theme: ThemeType;
}

const initialState: uiState = {
  isSignUpModalOpen: false,
  isSidebarOpen: false,
  currency: "btc",
  theme: "dark",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSignUp: (state) => {
      state.isSignUpModalOpen = true;
    },
    closeSignUp: (state) => {
      state.isSignUpModalOpen = false;
    },
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const {
  openSignUp,
  closeSignUp,
  openSidebar,
  closeSidebar,
  setCurrency,
  setTheme,
} = uiSlice.actions;

export default uiSlice.reducer;
