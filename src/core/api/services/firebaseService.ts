import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore/lite";

import { firebaseConfig } from "@core/api/config";

export namespace FirebaseService {
  const MURAL_NAME_COLLECTION = "mural";

  /**  Initialize Firebase. */
  const app = initializeApp(firebaseConfig);

  /**  Create a db. */
  export const db = getFirestore(app);

  /** Collection of books from the Firebase. */
  export const muralCollectionRef = collection(db, MURAL_NAME_COLLECTION);

  export const auth = getAuth(app);
}
