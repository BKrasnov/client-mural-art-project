import { User } from "@core/models";

/** Auth state. */
export interface AuthState {
  /** Whether authentication is in process or not. */
  readonly isLoading: boolean;

  /** Error message. */
  readonly loginError?: string;

  /** Error message. */
  readonly registerError?: string;

  /** Currently signed in user. */
  readonly user: User | null;

  /** Whether it has been submitted or not.. */
  readonly isSubmitted: boolean;
}

export const initialState: AuthState = {
  isLoading: false,
  loginError: undefined,
  user: null,
  isSubmitted: false,
};
