import { memo } from "react";

import { infoText } from "./infoText";

import styles from "./Info.module.css";

const InfoComponent = () => (
  <section className={styles.info}>
    <div className={styles.info__descriptions}>
      <div className={styles.info__title}>
        <span className={styles.info__titleText}>{infoText.siberianMuralTitle}</span>
      </div>
      <div>
        <p className={styles.info__paragraph}>{infoText.siberianMuralIs}</p>
        <br />
        <p className={styles.info__paragraph}>{infoText.siberianMuralTarget}</p>
      </div>
    </div>
    <img className={styles.info__image} alt="" />
  </section>
);

export const Info = memo(InfoComponent);
