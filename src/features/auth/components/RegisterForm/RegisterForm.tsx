import { memo, FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@core/store";
import { authRegister } from "@core/store/auth/dispatchers";
import { selectError, selectIsAuthLoading } from "@core/store/auth/selectors";

import { initialFormValues, RegisterSchema, RegistrationFormValue } from "./formSettings";
import { Field, FormikProvider, useFormik } from "formik";

import { FormHelperText } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import styles from "./RegistrationForm.module.css";

const RegisterFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsAuthLoading);
  const loginError = useAppSelector(selectError);

  /**
   * Handles form submit.
   * @param registerData Login data.
   */
  const handleSubmitUserLogin = (registerData: RegistrationFormValue) => {
    console.log(registerData);
    dispatch(authRegister(registerData));
    formik.setSubmitting(false);
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: RegisterSchema,
    onSubmit: handleSubmitUserLogin,
  });

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Регистрация пользователя</h2>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className={styles.registerForm}>
            <Field className={styles.registerForm__input} name="email" placeholder="Почта" label="Email" type="email" required />
            <Field className={styles.registerForm__input} name="password" placeholder="Пароль" label="Password" type="password" required />
            <FormHelperText error>{loginError}</FormHelperText>
            <LoadingButton loading={isLoading} loadingIndicator="Loading…" type="submit">
              Login
            </LoadingButton>
          </form>
        </FormikProvider>
        <Link to="/auth/login">Есть аккаунт? Войти</Link>
      </div>
    </>
  );
};

export const RegistrarionForm = memo(RegisterFormComponent);
