import { Registration, Login, User } from "@core/models";
import { UserMapper } from "@core/mappers";

import { UserService, FirebaseService } from "./index";

/** @todo Remove the Firebase service and change it to its own API  */
export namespace AuthService {
  /**
   * Registers an account.
   * @param registrationData Data required for registration.
   */
  export async function register(registrationData: Registration): Promise<User | null> {
    const { email, password, nickname } = registrationData;
    try {
      const userCredential = await FirebaseService.createUser(email, password);
      const user = UserMapper.fromUserDto(userCredential.user, nickname);
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
      const userCredential = await FirebaseService.loginUser(email, password);
      const user = await UserService.getUser(userCredential.user.uid);
      return user;
    } catch (error) {
      throw error;
    }
  }

  /** Logout a user. */
  export async function logout(): Promise<void> {
    await FirebaseService.logoutUser();
  }
}
