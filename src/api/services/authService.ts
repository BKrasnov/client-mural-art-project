import { Registration, Login, User } from "@core/models";
import { UserMapper } from "@core/mappers";

import { UserService, FirebaseService } from "./index";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export namespace AuthService {
  /**
   * Registers an account.
   * @param registrationData Data required for registration.
   */
  export async function register(registrationData: Registration): Promise<User | null> {
    const { email, password } = registrationData;
    try {
      const userCredential = await createUserWithEmailAndPassword(FirebaseService.auth, email, password);
      const user = UserMapper.fromUserDto(userCredential.user);
      await UserService.addUser(user);
      return user;
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
      // const accessToken = await userCredential.user.getIdToken();
      const user = await UserService.getUser(userCredential.user.uid);
      // const token = new Token({
      //   access: accessToken,
      //   refresh: userCredential.user.refreshToken,
      // });

      // await TokenService.save(token);
      return user;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Logout a user.
   */
  export async function logout(): Promise<void> {
    await signOut(FirebaseService.auth);
  }
}
