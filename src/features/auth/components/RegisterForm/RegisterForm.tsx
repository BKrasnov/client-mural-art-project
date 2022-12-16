import { memo, FC } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { authRegister } from "src/store/auth/dispatchers";
import { selectRegisterError } from "src/store/auth/selectors";

import { initialFormValues, RegisterSchema, RegistrationFormValue } from "./formSettings";
import { Field, FormikProvider, useFormik } from "formik";

import { FormHelperText } from "@mui/material";

import styles from "./RegistrationForm.module.css";

const RegisterFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const registerError = useAppSelector(selectRegisterError);

  /**
   * Handles form submit.
   * @param registerData Login data.
   */
  const handleSubmitUserLogin = async (registerData: RegistrationFormValue) => {
    await dispatch(authRegister(registerData));
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
            <FormHelperText error>{registerError}</FormHelperText>
            <button type="submit">Регистрация</button>
          </form>
        </FormikProvider>
        <span>
          Есть аккаунт? <Link to="/auth/login"> Войти</Link>
        </span>
      </div>
    </>
  );
};

export const RegistrarionForm = memo(RegisterFormComponent);
