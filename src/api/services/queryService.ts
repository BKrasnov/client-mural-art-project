import { endAt, limit, orderBy, QueryConstraint, startAt, where } from "firebase/firestore/lite";

import { MuralsQueryOptions } from "@core/models";

/** Get query constraints options. */
export interface QueryGetConstraintsOptions {
  /** Count of anime. */
  readonly count?: number;
}

export namespace QueryService {
  /**
   * Get query constraint, for use in firestore query.
   * @param options - Options to builds constraints.
   */
  export function getConstraints(options: MuralsQueryOptions): QueryConstraint[] {
    const constraints: QueryConstraint[] = [];

    const { countOfMurals } = options;
    const { searchValue } = options.filters;

    if (searchValue.trim() !== "") {
      /* Adding searching constraint.
         The \uf8ff character used in the query is a very high code point in the Unicode range.
         Because it is after most regular characters in Unicode,
         the query matches all values that start with searching value. */
      const veryHighCodePoint = "\uf8ff";
      constraints.push(limit(countOfMurals));
      constraints.push(orderBy("title"));
      constraints.push(startAt(searchValue));
      constraints.push(endAt(`${searchValue}${veryHighCodePoint}`));
    }

    return constraints;
  }

  export function getConstraintsOneEntity(id: number): QueryConstraint[] {
    return [where("id", "==", id), limit(1)];
  }
}
