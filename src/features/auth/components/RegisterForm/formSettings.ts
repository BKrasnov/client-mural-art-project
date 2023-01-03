import * as yup from "yup";

import { Registration } from "@core/models";

import { FormValidationError, FormMessageError } from "../../utils/FormErrors";

const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,64}$/i;

const MIN_PASSWORD_LENGTH = 6;

/** Login form. */
export type RegistrationFormValue = Registration;

export const initialFormValues: RegistrationFormValue = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirm: "",
};

const { invalidEmail, tooShortPassword, passwordsDontMatch } = FormValidationError;

export const RegisterSchema: yup.SchemaOf<RegistrationFormValue> = yup.object({
  email: yup.string().email(invalidEmail).required(FormMessageError.email),
  nickname: yup.string().required(FormMessageError.nickname),
  password: yup
    .string()
    .required(FormMessageError.password)
    .min(MIN_PASSWORD_LENGTH, tooShortPassword)
    .matches(passwordPattern),
  passwordConfirm: yup
    .string()
    .required(FormMessageError.passwordConfirm)
    .oneOf([yup.ref("password"), null], passwordsDontMatch),
});
