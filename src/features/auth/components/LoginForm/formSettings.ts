import * as yup from "yup";

import { Login } from "@core/models";

import { FormValidationError, FormMessageError } from "../../utils/FormErrors";

/** Login form. */
export type LoginFormValue = Login;

export const initialFormValues: LoginFormValue = {
  email: "",
  password: "",
};

export const LoginSchema: yup.SchemaOf<LoginFormValue> = yup.object({
  email: yup.string().email(FormValidationError.invalidEmail).required(FormMessageError.email),
  password: yup.string().required(FormMessageError.password),
});
