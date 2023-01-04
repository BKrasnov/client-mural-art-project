import { Immerable, OmitImmerable } from "../immerable";

/** User. */
export class User extends Immerable {
  /** User uid */
  public readonly id: string;

  /** User email. */
  public readonly email: string;

  /** Nick name user. */
  public readonly nickName: string;

  /** First name. */
  public readonly firstName: string | null;

  /** Last name. */
  public readonly lastName: string | null;

  /** URL to avatar image. */
  public readonly avatar: string | null;

  /** User phone number */
  public readonly phoneNumber: string | null;

  /** User email verified. */
  public readonly emailVerified: boolean;

  public constructor(data: InitArgsUser) {
    super();
    this.id = data.id;
    this.email = data.email;
    this.nickName = data.nickName;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.avatar = data.avatar;
    this.phoneNumber = data.phoneNumber;
    this.emailVerified = data.emailVerified;
  }
}

type InitArgsUser = OmitImmerable<User>;
