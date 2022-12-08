import { FC, memo } from "react";

import { useAppDispatch, useAppSelector } from "@core/store";
import { selectMuralsListFilters } from "@core/store/murals/selectors";
import { setMuralsFilters } from "@core/store/murals/slice";

import { MuralFilters } from "@core/models/murals";

import styles from "./Filters.module.css";

const FiltersComponent: FC = () => {
  const dispatch = useAppDispatch();

  const filters = useAppSelector(selectMuralsListFilters);

  const handleSubmit = (values: MuralFilters): void => {
    if (filters.searchValue !== values.searchValue) {
      dispatch(setMuralsFilters({ searchValue: values.searchValue }));
      console.log(values);
    }
  };

  return (
    <>
      <div>
        <form className={styles.wrapperSettings}>
          <input
            onChange={text => {
              handleSubmit({ searchValue: text.target.value });
            }}
            type="search"
            className={styles.search}
            placeholder="Поиск по названию"
          />
        </form>
      </div>
    </>
  );
};

export const Filters = memo(FiltersComponent);
