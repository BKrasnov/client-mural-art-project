import { FC } from "react";

import { Field, FieldHookConfig, useField, ErrorMessage } from "formik";

import styles from "./FormikTextField.module.css";

export const FormikTextField: FC<FieldHookConfig<string>> = ({ placeholder, ...props }) => {
  const [field] = useField(props);
  return (
    <>
      <Field
        className={styles.formikTextField}
        name={field.name}
        placeholder={placeholder}
        type={props.type}
        required
      />
      
      <ErrorMessage component="span" name={field.name} className={styles.errorMessage} />
    </>
  );
};
