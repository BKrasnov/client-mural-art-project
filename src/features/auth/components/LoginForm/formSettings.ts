import * as yup from "yup";

import { Login } from "@core/models";

import { FormValidationError } from "../../utils/FormValidationError";

/** Login form. */
export type LoginFormValue = Login;

export const initialFormValues: LoginFormValue = {
  email: "",
  password: "",
};

const EMAIL_ERROR_MESSAGE = "Email is required";

export const LoginSchema: yup.SchemaOf<LoginFormValue> = yup.object({
  email: yup.string().email(FormValidationError.invalidEmail).required(EMAIL_ERROR_MESSAGE),
  password: yup.string().required(FormValidationError.required),
});
