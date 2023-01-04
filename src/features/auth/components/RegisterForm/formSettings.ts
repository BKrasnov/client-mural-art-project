import * as yup from "yup";

import { Registration } from "@core/models";

import { FormValidationError, FormMessageError } from "../../utils/FormErrors";

const MIN_PASSWORD_LENGTH = 6;
const MIN_NICKNAME_LENGTH = 5;

const passwordPattern = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)/;

/** Login form. */
export type RegistrationFormValue = Registration;

export const initialFormValues: RegistrationFormValue = {
  email: "",
  nickname: "",
  password: "",
  confirmPassword: "",
};

const { invalidEmail, tooShortPassword, tooShortNickname, passwordsDontMatch } = FormValidationError;

export const RegisterSchema: yup.SchemaOf<RegistrationFormValue> = yup.object({
  email: yup.string().email(invalidEmail).required(FormMessageError.email),
  nickname: yup.string().min(MIN_NICKNAME_LENGTH, tooShortNickname).required(FormMessageError.nickname),
  password: yup
    .string()
    .min(MIN_PASSWORD_LENGTH, tooShortPassword)
    .matches(passwordPattern, FormMessageError.passwordPattern)
    .required(FormMessageError.password),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], passwordsDontMatch)
    .required(FormMessageError.passwordConfirm),
});
