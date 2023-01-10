import { memo, FC, useCallback } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { authRegister } from "src/store/auth/dispatchers";
import { selectIsAuth, selectRegisterError } from "src/store/auth/selectors";

import { initialFormValues, RegisterSchema, RegistrationFormValue } from "./formSettings";
import { FormikProvider, Form, useFormik } from "formik";

import { FormHelperText } from "@mui/material";
import { UiSubmitButton } from "@components/UI";
import { FormikControl } from "@components/FormikControl";

import useSubmitForm from "@core/hooks/useSubmitForm";

import styles from "./RegistrationForm.module.css";

const URL_AUTH_PROFILE = "/auth/profile";

const RegistrationFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const registrationError = useAppSelector(selectRegisterError);
  const isAuthSubmitted = useAppSelector(selectIsAuth);

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
  
  useSubmitForm(isAuthSubmitted, URL_AUTH_PROFILE);

  return (
    <>
      <h2>
        <span>User registration</span>
      </h2>
      <FormikProvider value={formik}>
        <Form className={styles.registerForm}>
          <FormikControl control="input" name="email" type="email" placeholder="Email" />
          <FormikControl control="input" name="nickname" type="text" placeholder="Nickname" />
          <FormikControl control="input" name="password" type="password" placeholder="Password" />
          <FormikControl control="input" name="confirmPassword" type="password" placeholder="Confirm password" />
          <FormHelperText error>{registrationError}</FormHelperText>
          <UiSubmitButton classes={styles.registerForm__button}>Register</UiSubmitButton>
        </Form>
      </FormikProvider>
      <div>
        <span>
          Already have an account? <Link to="/auth/login">Log In</Link>
        </span>
      </div>
    </>
  );
};

export const RegistrarionForm = memo(RegistrationFormComponent);
