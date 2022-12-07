/** Filters values. */
export interface MuralFilters {
  /** Title searching value. */
  readonly searchValue: string;
}

/** Options required to build query constraints. */
export interface MuralsFetchingOptions {
  /** Count of murals to fetch. */
  readonly countOfMurals: number;

  /** Filter options. */
  readonly filters: MuralFilters;
}
