import { FC, memo, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@core/store";
import { getMurals } from "@core/store/murals/dispatchers";
import { MuralListItem } from "../MuralListItem/MuralListItem";
import { selectMurals } from "@core/store/murals/selectors";

import styles from "./MuralsList.module.css";

const MuralsListComponent: FC = () => {
  const dispatch = useAppDispatch();

  const murals = useAppSelector(selectMurals);

  useEffect(() => {
    dispatch(getMurals(""));
  }, [dispatch]);

  return (
    <section className={styles.muralList}>
      {murals.map(mural => {
        return <MuralListItem key={mural.id} mural={mural} />;
      })}
    </section>
  );
};

export const MuralsList = memo(MuralsListComponent);
