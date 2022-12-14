import { createSelector } from "@reduxjs/toolkit";

import { getFirebaseError } from "src/features/auth/utils/firebaseErrors";

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
export const selectIsProfileSubmitted = createSelector(
  (state: RootState) => state.auth.isSubmittedProfile,
  isSubmittedProfile => isSubmittedProfile,
);

/** Selects auth error state. */
export const selectLoginError = createSelector(
  (state: RootState) => state.auth.loginError,
  error => getFirebaseError(error?.code)
);

/** Selects auth error state. */
export const selectRegisterError = createSelector(
  (state: RootState) => state.auth.registerError,
  error => getFirebaseError(error?.code)
);
