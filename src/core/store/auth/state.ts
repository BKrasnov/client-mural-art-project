import { User } from '@core/models';

/** Auth state. */
export interface AuthState {

  /** Whether authentication is in process or not. */
  readonly isLoading: boolean;

  /** Error message. */
  readonly error: string | undefined;

  /** Is logged in user. */
  readonly isLoggedIn: boolean;

  /** Currently signed in user. */
  readonly user: User | null;
}

export const initialState: AuthState = {
  isLoading: false,
  isLoggedIn: false,
  error: undefined,
  user: null,
};
