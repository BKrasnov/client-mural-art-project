/** Data required for Profile. */
export interface Profile {
  /** First name. */
  readonly firstName: string;

  /** Last name. */
  readonly lastName: string;

  /** User occupation. */
  readonly occupation: string;

  /** User phone number */
  readonly phoneNumber?: string;
}
