enum authErrorCodesMap {
  EmailExists = "auth/email-already-in-use",
  InvalidPassword = "auth/wrong-password",
  TooManyAttemptsTryLater = "auth/too-many-requests",
}

interface errorItem {
  code: authErrorCodesMap;
  message: string;
}

const errorItems: errorItem[] = [
  {
    code: authErrorCodesMap.EmailExists,
    message: "This email is already registered",
  },
  {
    code: authErrorCodesMap.InvalidPassword,
    message: "Wrong password",
  },
  {
    code: authErrorCodesMap.TooManyAttemptsTryLater,
    message: "Too many attempts. Please try again later",
  },
];

/**
 * Get firebase error message.
 * @param errorCode Firebase error code.
 */
export function getFirebaseError(errorCode: string | undefined): string | undefined {
  const error = errorItems.find(error => {
    if (error.code === errorCode) {
      return error;
    }
    return undefined;
  });

  return error?.message;
}
