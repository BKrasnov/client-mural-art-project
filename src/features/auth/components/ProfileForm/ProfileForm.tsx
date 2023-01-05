import { memo, FC, useCallback } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";

import { initialFormValues, ProfileFormValue, ProfileEditSchema} from "./formSettings";
import { FormikProvider, useFormik, Form } from "formik";

import { UiButton } from "@components/UI";
import { FormikTextField } from "@components/FormikTextField";

import styles from "./ProfileForm.module.css";
import { userUpdate } from "src/store/user/dispatchers";

const ProfileFormComponent: FC = () => {
  const dispatch = useAppDispatch();

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
          {/* <FormikTextField name="phoneNumber" type="text" placeholder="phoneNumber" /> */}
          <UiButton>Continue</UiButton>
        </Form>
      </FormikProvider>
    </>
  );
};

export const ProfileForm = memo(ProfileFormComponent);
