import { Token } from '@core/models';

/** Auth state. */
export interface AuthState {

  /** Whether authentication is in process or not. */
  readonly isLoading: boolean;

  /** Error message. */
  readonly error: string | undefined;

  /** Is logged in user. */
  readonly isLoggedIn: boolean;

  /** Whether user is logged in or not. */
  readonly token: Token | null;
}

export const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  error: undefined,
  token: null,
};
