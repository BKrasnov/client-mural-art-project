import { createSlice } from "@reduxjs/toolkit";

import { authLogin, authLogout, authRegister, getUserFromCache } from "./dispatchers";
import { initialState } from "./state";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(authLogin.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loginError = action.error.message;
        state.isLoading = false;
      })

      .addCase(authRegister.pending, state => {
        state.isLoading = true;
      })
      .addCase(authRegister.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.registerError = action.error.message;
        state.isLoading = false;
      })

      .addCase(authLogout.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogout.fulfilled, state => {
        state.user = null;
        state.isLoading = false;
      })

      .addCase(getUserFromCache.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserFromCache.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      }),
});

export default authSlice.reducer;
