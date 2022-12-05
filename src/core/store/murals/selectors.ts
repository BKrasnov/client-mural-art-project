import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

/** Selects sign in state. */
export const selectMurals = createSelector(
  (state: RootState) => state.murals.murals,
  murals => murals
);
