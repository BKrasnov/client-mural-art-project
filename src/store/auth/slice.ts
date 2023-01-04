import { CaseReducer, createSlice } from "@reduxjs/toolkit";

import { Login, Registration, AppError, FormError } from "@core/models";

import { authLogin, authLogout, authRegister, getUserFromCache } from "./dispatchers";
import { AuthState, initialState } from "./state";

const pendingReducer: CaseReducer<AuthState> = state => {
  state.isLoading = true;
};

const fulfilledAuthReducer: CaseReducer<AuthState> = (state, action) => {
  state.user = action.payload;
  state.isLoading = false;
  state.isSubmitted = true;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(authLogin.pending, pendingReducer)
      .addCase(authLogin.fulfilled, fulfilledAuthReducer)
      .addCase(authLogin.rejected, (state, action) => {
        state.loginError = action.payload as AppError<FormError<Login>>;
        state.isLoading = false;
      })

      .addCase(authRegister.pending, pendingReducer)
      .addCase(authRegister.fulfilled, fulfilledAuthReducer)
      .addCase(authRegister.rejected, (state, action) => {
        state.registerError = action.payload as AppError<FormError<Registration>>;
        state.isLoading = false;
      })

      .addCase(authLogout.pending, pendingReducer)
      .addCase(authLogout.fulfilled, state => {
        state.user = null;
        state.isLoading = false;
        state.isSubmitted = false;
      })

      .addCase(getUserFromCache.pending, pendingReducer)
      .addCase(getUserFromCache.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      }),
});

export default authSlice.reducer;
