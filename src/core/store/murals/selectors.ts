import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

/** Selects murals in state. */
export const selectMurals = createSelector(
  (state: RootState) => state.murals.murals,
  murals => murals
);

/** Selects murals loading state.  */
export const selectMuralsLoading = createSelector(
  (state: RootState) => state.murals.isLoading,
  isLoading => isLoading
);
