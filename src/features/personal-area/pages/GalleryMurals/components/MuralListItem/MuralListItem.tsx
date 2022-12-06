import { FC, memo } from "react";

import { Mural } from "@core/models";

import styles from "./MuralListItem.module.css";

interface Props {
  /** Mural. */
  readonly mural: Mural;
}

const MuralListItemComponent: FC<Props> = ({ mural }) => {

  return (
    <button className={styles.mural}>
      <div className={styles.mural__imageContainer}>
        <img className={styles.mural__image} src={mural.imageRef} alt="mural" />
      </div>
      <div className={styles.mural__info}>
        <h1 className={styles.mural__title}>{mural.title}</h1>
        <span className={styles.mural__city}>{mural.location}</span>
        <span className={styles.mural__event}>Street-art Красноярск</span>
      </div>
    </button>
  );
};

export const MuralListItem = memo(MuralListItemComponent);
