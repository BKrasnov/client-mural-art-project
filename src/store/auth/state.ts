import { Registration, User, AppError, FormError, Login } from "@core/models";

/** Auth state. */
export interface AuthState {
  /** Whether authentication is in process or not. */
  readonly isLoading: boolean;

  /** Error message. */
  readonly loginError?: AppError<FormError<Login>>;

  /** Error message. */
  readonly registerError?: AppError<FormError<Registration>>;

  /** Currently signed in user. */
  readonly user: User | null;

  /** Whether it has been submitted or not.. */
  readonly isSubmitted: boolean;
}

export const initialState: AuthState = {
  isLoading: false,
  user: null,
  isSubmitted: false,
};
