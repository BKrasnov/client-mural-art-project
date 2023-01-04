/** Data required for registration. */
export interface Registration {
  /** Email. */
  readonly email: string;

  /** Nickname. */
  readonly nickname: string;

  /** Password. */
  readonly password: string;

  /** Password confirmation. */
  readonly confirmPassword: string;
}
