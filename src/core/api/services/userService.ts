import { signOut } from "firebase/auth";
import { addDoc } from "firebase/firestore/lite";

import { FirebaseService } from "./firebaseService";

import { User } from "@core/models";

export namespace UserService {

  /**
   * Adding a user to the collection.
   * @param user The user object to be stored.
   * @todo Add quality error handling.
   */
  export const addUser = async (user: User): Promise<void> => {
    try {
      const userRef = await addDoc(FirebaseService.userCollectionRef, user);
      console.log("Document written with ID: ", userRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  /**
   * Logout a user.
   */
  export async function logout(): Promise<void> {
    await signOut(FirebaseService.auth);
  }
}
