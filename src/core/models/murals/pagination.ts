/** Pagination info. */
export interface Pagination<T> {
  /** Fetched entities. */
  readonly entities: readonly T[];

  /** Shows if there is next page to fetch. */
  readonly hasNext: boolean;
}
