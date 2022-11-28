import { createSlice } from "@reduxjs/toolkit";

import { authLogin, authLogout, authRegister } from "./dispatchers";
import { initialState } from "./state";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(authLogin.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
        state.isLoggedIn = false;
      })

      .addCase(authRegister.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      })

      .addCase(authLogout.pending, state => {
        state.error = undefined;
        state.isLoading = true;
      }),
});

export default authSlice.reducer;
