/** Error coming from the server. */
export class AppError<T> extends Error {
  /** Fields errors. */
  public readonly data?: T;

  /** Error Description. */
  public readonly detail?: string;

  public constructor(data?: T, detail?: string) {
    super();
    this.data = data;
    this.detail = detail;
  }
}
