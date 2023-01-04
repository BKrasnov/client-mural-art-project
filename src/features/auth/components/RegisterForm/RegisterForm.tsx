import { memo, FC, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { authRegister } from "src/store/auth/dispatchers";
import { selectIsAuthSubmitted, selectRegisterError } from "src/store/auth/selectors";

import { initialFormValues, RegisterSchema, RegistrationFormValue } from "./formSettings";
import { Field, FormikProvider, useFormik, Form, ErrorMessage } from "formik";

import { FormHelperText } from "@mui/material";

import styles from "./RegistrationForm.module.css";

const RegistrationFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const registerError = useAppSelector(selectRegisterError);
  const isFormSubmitted = useAppSelector(selectIsAuthSubmitted);

  const navigate = useNavigate();

  /**
   * Handles form submit.
   * @param registerData Registration data.
   */
  const handleSubmitForm = useCallback(
    async (registerData: RegistrationFormValue) => {
      await dispatch(authRegister(registerData));
      formik.setSubmitting(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: RegisterSchema,
    onSubmit: handleSubmitForm,
  });

  useEffect(() => {
    if (isFormSubmitted) {
      navigate("/personal-area/profile");
    }
  }, [isFormSubmitted, navigate]);
  return (
    <>
      <div className={styles.wrapper}>
        <h2>
          <span>User registration </span>
        </h2>
        <FormikProvider value={formik}>
          <Form className={styles.registerForm}>
            <Field
              className={styles.registerForm__input}
              name="email"
              placeholder="Email"
              type="email"
              required
            />
            <ErrorMessage component="div" name="email" className={styles.errorMessage} />
            <Field
              className={styles.registerForm__input}
              name="nickname"
              placeholder="Nickname"
              type="text"
              required
            />
            <ErrorMessage component="div" name="nickname" className={styles.errorMessage} />
            <Field
              className={styles.registerForm__input}
              name="password"
              placeholder="Password"
              type="password"
              required
            />
            <ErrorMessage component="div" name="password" className={styles.errorMessage} />
            <Field
              className={styles.registerForm__input}
              name="confirmPassword"
              placeholder="Confirm password"
              type="password"
              required
            />
            <ErrorMessage component="div" name="confirmPassword" className={styles.errorMessage} />
            <FormHelperText error>{registerError}</FormHelperText>
            <button type="submit" className={styles.buttonForm}>Register</button>
          </Form>
        </FormikProvider>
        <span>
          Already have an account? <Link to="/auth/login">Log In</Link>
        </span>
      </div>
    </>
  );
};

export const RegistrarionForm = memo(RegistrationFormComponent);
