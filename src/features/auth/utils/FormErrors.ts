/** Validation errors and corresponding descriptions. */
export enum FormValidationError {
  invalidEmail = "Invalid Email",
  tooShortPassword = "Password should be at least 6 characters",
  tooShortFirstName = "First name should be at least 2 characters",
  tooShortLastName = "Last name should be at least 2 characters",
  tooShortNickname = "Nickname should be at least 5 characters",
  passwordsDontMatch = "Passwords dont match",
}

/** Error message. */
export enum FormMessageError {
  email = "Email is required",
  nickname = "Nickname is required",
  firstName = "First name is required",
  lastName = "Last name is required",
  occupation = "Occupation is required",
  password = "Password is required",
  passwordConfirm = "Password confirm is required",
  passwordPattern = "Password must contain both letters and numbers",
  phoneNumber = "Please fill in your phone number",
  phonePattern = "The phone number must contain only numbers, six or more",
  namePattern = "Name must contain only letters",
}
