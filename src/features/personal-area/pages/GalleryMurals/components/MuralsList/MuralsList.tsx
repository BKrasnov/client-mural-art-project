import { FC, memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "src/store";
import { getMurals } from "src/store/murals/dispatchers";
import { selectMurals, selectMuralsListFilters, selectMuralsLoading } from "src/store/murals/selectors";

import { MuralListItem } from "../MuralListItem";
import Pagination from '@mui/material/Pagination';

import styles from "./MuralsList.module.css";

const MuralsListComponent: FC = () => {
  const dispatch = useAppDispatch();

  const murals = useAppSelector(selectMurals);
  const isLoading = useAppSelector(selectMuralsLoading);
  const filters = useAppSelector(selectMuralsListFilters);

  useEffect(() => {
    dispatch(getMurals(filters));
  }, [dispatch, filters]);

  if (!murals.length) {
    return <div>Нет данных</div>;
  }

  return (
    <>
      {isLoading ? (
        <div>Загрузка</div>
      ) : (
        <>
          <section className={styles.muralList}>
            {murals.map(mural => {
              return <MuralListItem key={mural.id} mural={mural} />;
            })}
          </section>
          <Pagination count={10} />
        </>
      )}
    </>
  );
};

export const MuralsList = memo(MuralsListComponent);