import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "src/store";

export const selectUpdateUser = createSelector(
  (state: RootState) => state.user.updatedUser,
  updatedUser => updatedUser
);

export const selectIsUpdateUser = createSelector(
  (state: RootState) => state.user.updatedUser,
  updatedUser => updatedUser !== null
);

export const selectIsLoadingUser = createSelector(
  (state: RootState) => state.user.isLoading,
  isLoading => isLoading
);
