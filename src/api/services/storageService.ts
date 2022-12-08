/**
 * This is an abstraction for working with any storage.
 */
export namespace StorageService {
  /**
   * Saves value to storage by key.
   * @param key The key by which the value is stored.
   * @param value Some value that needs to be stored.
   */
  export async function save<T>(key: string, value: T): Promise<void> {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Gets item from storage by key.
   * @param key The key by which the value is stored.
   */
  export async function get<T = unknown>(key: string): Promise<T | null> {
    const rawData = localStorage.getItem(key);
    if (rawData == null) {
      return null;
    }
    return JSON.parse(rawData) as T;
  }

  /**
   * Removes value from storage by key.
   * @param key The key by which the value is stored.
   */
  export async function remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}
