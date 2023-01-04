enum authErrorCodesMap {
  EMAIL_EXISTS = "auth/email-already-in-use",
}

/**
 * Get firebase error message.
 * @param errorCode Firebase error code.
 */
export function getFirebaseError(errorCode: string | undefined): string | null {
  if(errorCode === undefined) {
    return null;
  }
  if (errorCode === authErrorCodesMap.EMAIL_EXISTS) {
    return "This email is already registered";
  }
  return "Something went wrong. Please change your input";
}