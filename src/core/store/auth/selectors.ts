import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "@core/store";

/** Selects auth loading state. */
export const selectIsAuthLoading = createSelector(
  (state: RootState) => state.auth.isLoading,
  (isLoading) => isLoading
);

// /** Selects auth submit state. */
// export const selectIsAuthSubmitted = createSelector(
//   // (state: RootState) => state.auth.isSubmitted,
//   // (isSubmitted) => isSubmitted
// );

/** Selects auth error state. */
export const selectError = createSelector(
  (state: RootState) => state.auth.error,
  (error) => error
);
