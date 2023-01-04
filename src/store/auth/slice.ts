import { createSlice } from "@reduxjs/toolkit";

import { Registration } from "@core/models";
import { AppError } from "@core/models/errors/app-error";
import { FormError } from "@core/models/errors/form-error";

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
        state.isSubmitted = true;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.loginError = action.error.message;
        state.isLoading = false;
        state.isSubmitted = false;
      })

      .addCase(authRegister.pending, state => {
        state.isLoading = true;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSubmitted = true;
        state.user = action.payload;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.registerError = action.payload as AppError<FormError<Registration>>;
        state.isLoading = false;
        state.isSubmitted = false;
      })

      .addCase(authLogout.pending, state => {
        state.isLoading = true;
      })
      .addCase(authLogout.fulfilled, state => {
        state.user = null;
        state.isLoading = false;
        state.isSubmitted = false;
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
