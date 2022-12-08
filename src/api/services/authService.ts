import { Registration, Login, Token, User } from "@core/models";
import { UserMapper } from "@core/mappers";

import { UserService, FirebaseService, TokenService } from "./index";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export namespace AuthService {
  /**
   * Registers an account.
   * @param registrationData Data required for registration.
   * @todo Add quality error handling.
   * @todo Fix the "as User" type cast.
   */
  export async function register(registrationData: Registration): Promise<void> {
    const { email, password } = registrationData;
    try {
      const userCredential = await createUserWithEmailAndPassword(FirebaseService.auth, email, password);
      const user = UserMapper.fromUserDto(userCredential.user);
      await UserService.addUser(user);
    } catch (error) {
      throw error;
    }
  }

  /**
   * Login a user with email and password.
   * @param loginData Data required for login.
   */
  export async function login(loginData: Login): Promise<User | null> {
    const { email, password } = loginData;
    try {
      const userCredential = await signInWithEmailAndPassword(FirebaseService.auth, email, password);
      const accessToken = await userCredential.user.getIdToken();
      const user = UserMapper.fromUserDto(userCredential.user);

      const token = new Token({
        access: accessToken,
        refresh: userCredential.user.refreshToken,
      });

      await TokenService.save(token);
      return user;
    } catch (error) {
      throw error;
    }
  }
}
