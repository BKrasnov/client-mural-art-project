import { createSelector, EntityId } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { entityAdapter } from "./state";

export const { selectById } = entityAdapter.getSelectors();

/** Selects id of the currently selected mural. */
export const selectMuralDetailsById = createSelector(
  (state: RootState, id: EntityId) => (selectById(state.muralDetails, id)),
  muralDetails => muralDetails
);

/** Selects mural loading state. */
export const selectIsAnimeDetailsLoading = createSelector(
    (state: RootState) => state.muralDetails.isLoading,
    isLoading => isLoading,
  );