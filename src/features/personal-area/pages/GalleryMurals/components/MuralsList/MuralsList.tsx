import { FC, memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@core/store";
import { getMurals } from "@core/store/murals/dispatchers";
import { selectMurals, selectMuralsListFilters, selectMuralsLoading } from "@core/store/murals/selectors";

import { Loader } from "@components/Loader";

import { MuralListItem } from "../MuralListItem";
import { Filters } from "../Filters/Filters";

import styles from "./MuralsList.module.css";

const MuralsListComponent: FC = () => {
  const dispatch = useAppDispatch();

  const murals = useAppSelector(selectMurals);
  const isLoading = useAppSelector(selectMuralsLoading);
  /** @todo Fix empty filters. */
  const filters = useAppSelector(selectMuralsListFilters);

  useEffect(() => {
    if (murals.length === 0) {
      dispatch(getMurals({ filters }));
    }
  }, [dispatch, filters, murals]);

  return (
    <>
      <Filters />
      <section className={styles.muralList}>
        {isLoading ? (
          <Loader />
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
