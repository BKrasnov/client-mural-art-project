import { memo, FC, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { authRegister } from "src/store/auth/dispatchers";
import { selectIsAuthLoading, selectIsAuthSubmitted, selectRegisterError } from "src/store/auth/selectors";

import { initialFormValues, RegisterSchema, RegistrationFormValue } from "./formSettings";
import { Field, FormikProvider, useFormik } from "formik";

import { FormHelperText } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import styles from "./RegistrationForm.module.css";

const RegisterFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsAuthLoading);
  const registerError = useAppSelector(selectRegisterError);
  const isFormSubmitted = useAppSelector(selectIsAuthSubmitted);

  const navigate = useNavigate();

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

  useEffect(() => {
    if (isFormSubmitted) {
      navigate("/personal-area/profile");
    }
  }, [isFormSubmitted, navigate]);

  return (
    <>
      <div className={styles.wrapper}>
        <h2>Регистрация пользователя</h2>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit} className={styles.registerForm}>
            <Field className={styles.registerForm__input} name="email" placeholder="Почта" label="Email" type="email" required />
            <Field className={styles.registerForm__input} name="nickname" placeholder="Введите никнейм" label="NickName" type="text" required />
            <Field className={styles.registerForm__input} name="password" placeholder="Пароль" label="Password" type="password" required />
            <Field  
              className={styles.registerForm__input}
              name="passwordConfirm"
              placeholder="Повторите пароль"
              label="Password"
              type="password"
              required
            />
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
