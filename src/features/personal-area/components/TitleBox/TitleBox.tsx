import { FC, memo } from "react";

import styles from "./TitleBox.module.css";

const TitleBoxComponent: FC = () => (
  <>
    <div className={styles.titleBox}>
      <h1>Главная</h1>
      <h2>id: 60603</h2>
    </div>
  </>
);

export const TitleBox = memo(TitleBoxComponent);
