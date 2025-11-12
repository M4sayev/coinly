import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light";

interface uiState {
  isSignUpModalOpen: boolean;
  isSidebarOpen: boolean;
  currency: string;
  theme: ThemeType;
}

const initialState: uiState = {
  isSignUpModalOpen: false,
  isSidebarOpen: false,
  currency: "BTC",
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
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload;
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
