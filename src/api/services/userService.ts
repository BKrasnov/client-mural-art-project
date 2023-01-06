import { onAuthStateChanged } from "firebase/auth";
import { addDoc, doc, getDocs, limit, query, updateDoc, where } from "firebase/firestore/lite";

import { FirebaseService } from "./firebaseService";

import { Profile, User } from "@core/models";
import { UserMapper } from "@core/mappers";

export namespace UserService {
  const USER_NAME_COLLECTION = "users";

  /** Collection of users from the Firebase. */
  const userCollectionRef = FirebaseService.getCollectionReference<User>(USER_NAME_COLLECTION);

  /**
   * Adding a user to the collection.
   * @param user The user object to be stored.
   */
  export async function addUser(user: User): Promise<void> {
    try {
      const doc = await addDoc(userCollectionRef, user);
      updateDoc(doc, { docId: doc.id });
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

  /**
   * Updating user in firebase.
   * @param profile The profile object to be updated.
   */
  export async function updateUser(profile: Profile): Promise<User> {
    const currentUser = await getUserFromCache();
    if (currentUser === null) {
      throw new Error("User not found");
    }
    const updatedUser = UserMapper.fromUserToProfile(currentUser, profile);
    const docRef = doc(userCollectionRef, updatedUser.docId);
    await updateDoc(docRef, updatedUser);

    return updatedUser;
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
