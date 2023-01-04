/** Validation errors and corresponding descriptions. */
export enum FormValidationError {
  invalidEmail = "Invalid Email",
  tooShortPassword = "Password should be at least 6 characters",
  tooShortNickname = "Nickname should be at least 5 characters",
  passwordsDontMatch = "Passwords dont match",
}

/** Error messages. */
export enum FormMessageError {
  email = "Email is required",
  nickname = 'Nickname is required',
  password = 'Password is required',
  passwordConfirm = 'Password confirm is required',
  passwordPattern = 'Password must contain both letters and numbers',
}