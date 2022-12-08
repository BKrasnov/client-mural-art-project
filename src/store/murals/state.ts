import { Mural, MuralFilters } from "@core/models";

/** Mural state. */
export interface MuralState {
  /** Shows if we are loading next page of murals. */
  readonly isLoading: boolean;

  /** Error for murals list. */
  readonly muralsListError?: string;

  /** List of murals. */
  readonly murals: Mural[];

  /** Filters for murals list. */
  readonly muralsListFilters: MuralFilters;
}

export const initialState: MuralState = {
  isLoading: false,
  muralsListError: undefined,
  murals: [],
  muralsListFilters: {
    searchValue: "",
  },
};
