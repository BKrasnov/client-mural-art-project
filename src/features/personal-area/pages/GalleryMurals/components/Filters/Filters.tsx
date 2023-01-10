import { FC, memo } from "react";

import { useAppDispatch, useAppSelector } from "src/store";
import { selectMuralsListFilters } from "src/store/murals/selectors";
import { setMuralsFilters } from "src/store/murals/slice";

import { Form, FormikProvider, useFormik } from "formik";

import { FormikControl } from "@components/FormikControl";
import { UiSubmitButton } from "@components/UI";

import { MuralFilters } from "@core/models";

import styles from "./Filters.module.css";

const initialFormValues: MuralFilters = {
  searchValue: "",
};

const FiltersComponent: FC = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectMuralsListFilters);

  const handleSubmit = (values: MuralFilters): void => {
    if (filters.searchValue !== values.searchValue) {
      dispatch(setMuralsFilters({ searchValue: values.searchValue }));
    }
  };

  const formik = useFormik({
    initialValues: initialFormValues,
    onSubmit: handleSubmit,
  });

  return (
    <FormikProvider value={formik}>
      <Form className={styles.filterPanel}>
        <FormikControl control="search" name="searchValue" type="search" placeholder="Search" />
        <UiSubmitButton>Submit</UiSubmitButton>
      </Form>
    </FormikProvider>
  );
};

export const Filters = memo(FiltersComponent);
