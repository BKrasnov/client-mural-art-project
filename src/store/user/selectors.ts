import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/store";

export const selectIsUpdateUser = createSelector(
  (state: RootState) => state.user.updatedUser,
  updatedUser => updatedUser
);

export const selectIsLoadingUser = createSelector(
  (state: RootState) => state.user.isLoading,
  isLoading => isLoading
);
