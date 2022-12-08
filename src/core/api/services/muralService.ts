import { endAt, getDocs, limit, orderBy, query, QueryConstraint, startAt, where } from "firebase/firestore/lite";

import { FirebaseService } from "./firebaseService";

import { MuralMapper } from "@core/api/mappers";
import { MuralDto } from "@core/api/dtos";
import { Mural, MuralsFetchingOptions } from "@core/models/murals";

/**
 * Function for getting query constraints for films fetching based on options provided.
 * @param options - Options to builds constraints.
 * @todo Fix search by title.
 */
function getMuralsQueryConstraints(options: MuralsFetchingOptions): QueryConstraint[] {
  const constraints: QueryConstraint[] = [];

  const { searchValue } = options.filters;

  if (searchValue.trim() !== "") {
    /* Adding searching constraint.
       The \uf8ff character used in the query is a very high code point in the Unicode range.
       Because it is after most regular characters in Unicode,
       the query matches all values that start with searching value. */
    const veryHighCodePoint = "\uf8ff";

    constraints.push(orderBy("title"));
    constraints.push(startAt(searchValue.toLowerCase()));
    constraints.push(endAt(`${searchValue}${veryHighCodePoint}`));
    console.log(constraints);
  }
  return constraints;
}

export namespace MuralService {
  const MURAL_NAME_COLLECTION = "murals";

  const muralCollectionRef = FirebaseService.getCollectionReference<MuralDto>(MURAL_NAME_COLLECTION);

  /**
   * Getting all murals from firebase.
   * @param options Options for fetching murals.
   */
  export async function getMurals(options: MuralsFetchingOptions): Promise<Mural[]> {
    /** @todo ...getMuralsQueryConstraints(options) */
    const queryMurals = query(muralCollectionRef);
    const muralsSnapshot = await getDocs(queryMurals);
    const murals: Mural[] = FirebaseService.mapQuerySnapshotToArray<MuralDto, Mural>(muralsSnapshot, MuralMapper.fromDto);
    return murals;
  }

  /**
   * Getting mural by id from firebase.
   * @param id Mural id.
   * @throws Error in case mural with provided id doesn't exist.
   */
  export async function getMuralById(id: number): Promise<Mural> {
    const queryMural = query(muralCollectionRef, where("id", "==", id), limit(1));
    const muralSnapshot = await getDocs(queryMural);
    if (muralSnapshot.empty) {
      throw new Error(`Mural with id ${id} doesn't exist`);
    }

    return MuralMapper.fromDto(muralSnapshot.docs[0].data());
  }
}
