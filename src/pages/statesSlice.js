import { createSlice } from "@reduxjs/toolkit";

export const stateSlice = createSlice({
  name: "states",
  initialState: {
    islogin: false,
  },
  reducers: {
    login: (state) => {
      state.islogin = true;
    },
    logout: (state) => {
      state.islogin = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = stateSlice.actions;

export default stateSlice.reducer;
