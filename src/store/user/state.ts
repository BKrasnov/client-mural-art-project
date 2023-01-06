import { User } from "@core/models";

/** User state. */
export interface UserState {
  /** Profile update in progress or not. */
  readonly isLoading: boolean;

  /** Has it been updated by the user. */
  readonly updatedUser: User | null;
}

export const initialState: UserState = {
  isLoading: false,
  updatedUser: null,
};
