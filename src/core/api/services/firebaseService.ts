import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, CollectionReference, DocumentData, getFirestore, QuerySnapshot } from "firebase/firestore/lite";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

import { firebaseConfig } from "@core/api/config";

export namespace FirebaseService {
  const USER_NAME_COLLECTION = "users";

  /**  Initialize Firebase. */
  const app = initializeApp(firebaseConfig);

  /**  Create a db. */
  export const database = getFirestore(app);

  export const auth = getAuth(app);

  /** Collection of users from the Firebase. */
  export const userCollectionRef = collection(database, USER_NAME_COLLECTION);

  /** Initialize Cloud Storage and get a reference to the service. */
  const storage = getStorage(app);

  /**
   * Get the reference to the image from our storage.
   * @param imageRef Reference to the image.
   */
  export async function getImageReference(imageRef: string | undefined): Promise<string> {
    const storageReference = ref(storage, imageRef);
    return await getDownloadURL(storageReference);
  }

  /**
   * Getting typed collectionReference.
   * @param collectionName - Collection name.
   */
  export function getCollectionReference<T = DocumentData>(collectionName: string): CollectionReference<T> {
    return collection(database, collectionName) as CollectionReference<T>;
  }

  /**
   * Method maps query snapshot from Firestore to regular array.
   * @param snapshot Query snapshot with Dtos.
   * @param fromDtoMapper Mapper method which perform mapping.
   * @returns Array with entities.
   */
  export function mapQuerySnapshotToArray<TDto, TData>(snapshot: QuerySnapshot<TDto>, fromDtoMapper: (dto: TDto) => TData): TData[] {
    return snapshot.docs.map(dto => fromDtoMapper(dto.data()));
  }
}
