import { FC, memo } from "react";
import { Link } from "react-router-dom";

import { Mural } from "@core/models";

import styles from "./MuralListItem.module.css";

interface Props {
  /** MuralList element. */
  readonly mural: Mural;
}

const MuralListItemComponent: FC<Props> = ({ mural }) => {
  const linkToMuralId = `mural/${mural.id}`;

  return (
    <>
      <button className={styles.mural}>
        <Link to={linkToMuralId}>
          <div className={styles.mural__imageContainer}>
            <img className={styles.mural__image} src={mural.imageRef} alt="mural" />
          </div>
          <div className={styles.mural__info}>
            <h1 className={styles.mural__title}>{mural.title}</h1>
            <span className={styles.mural__city}>{mural.location ?? <span>Нет города</span>}</span>
          </div>
        </Link>
      </button>
    </>
  );
};

export const MuralListItem = memo(MuralListItemComponent);
