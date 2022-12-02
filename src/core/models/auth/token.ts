import { Immerable, OmitImmerable } from "../immerable";

/** Authorization token. */
export class Token extends Immerable {
  /** Refresh token. */
  public readonly refresh: string;

  /** Access token. */
  public readonly access: string;

  public constructor(data: InitArgsTokens) {
    super();
    this.refresh = data.refresh;
    this.access = data.access;
  }
}

type InitArgsTokens = OmitImmerable<Token>;
