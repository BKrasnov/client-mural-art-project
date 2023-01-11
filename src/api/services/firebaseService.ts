import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  QueryConstraint,
  QuerySnapshot,
} from "firebase/firestore/lite";

import { firebaseConfig } from "@api/config";

export type FirestoreCollectionName = "users" | "murals";

export namespace FirebaseService {
  /**  Initialize Firebase. */
  const app = initializeApp(firebaseConfig);

  /**  Create a db. */
  const database = getFirestore(app);

  export const auth = getAuth(app);

  /**
   * Create a user with email and password.
   * @param email Email user.
   * @param password Password user.
   */
  export async function createUser(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  /** Login a user with email and password.
   * @param email Email user.
   * @param password Password user.
   */
  export async function loginUser(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  }

  export async function logoutUser(): Promise<void> {
    signOut(auth);
  }

  /**
   * Getting typed collectionReference.
   * @param collectionName Collection name.
   */
  export function getCollectionReference<T = DocumentData>(
    collectionName: FirestoreCollectionName
  ): CollectionReference<T> {
    return collection(database, collectionName) as CollectionReference<T>;
  }

  /**
   * Method maps query snapshot from Firestore to regular array.
   * @param snapshot Query snapshot with Dtos.
   * @param fromDtoMapper Mapper method which perform mapping.
   * @returns Array with entities.
   */
  export function mapQuerySnapshotToArray<TDto, TData>(
    snapshot: QuerySnapshot<TDto>,
    fromDtoMapper: (dto: TDto) => TData
  ): TData[] {
    return snapshot.docs.map(dto => fromDtoMapper(dto.data()));
  }

  /**
   * Fetch entities from the firebase collection.
   * @param collectionName Collection name.
   * @param constraints Query constraints.
   * @param fromDtoMapper Mapper method which perform mapping.
   */
  export async function fetchEntities<TDto, TData>(
    collectionName: FirestoreCollectionName,
    constraints: readonly QueryConstraint[] = [],
    fromDtoMapper: (dto: TDto) => TData
  ): Promise<TData[]> {
    try {
      const querySnapshot = await getDocs<TDto>(query(getCollectionReference(collectionName), ...constraints));
      const data = mapQuerySnapshotToArray<TDto, TData>(querySnapshot, fromDtoMapper);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
