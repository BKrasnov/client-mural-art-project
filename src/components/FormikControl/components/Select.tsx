import { FC } from "react";

import { Field, FieldHookConfig } from "formik";

import { OptionsSelect } from "@core/models";

interface SelectProps {
  readonly options?: OptionsSelect[];
}

export const Select: FC<FieldHookConfig<string> & SelectProps> = ({ options, ...field }) => {
  return (
    <Field
      component="select"
      className={field.className}
      name={field.name}
      type={field.type}
      required={field.required || false}
    >
      {options?.map(option => (
        <option key={option.key} value={option.value}>
          {option.value}
        </option>
      ))}
    </Field>
  );
};
