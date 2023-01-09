/** Error coming from the server. */
export class AppError<T> extends Error {
  /** Fields errors. */
  public readonly data?: T;

  /** Code error Firebase. */
  public readonly code?: string;

  public constructor(data?: T, code?: string) {
    super();
    this.data = data;
    this.code = code;
  }
}
