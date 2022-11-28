import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import { Registration, Login, User, Token } from "@core/models";

import { UserService, FirebaseService, TokenService } from "./index";

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

      /** Adding mapper dto. */
      await UserService.addUser({
        id: userCredential.user?.uid,
        email: userCredential.user?.email,
      } as User);
    } catch (error) {
      throw error;
    }
    console.log("User created");
  }

  /**
   * Login a user with email and password.
   * @param loginData Data required for login.
   */
  export async function login(loginData: Login): Promise<Token> {
    const { email, password } = loginData;
    try {
      const userCredential = await signInWithEmailAndPassword(FirebaseService.auth, email, password);
      const accessToken = await userCredential.user.getIdToken();

      // Fix this.
      const token = {
        access: accessToken,
        refresh: userCredential.user.refreshToken,
      } as Token;
      await TokenService.save(token);
      return token;
    } catch (error) {
      throw error;
    }
  }
}
