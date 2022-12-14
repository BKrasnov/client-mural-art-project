import { memo, FC, useCallback } from "react";

import { useAppDispatch, useAppSelector } from "src/store";
import { selectIsProfileSubmitted } from "src/store/auth/selectors";
import { authProfile } from "src/store/auth/dispatchers";

import useSubmitForm from "@core/hooks/useSubmitForm";

import { initialFormValues, ProfileFormValue, ProfileEditSchema } from "./formSettings";
import { FormikProvider, useFormik, Form } from "formik";

import { UiButton } from "@components/UI";
import { FormikControl } from "@components/FormikControl";

import { OptionsSelect } from "@core/models";

import styles from "./ProfileForm.module.css";

const URL_PERSONAL_AREA_PROFILE = "/personal-area/profile";

const optionItems: OptionsSelect[] = [
  { key: "Occupation", value: "Your occupation?"},
  { key: "Artist", value: "Artist" },
  { key: "Customer", value: "Customer" },
];

const ProfileFormComponent: FC = () => {
  const dispatch = useAppDispatch();

  const isSubmittedProfile = useAppSelector(selectIsProfileSubmitted);

  /**
   * Handles form submit.
   * @param profile Profile data.
   */
  const handleSubmitForm = useCallback(
    async (profile: ProfileFormValue) => {
      dispatch(authProfile(profile));
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

  useSubmitForm(isSubmittedProfile, URL_PERSONAL_AREA_PROFILE);

  return (
    <>
      <h2>
        <span>Fill out your profile</span>
      </h2>
      <FormikProvider value={formik}>
        <Form className={styles.profileForm}>
          <FormikControl control="input" name="firstName" type="text" placeholder="First name" />
          <FormikControl control="input" name="lastName" type="text" placeholder="Last name" />
          <FormikControl control="input" name="phoneNumber" type="tel" placeholder="Phone number" />
          <FormikControl control="select" name="occupation" options={optionItems}/>
          <UiButton>Continue</UiButton>
        </Form>
      </FormikProvider>
    </>
  );
};

export const ProfileForm = memo(ProfileFormComponent);
