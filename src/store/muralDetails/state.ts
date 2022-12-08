import { createEntityAdapter } from "@reduxjs/toolkit";

import { Mural } from "@core/models";

export const entityAdapter = createEntityAdapter<Mural>({
  selectId: mural => mural.id,
});

/** Mural details state. */
export interface MuralDetailsState {
  /** Whether mural details is in process or not. */
  readonly isLoading: boolean;

  /** Error. */
  readonly error?: string;
}

export const initialState = entityAdapter.getInitialState<MuralDetailsState>({
  isLoading: true,
});

export type State = typeof initialState;
