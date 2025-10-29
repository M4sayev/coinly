import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface uiState {
  isSignUpModalOpen: boolean;
  isSidebarOpen: boolean;
  currency: string;
}

const initialState: uiState = {
  isSignUpModalOpen: false,
  isSidebarOpen: false,
  currency: "BTC",
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
  },
});

export const {
  openSignUp,
  closeSignUp,
  openSidebar,
  closeSidebar,
  setCurrency,
} = uiSlice.actions;

export default uiSlice.reducer;
