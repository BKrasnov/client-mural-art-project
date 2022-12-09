import { onAuthStateChanged, signOut } from "firebase/auth";
import { addDoc, getDocs, limit, query, where } from "firebase/firestore/lite";

import { FirebaseService } from "./firebaseService";

import { User } from "@core/models";

export namespace UserService {
  const USER_NAME_COLLECTION = "users";

  /** Collection of users from the Firebase. */
  const userCollectionRef = FirebaseService.getCollectionReference<User>(USER_NAME_COLLECTION);

  /**
   * Adding a user to the collection.
   * @param user The user object to be stored.
   * @todo Add quality error handling.
   */
  export async function addUser(user: User): Promise<void> {
    try {
      await addDoc(userCollectionRef, user);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  /**
   * Getting user by id from firebase.
   * @param id The id of the user.
   */
  export async function getUser(id: string): Promise<User> {
    const queryUser = query(userCollectionRef, where("id", "==", id), limit(1));
    const userSnapshot = await getDocs(queryUser);
    if (userSnapshot.empty) {
      throw new Error(`User with id ${id} doesn't exist`);
    }
    return userSnapshot.docs[0].data();
  }

  /** Function which tries to get a user from cache. */
  export function getUserFromCache(): Promise<User | null> {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        FirebaseService.auth,
        userFirebase => {
          unsubscribe();
          if (userFirebase === null) {
            resolve(null);
            return;
          }
          const user = getUser(userFirebase.uid);
          resolve(user);
        },
        error => {
          unsubscribe();
          reject(error);
        }
      );
    });
  }
}
