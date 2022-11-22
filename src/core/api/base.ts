import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

import { firebaseConfig } from "./config";

const MURAL_NAME_COLLECTION = "mural";

/**  Initialize Firebase. */
const app = initializeApp(firebaseConfig);

/**  Create a db. */
export const db = getFirestore(app);

/** Collection of books from the Firebase. */
export const muralCollectionRef = collection(db, MURAL_NAME_COLLECTION);
