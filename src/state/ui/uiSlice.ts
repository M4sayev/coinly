import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isSignUpModalOpen: boolean;
  isSidebarOpen: boolean;
}

const initialState: uiState = {
  isSignUpModalOpen: false,
  isSidebarOpen: false,
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
  },
});

export const { openSignUp, closeSignUp, openSidebar, closeSidebar } =
  uiSlice.actions;

export default uiSlice.reducer;
