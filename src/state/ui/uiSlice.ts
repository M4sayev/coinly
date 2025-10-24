import { createSlice } from "@reduxjs/toolkit";

interface uiState {
  isSignUpModalOpen: boolean;
}

const initialState: uiState = {
  isSignUpModalOpen: false,
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
  },
});

export const { openSignUp, closeSignUp } = uiSlice.actions;

export default uiSlice.reducer;
