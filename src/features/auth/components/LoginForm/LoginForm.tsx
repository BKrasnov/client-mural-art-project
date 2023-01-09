import { memo, FC, useCallback } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { authLogin } from "src/store/auth/dispatchers";
import { selectLoginError } from "src/store/auth/selectors";

import { initialFormValues, LoginSchema, LoginFormValue } from "./formSettings";
import { FormikProvider, useFormik, Form } from "formik";

import { FormHelperText } from "@mui/material";
import { UiButton } from "@components/UI";
import { FormikControl } from "@components/FormikControl";

import styles from "./LoginForm.module.css";

const LoginFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const loginError = useAppSelector(selectLoginError);

  /**
   * Handles form submit.
   * @param loginData Login data.
   */
  const handleSubmitForm = useCallback(
    async (loginData: LoginFormValue) => {
      dispatch(authLogin(loginData));
      formik.setSubmitting(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: LoginSchema,
    onSubmit: handleSubmitForm,
  });

  return (
    <>
      <h2>
        <span>Login to profile</span>
      </h2>
      <FormikProvider value={formik}>
        <Form className={styles.loginForm}>
          <FormikControl control="input" name="email" type="email" placeholder="Email" />
          <FormikControl control="input" name="password" type="password" placeholder="Password" />
          <FormHelperText error>{loginError}</FormHelperText>
          <UiButton>Log in</UiButton>
        </Form>
      </FormikProvider>
      <div>
        <span>
          Don't have an account? <Link to="/auth/registration">Registration</Link>
        </span>
      </div>
    </>
  );
};

export const LoginForm = memo(LoginFormComponent);
