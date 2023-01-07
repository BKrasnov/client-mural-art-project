import * as yup from "yup";

import { Profile } from "@core/models";

import { FormMessageError } from "../../utils/FormErrors";

const MIN_NAME_LENGTH = 2;

/** https://stackoverflow.com/questions/52483260/validate-phone-number-with-yup */
const phonePattern = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const namePattern = /^[A-Za-z\s]+$/;

/** Profile form. */
export type ProfileFormValue = Profile;

export const initialFormValues: ProfileFormValue = {
  firstName: "",
  lastName: "",
  occupation: "",
  phoneNumber: "",
};

export const ProfileEditSchema: yup.SchemaOf<ProfileFormValue> = yup.object().shape(
  {
    firstName: yup
      .string()
      .matches(namePattern, FormMessageError.namePattern)
      .min(MIN_NAME_LENGTH)
      .required(FormMessageError.firstName),
    lastName: yup
      .string()
      .matches(namePattern, FormMessageError.namePattern)
      .min(MIN_NAME_LENGTH)
      .required(FormMessageError.lastName),
    occupation: yup.string().required(FormMessageError.occupation),
    phoneNumber: yup.string().when("phoneNumber", value => {
      if (value) {
        return yup
          .string()
          .matches(phonePattern, FormMessageError.phonePattern)
          .required("Required");
      } else {
        return yup.string().notRequired();
      }
    }),
  },
  [["phoneNumber", "phoneNumber"]]
);
