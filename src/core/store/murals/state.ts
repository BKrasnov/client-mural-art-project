import { Mural } from "@core/models";

/** Mural state. */
export interface MuralState {
  /** Shows if we are loading next page of murals. */
  readonly isLoading: boolean;

  /** Error for murals list. */
  readonly muralsListError?: string;

  /** Error for murals details. */
  readonly muralDetailsError?: string;

  /** Id of the currently selected murals. */
  readonly selectedMuralId?: number;

  /** List of murals. */
  readonly murals: Mural[];
}

export const initialState: MuralState = {
  isLoading: false,
  muralsListError: undefined,
  muralDetailsError: undefined,
  selectedMuralId: undefined,
  murals: [],
};
