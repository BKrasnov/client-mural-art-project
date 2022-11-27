import { Token } from "@core/models";

import { StorageService } from "./storageService";

export namespace TokenService {
  const TOKEN_STORAGE_KEY = "token";

  /**
   * Saves token.
   * @param token The token object to be stored.
   */
  export function save(token: Token): Promise<void> {
    return StorageService.save(TOKEN_STORAGE_KEY, token);
  }

  /** Gets token. */
  export function get(): Promise<Token | null> {
    return StorageService.get<Token>(TOKEN_STORAGE_KEY);
  }

  /** Removes token. */
  export function remove(): Promise<void> {
    return StorageService.remove(TOKEN_STORAGE_KEY);
  }
}
