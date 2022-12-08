import { memo, FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@core/store";
import { authLogin } from "@core/store/auth/dispatchers";
import { selectLoginError, selectIsAuthLoading } from "@core/store/auth/selectors";

import { initialFormValues, LoginSchema, LoginFormValue } from "./formSettings";
import { Field, FormikProvider, useFormik } from "formik";

import { FormHelperText } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import styles from "./LoginForm.module.css";

const LoginFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsAuthLoading);
  const loginError = useAppSelector(selectLoginError);

  /**
   * Handles form submit.
   * @param loginData Login data.
   */
  const handleSubmitUserLogin = (loginData: LoginFormValue) => {
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
        <h2>Авторизация пользователя</h2>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
            <Field className={styles.loginForm__input} name="email" placeholder="Почта" label="Email" type="email" required />
            <Field className={styles.loginForm__input} name="password" placeholder="Пароль" label="Password" type="password" required />
            <FormHelperText error>{loginError}</FormHelperText>
            <LoadingButton loading={isLoading} loadingIndicator="Loading…" type="submit">
              Login
            </LoadingButton>
          </form>
        </FormikProvider>
        <span>
          Нет аккаунта? <Link to="/auth/registration">Регистрация</Link>
        </span>
      </div>
    </>
  );
};

export const LoginForm = memo(LoginFormComponent);
