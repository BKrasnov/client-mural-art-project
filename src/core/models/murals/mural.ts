/** Mural model. */
export interface Mural {
  /** Primary key of the mural. */
  readonly id: number;

  /** Title of the mural. */
  readonly title: string;

  /** Description of the mural. */
  readonly description: string;

  /** Rating of the mural. */
  readonly rating: number;

  /** Location of the mural. */
  readonly location: string;

  readonly event: string;

  /** Reference  to image. */
  readonly imageRef: string;
}
