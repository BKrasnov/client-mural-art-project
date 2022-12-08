import { FC, memo, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/store";
import { selectMuralDetailsById } from "src/store/muralDetails/selectors";
import { getMuralById } from "src/store/muralDetails/dispatchers";

import styles from "./MuralDetails.module.css";

const MuralDetailsComponent: FC = () => {
  const muralId = Number(useParams().id);

  const dispatch = useAppDispatch();

  const mural = useAppSelector(state => selectMuralDetailsById(state, muralId));

  useEffect(() => {
    dispatch(getMuralById(muralId));
  }, [dispatch, muralId]);

  return (
    <>
      <div className={styles.container}>
        <section>
          <h2>{mural?.title}</h2>
          <p>{mural?.description}</p>
          <div>{mural?.rating}</div>
        </section>
        <img className={styles.image} src={mural?.imageRef} alt="" />
      </div>
    </>
  );
};

export const MuralDetails = memo(MuralDetailsComponent);
