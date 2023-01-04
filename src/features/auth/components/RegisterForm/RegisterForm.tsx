import { memo, FC, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { authRegister } from "src/store/auth/dispatchers";
import { selectIsAuthSubmitted, selectRegisterError } from "src/store/auth/selectors";

import { initialFormValues, RegisterSchema, RegistrationFormValue } from "./formSettings";
import { FormikProvider, Form, useFormik } from "formik";

import { FormHelperText } from "@mui/material";
import { UiButton } from "@components/UI";
import { FormikTextField } from "@components/FormikTextField";

import styles from "./RegistrationForm.module.css";

const RegistrationFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const registrationError = useAppSelector(selectRegisterError);
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
      <h2>
        <span>User registration</span>
      </h2>
      <FormikProvider value={formik}>
        <Form className={styles.registerForm}>
          <FormikTextField name="email" type="email" placeholder="Email" />
          <FormikTextField name="nickname" type="text" placeholder="Nickname" />
          <FormikTextField name="password" type="password" placeholder="Password" />
          <FormikTextField name="confirmPassword" type="password" placeholder="Confirm password" />
          <FormHelperText error>{registrationError}</FormHelperText>
          <UiButton>Register</UiButton>
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
