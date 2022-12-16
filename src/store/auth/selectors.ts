import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/store";

/** Selects a user from a state. */
export const selectUser = createSelector(
  (state: RootState) => state.auth.user,
  user => user
);

/** Selects sign in state. */
export const selectIsAuth = createSelector(
  (state: RootState) => state.auth.user,
  user => user !== null
);

/** Selects auth loading state. */
export const selectIsAuthLoading = createSelector(
  (state: RootState) => state.auth.isLoading,
  isLoading => isLoading
);

/** Selects auth submit state. */
export const selectIsAuthSubmitted = createSelector(
  (state: RootState) => state.auth.isSubmitted,
  isSubmitted => isSubmitted,
);

/** Selects auth error state. */
export const selectLoginError = createSelector(
  (state: RootState) => state.auth.loginError,
  error => error
);

/** Selects auth error state. */
export const selectRegisterError = createSelector(
  (state: RootState) => state.auth.registerError,
  error => error
);
