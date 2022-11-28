import { User } from "@core/models";
import { UserCredential } from "firebase/auth";

export namespace UserMapper {
  /**
   * Maps dto to model.
   * @todo Fix the "as User" type cast. It is possible to do "new User"?
   * @param dto User dto.
   */
  export function fromDto(dto: UserCredential): User {
    return ({
      id: dto.user.uid,
      email: dto.user.email,
      firstName: dto.user.displayName,
      lastName: null,
      nickName: null,
      emailVerified: dto.user.emailVerified,
      phoneNumber: dto.user.phoneNumber,
      avatar: dto.user.photoURL,
    }) as User;
  }
}
