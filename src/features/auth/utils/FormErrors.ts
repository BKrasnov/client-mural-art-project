/** Validation errors and corresponding descriptions. */
export enum FormValidationError {
  invalidEmail = "Invalid Email",
  tooShortPassword = "Password should be at least 6 characters",
  tooShortNickname = "Nickname should be at least 5 characters",
  passwordsDontMatch = "Passwords dont match",
}

/** Error message. */
export enum FormMessageError {
  email = "Email is required",
  nickname = "Nickname is required",
  firstName = "First name is required",
  lastName = "Last name is required",
  password = "Password is required",
  passwordConfirm = "Password confirm is required",
  passwordPattern = "Password must contain both letters and numbers",
  phonePattern = "Phone number must contain only numbers",
  namePattern = "Name must contain only letters",
}
