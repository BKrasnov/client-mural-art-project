import * as yup from "yup";
import { Login } from "@core/models";

/** Login form. */
export type LoginFormValue = Login;

export const initialFormValues: LoginFormValue = {
  email: "",
  password: "",
};

const EMAIL_ERROR_MESSAGE = "Email is required";
const PASSWORD_ERROR_MESSAGE = "Password is required";

export const LoginSchema: yup.SchemaOf<LoginFormValue> = yup.object({
  email: yup.string().email().required(EMAIL_ERROR_MESSAGE),
  password: yup.string().required(PASSWORD_ERROR_MESSAGE),
});
