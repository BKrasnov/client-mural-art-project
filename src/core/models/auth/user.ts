import { Immerable, OmitImmerable } from "../immerable";

/** User. */
export class User extends Immerable {
  /** User uid */
  public readonly id: string;

  /** User email. */
  public readonly email: string | null;

  /** First name. */
  public readonly firstName?: string;

  /** Nick name user. */
  public readonly nickName?: string;

  /** Last name. */
  public readonly lastName?: string;

  /** URL to avatar image. */
  public readonly avatar?: string;

  public constructor(data: InitArgsUser) {
    super();
    this.id = data.id;
    this.email = data.email;
    this.nickName = data.nickName;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.avatar = data.avatar;
  }
}

type InitArgsUser = OmitImmerable<User>;
