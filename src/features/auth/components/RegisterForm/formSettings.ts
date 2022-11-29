import * as yup from "yup";

import { Registration } from "@core/models";

/** Login form. */
export type RegistrationFormValue = Registration;

export const initialFormValues: RegistrationFormValue = {
  email: "",
  password: "",
};

const EMAIL_ERROR_MESSAGE = "Email is required";
const PASSWORD_ERROR_MESSAGE = "Password is required";

export const RegisterSchema: yup.SchemaOf<RegistrationFormValue> = yup.object({
  email: yup.string().email().required(EMAIL_ERROR_MESSAGE),
  password: yup.string().required(PASSWORD_ERROR_MESSAGE),
});
