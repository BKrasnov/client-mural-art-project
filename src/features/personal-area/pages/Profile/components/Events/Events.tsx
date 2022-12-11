import { FC, memo } from "react";

import styles from "./Events.module.css";

const EventsComponent: FC = () => {
  return (
    <div>
      <h2>Мои завершенные мероприятия</h2>
      <ul className={styles.events__list}>
        <li>
          <div>
            <img className={styles.events__image} src="https://clck.ru/32x3rn" alt="" />
          </div>
        </li>
        <li>
          <img className={styles.events__image} src="https://clck.ru/32x3uC" alt="" />
        </li>
      </ul>
    </div>
  );
};

export const Events = memo(EventsComponent);
