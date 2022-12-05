import { getDocs, query } from "firebase/firestore/lite";
import { FirebaseService } from "./firebaseService";

import { MuralMapper } from "@core/api/mappers";
import { MuralDto } from "@core/api/dtos";

import { Mural } from "@core/models/murals/mural";

export namespace MuralService {
  const MURAL_NAME_COLLECTION = "murals";

  const muralCollection = FirebaseService.getCollectionReference<MuralDto>(MURAL_NAME_COLLECTION);

  export async function getMural(): Promise<Mural[]> {
    const queryMurals = query(muralCollection);
    const querySnapshot = await getDocs(queryMurals);
    const murals: Mural[] = FirebaseService.mapQuerySnapshotToArray<MuralDto, Mural>(querySnapshot, MuralMapper.fromDto);
    return murals;
  }
}
