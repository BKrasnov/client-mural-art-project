import * as yup from "yup";

import { Login } from "@core/models";

import { FormValidationError, FormMessageError } from "../../utils/FormErrors";

const MIN_PASSWORD_LENGTH = 6;
const passwordPattern = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)/;

/** Login form. */
export type LoginFormValue = Login;

export const initialFormValues: LoginFormValue = {
  email: "",
  password: "",
};

const { invalidEmail, tooShortPassword } = FormValidationError;

export const LoginSchema: yup.SchemaOf<LoginFormValue> = yup.object({
  email: yup.string().email(invalidEmail).required(FormMessageError.email),
  password: yup
    .string()
    .min(MIN_PASSWORD_LENGTH, tooShortPassword)
    .matches(passwordPattern, FormMessageError.passwordPattern)
    .required(FormMessageError.password),
});
