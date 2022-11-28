import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@core/store";

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

/** Selects auth error state. */
export const selectError = createSelector(
  (state: RootState) => state.auth.error,
  error => error
);
