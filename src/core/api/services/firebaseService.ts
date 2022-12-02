import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore/lite";

import { firebaseConfig } from "@core/api/config";

export namespace FirebaseService {
  const MURAL_NAME_COLLECTION = "mural";
  const USER_NAME_COLLECTION = "users";

  /**  Initialize Firebase. */
  const app = initializeApp(firebaseConfig);

  /**  Create a db. */
  export const database = getFirestore(app);

  export const auth = getAuth(app);

  /** Collection of murals from the Firebase. */
  export const muralCollectionRef = collection(database, MURAL_NAME_COLLECTION);

  /** Collection of users from the Firebase. */
  export const userCollectionRef = collection(FirebaseService.database, USER_NAME_COLLECTION);


}
