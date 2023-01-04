import { User as UserFirebase } from "firebase/auth";

import { User } from "@core/models";

export namespace UserMapper {
  /**
   * Maps Firebase's User to User.
   * @todo Fix the "as User" type cast. It is possible to do "new User"?
   * @param dto User dto.
   */
  export function fromUserDto(dto: UserFirebase, ...registerData: string[]): User {
    const [nickname] = registerData;
    return {
      id: dto.uid,
      email: dto.email,
      firstName: dto.displayName,
      lastName: null,
      nickName: nickname,
      emailVerified: dto.emailVerified,
      phoneNumber: dto.phoneNumber,
      avatar: dto.photoURL,
    } as User;
  }
}
