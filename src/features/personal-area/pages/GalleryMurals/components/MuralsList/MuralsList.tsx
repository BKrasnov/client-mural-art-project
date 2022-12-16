import { FC, memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "src/store";
import { getMurals } from "src/store/murals/dispatchers";
import { selectMurals, selectMuralsListFilters, selectMuralsLoading } from "src/store/murals/selectors";

import { Loader } from "@components/Loader";

import { Filters } from "../Filters/Filters";
import { MuralListItem } from "../MuralListItem";

import styles from "./MuralsList.module.css";

const MuralsListComponent: FC = () => {
  const dispatch = useAppDispatch();

  const murals = useAppSelector(selectMurals);
  const isLoading = useAppSelector(selectMuralsLoading);
  const filters = useAppSelector(selectMuralsListFilters);

  useEffect(() => {
    dispatch(getMurals({ filters }));
  }, [dispatch, filters]);

  return (
    <>
      <Filters/>
      <section className={styles.muralList}>
        {isLoading ? (
          <div>Загрузка</div>
        ) : (
          murals.map(mural => {
            return <MuralListItem key={mural.id} mural={mural} />;
          })
        )}
      </section>
    </>
  );
};

export const MuralsList = memo(MuralsListComponent);
