import { onAuthStateChanged, signOut } from "firebase/auth";
import { addDoc } from "firebase/firestore/lite";

import { FirebaseService } from "./firebaseService";

import { User } from "@core/models";
import { UserMapper } from "../mappers";

export namespace UserService {
  /**
   * Adding a user to the collection.
   * @param user The user object to be stored.
   * @todo Add quality error handling.
   */
  export const addUser = async (user: User): Promise<void> => {
    try {
      await addDoc(FirebaseService.userCollectionRef, user);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  /** Function which tries to get a user from cache. */
  export function getUser(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        FirebaseService.auth,
        user => {
          unsubscribe();
          resolve(user !== null ? UserMapper.fromUserDto(user) : user);
        },
        error => {
          unsubscribe();
          reject(error);
        }
      );
    });
  }

  /**
   * Logout a user.
   */
  export async function logout(): Promise<void> {
    await signOut(FirebaseService.auth);
    console.log("User logged out");
  }
}
