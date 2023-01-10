/** Filters values. */
export interface MuralFilters {
  /** Title searching value. */
  readonly searchValue: string;
}

/** Options required to build query constraints. */
export interface MuralsFetchingOptions {
  /** Filter options. */
  readonly filters: MuralFilters;
}
