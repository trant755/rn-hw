import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.login = true;
    },
    signOut: (state) => {
      state.login = false;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;
export const isLogin = (state) => state.auth.login;

export default authSlice.reducer;
