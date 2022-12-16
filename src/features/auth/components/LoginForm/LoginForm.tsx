import { memo, FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { authLogin } from "src/store/auth/dispatchers";
import { selectLoginError } from "src/store/auth/selectors";

import { initialFormValues, LoginSchema, LoginFormValue } from "./formSettings";
import { Field, FormikProvider, useFormik } from "formik";

import { FormHelperText } from "@mui/material";

import styles from "./LoginForm.module.css";

const LoginFormComponent: FC = () => {
  const dispatch = useAppDispatch();
  
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
      <>
        <h2>Авторизация пользователя</h2>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
            <Field className={styles.loginForm__input} name="email" placeholder="Почта" label="Email" type="email" required />
            <Field className={styles.loginForm__input} name="password" placeholder="Пароль" label="Password" type="password" required />
            <FormHelperText error>{loginError}</FormHelperText>
            <button type="submit">Войти</button>
          </form>
        </FormikProvider>
        <span>
          Нет аккаунта? <Link to="/auth/registration">Регистрация</Link>
        </span>
      </>
    </>
  );
};

export const LoginForm = memo(LoginFormComponent);
