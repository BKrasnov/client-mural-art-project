import { FC, memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@core/store";
import { getMurals } from "@core/store/murals/dispatchers";
import { selectMurals, selectMuralsLoading } from "@core/store/murals/selectors";

import { MuralListItem } from "../MuralListItem/MuralListItem";
import { Loader } from "@components/Loader";

import styles from "./MuralsList.module.css";

const MuralsListComponent: FC = () => {
  const dispatch = useAppDispatch();

  const murals = useAppSelector(selectMurals);
  const isLoading = useAppSelector(selectMuralsLoading);

  useEffect(() => {
    if(murals.length === 0) {
      dispatch(getMurals(""));
    }
  }, [dispatch, murals]);

  return (
    <section className={styles.muralList}>
      {isLoading ? (
        <Loader />
      ) : (
        murals.map(mural => {
          return <MuralListItem key={mural.id} mural={mural} />;
        })
      )}
    </section>
  );
};

export const MuralsList = memo(MuralsListComponent);
