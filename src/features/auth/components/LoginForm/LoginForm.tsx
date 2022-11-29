import { memo, FC } from "react";

import { useAppDispatch, useAppSelector } from "@core/store";
import { authLogin } from "@core/store/auth/dispatchers";
import { selectError, selectIsAuthLoading } from "@core/store/auth/selectors";

import { initialFormValues, LoginSchema, LoginFormValue } from "./formSettings";
import { Field, FormikProvider, useFormik } from "formik";

import { TextField } from "formik-mui";
import { FormHelperText } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import styles from "./LoginForm.module.css";

const LoginFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsAuthLoading);
  const loginError = useAppSelector(selectError);

  /**
   * Handles form submit.
   * @param loginData Login data.
   */
  const handleSubmitUserLogin = (loginData: LoginFormValue) => {
    console.log(loginData);
    dispatch(authLogin(loginData));
    formik.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: LoginSchema,
    onSubmit: handleSubmitUserLogin,
  });

  return (
    <>
      <div className={styles.wrapper}>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            <Field component={TextField} name="email" label="Email" type="email" required />
            <Field component={TextField} name="password" label="Password" type="password" required />
            <FormHelperText error>{loginError}</FormHelperText>
            <LoadingButton loading={isLoading} loadingIndicator="Loading…" type="submit">
              Login
            </LoadingButton>
          </form>
        </FormikProvider>
      </div>
    </>
  );
};

export const LoginForm = memo(LoginFormComponent);
