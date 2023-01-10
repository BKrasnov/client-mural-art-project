import { FC } from "react";

import { FieldHookConfig, useField, ErrorMessage } from "formik";

import { Input, Search, Select } from "./components";

import { OptionsSelect } from "@core/models";

import styles from "./FormikControl.module.css";

interface FieldSettings {
  control: string;
  options?: OptionsSelect[];
}

/**
 * Formik field control component. Create input and select.
 * Template https://github.dev/isiakaabd/Formik-input-component.
 */
export const FormikControl: FC<FieldHookConfig<string> & FieldSettings> = ({ control, options, ...props }) => {
  const [field] = useField(props);

  switch (control) {
    case "input":
      return (
        <div className={styles.fieldWrapper}>
          <Input
            required={props.required}
            type={props.type}
            className={styles.fieldWrapper__input}
            placeholder={props.placeholder}
            {...field}
          />
          <ErrorMessage component="span" name={field.name} className={styles.fieldError} />
        </div>
      );
    case "select":
      return (
        <div className={styles.fieldWrapper}>
          <Select
            required={props.required}
            options={options}
            type="select"
            className={styles.fieldWrapper__select}
            {...field}
          />
          <ErrorMessage component="span" name={field.name} className={styles.fieldError} />
        </div>
      );
    case "search":
      return (
        <div className={styles.fieldWrapper}>
          <Search
            required={props.required}
            type={props.type}
            className={styles.fieldWrapper__search}
            placeholder={props.placeholder}
            {...field}
          />
        </div>
      );
    default:
      return null;
  }
};
