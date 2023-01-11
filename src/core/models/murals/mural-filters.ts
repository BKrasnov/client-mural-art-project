import { Mural } from "./mural";

/** Filters values. */
export interface MuralFilters {
  /** Title searching value. */
  readonly searchValue: string;
}

/** Options required to build query constraints. */
export interface MuralsQueryOptions {
  /** Count of murals to fetch. */
  readonly countOfMurals: number;

  /** Last visible film. */
  readonly lastVisibleMural: Mural | null;

  /** Filter options. */
  readonly filters: MuralFilters;
}
