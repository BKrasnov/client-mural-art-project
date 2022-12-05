import { FC, memo } from "react";

import styles from "./Filters.module.css";

const FiltersComponent: FC = () => {
  return (
    <>
      <div className={styles.wrapperSettings}>
        <input type="search" className={styles.search} placeholder="Поиск по названию" />
        <input type="text" className={styles.sorting} placeholder="Выберите город" />
      </div>
    </>
  );
};

export const Filters = memo(FiltersComponent);
