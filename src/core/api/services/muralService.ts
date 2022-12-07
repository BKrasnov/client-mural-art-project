import { getDocs, limit, query, where } from "firebase/firestore/lite";
import { FirebaseService } from "./firebaseService";

import { MuralMapper } from "@core/api/mappers";
import { MuralDto } from "@core/api/dtos";

import { Mural } from "@core/models/murals/mural";

export namespace MuralService {
  const MURAL_NAME_COLLECTION = "murals";

  const muralCollection = FirebaseService.getCollectionReference<MuralDto>(MURAL_NAME_COLLECTION);

  /** Getting all murals from firebase. */
  export async function getMural(): Promise<Mural[]> {
    const queryMurals = query(muralCollection);
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
    const queryMural = query(muralCollection, where("id", "==", id), limit(1));
    const muralSnapshot = await getDocs(queryMural);
    if (muralSnapshot.empty) {
      throw new Error(`Mural with id ${id} doesn't exist`);
    }
    
    return MuralMapper.fromDto(muralSnapshot.docs[0].data());
  }
}
