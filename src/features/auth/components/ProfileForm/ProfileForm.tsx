import { memo, FC, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { userUpdate } from "src/store/user/dispatchers";
import { selectIsUpdateUser } from "src/store/user/selectors";

import { initialFormValues, ProfileFormValue, ProfileEditSchema } from "./formSettings";
import { FormikProvider, useFormik, Form } from "formik";

import { UiButton } from "@components/UI";
import { FormikTextField } from "@components/FormikTextField";

import styles from "./ProfileForm.module.css";

const ProfileFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const isFormSubmitted = useAppSelector(selectIsUpdateUser);

  const navigate = useNavigate();

  /**
   * Handles form submit.
   * @param profile Profile data.
   */
  const handleSubmitForm = useCallback(
    async (profile: ProfileFormValue) => {
      dispatch(userUpdate(profile));
      formik.setSubmitting(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch]
  );

  const formik = useFormik({
    initialValues: initialFormValues,
    validationSchema: ProfileEditSchema,
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
        <span>Fill out your profile</span>
      </h2>
      <FormikProvider value={formik}>
        <Form className={styles.profileForm}>
          <FormikTextField name="firstName" type="text" placeholder="First name" />
          <FormikTextField name="lastName" type="text" placeholder="Last name" />
          <FormikTextField name="sex" type="text" placeholder="Sex" />
          <FormikTextField name="phoneNumber" type="text" placeholder="Phone number" />
          <UiButton>Continue</UiButton>
        </Form>
      </FormikProvider>
    </>
  );
};

export const ProfileForm = memo(ProfileFormComponent);
