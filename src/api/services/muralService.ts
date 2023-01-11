import { FirebaseService } from "./firebaseService";
import { QueryService } from "./queryService";

import { MuralDto } from "@core/dtos";
import { MuralMapper } from "@core/mappers";
import { Mural, MuralsQueryOptions } from "@core/models";

export namespace MuralService {
  const MURAL_NAME_COLLECTION = "murals";

  /**
   * Getting all murals from firebase.
   * @param options Options for fetching murals.
   */
  export async function getMurals(options: MuralsQueryOptions): Promise<Mural[]> {
    const constraints = QueryService.getConstraints(options);
    const murals = await FirebaseService.fetchEntities<MuralDto, Mural>(
      MURAL_NAME_COLLECTION,
      constraints,
      MuralMapper.fromDto
    );
    return murals;
  }

  /**
   * Getting mural by id from firebase.
   * @param id Mural id.
   * @throws Error in case mural with provided id doesn't exist.
   */
  export async function getMuralById(id: number): Promise<Mural> {
    const constraints = QueryService.getConstraintsOneEntity(id);
    const murals = await FirebaseService.fetchEntities<MuralDto, Mural>(
      MURAL_NAME_COLLECTION,
      constraints,
      MuralMapper.fromDto
    );
    return murals[0];
  }
}
