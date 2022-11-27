import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore/lite";

import { firebaseConfig } from "@core/api/config";

export namespace FirebaseService {
  const MURAL_NAME_COLLECTION = "mural";

  /**  Initialize Firebase. */
  const app = initializeApp(firebaseConfig);

  /**  Create a db. */
  export const database = getFirestore(app);

  /** Collection of murals from the Firebase. */
  export const muralCollectionRef = collection(database, MURAL_NAME_COLLECTION);

  export const auth = getAuth(app);
}
