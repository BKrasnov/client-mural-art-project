import * as yup from "yup";

import { Registration } from "@core/models";

import { FormValidationError } from "../../utils/FormValidationError";

const MIN_PASSWORD_LENGTH = 6;

/** Login form. */
export type RegistrationFormValue = Registration;

export const initialFormValues: RegistrationFormValue = {
  email: "",
  password: "",
};

const EMAIL_ERROR_MESSAGE = "Email is required";

export const RegisterSchema: yup.SchemaOf<RegistrationFormValue> = yup.object({
  email: yup.string().email(FormValidationError.invalidEmail).required(EMAIL_ERROR_MESSAGE),
  password: yup.string().required(FormValidationError.required).min(MIN_PASSWORD_LENGTH, FormValidationError.tooShortPassword),
});
