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
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.user = action.payload;
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
        state.user = null;
        state.error = undefined;
        state.isLoading = true;
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
