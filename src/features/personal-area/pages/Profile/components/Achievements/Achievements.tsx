import { FC, memo } from "react";

import styles from "./Achievements.module.css";

const AchievementsComponent: FC = () => {
  const achievements = [
    {
      link: "https://firebasestorage.googleapis.com/v0/b/mural-757c6.appspot.com/o/achievements%2Fpaint-spray.png?alt=media&token=768f94f7-c8c5-4496-8478-b3cf46e8cb5d",
    },
    {
      link: "https://firebasestorage.googleapis.com/v0/b/mural-757c6.appspot.com/o/achievements%2Fgraffiti.png?alt=media&token=5b8fefa9-3e12-4e2c-8930-958dbe0b0c57",
    },
  ];

  return (
    <div className={styles.achievements}>
      <h3>Достижения</h3>
      <ul className={styles.achievements__list}>
        <li>
          <div>
            <img className={styles.achievements__image} src={achievements[0].link} alt="" />
          </div>
        </li>
        <li>
          <img className={styles.achievements__image} src={achievements[1].link} alt="" />
        </li>
      </ul>
    </div>
  );
};

export const Achievements = memo(AchievementsComponent);
