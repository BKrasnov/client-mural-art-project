import { FC, memo } from "react";

import styles from "./Achievements.module.css";

const AchievementsComponent: FC = () => {
  return (
    <div>
      <h2>Достижения</h2>
      <ul className={styles.achievements__list}>
        <li>
          <div>
            <img className={styles.achievements__image} src="https://clck.ru/32x3rn" alt="" />
          </div>
        </li>
        <li>
          <img className={styles.achievements__image} src="https://clck.ru/32x3uC" alt="" />
        </li>
      </ul>
    </div>
  );
};

export const Achievements = memo(AchievementsComponent);
